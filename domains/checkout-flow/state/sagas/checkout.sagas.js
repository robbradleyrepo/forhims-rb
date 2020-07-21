import * as types from "../../../../constants/ActionTypes";
import actions from "../../../../actions";
import { browserHistory } from "react-router";
import { delay } from "redux-saga";
import { stopSubmit } from "redux-form";
import { propOr, isEmpty, merge } from "ramda";
import api from "../../../../sagas/api";
import config from "../../../../config";
import {
  all,
  call,
  fork,
  put,
  select,
  spawn,
  take,
  takeEvery
} from "redux-saga/effects";
import { selectTotalFromCartState } from "../selectors/cart";
import {
  cartHasShippingAddressId,
  containsRx,
  getActiveOrder,
  getActiveOrderItems,
  getCartItems,
  getCartShippingAddressId,
  hasDob,
  hasPaymentMethod,
  hasPendingOrder,
  hasSession,
  orderContainsRx,
  orderHasShippingAddressId,
  selectCouponFromCart,
  getCouponFromAnyState,
  selectVisit,
  selectActiveVisit,
  userHasShippingAddresses
} from "../selectors/checkout";
import {
  apiTotalsCalc,
  attemptChargeForOrder,
  calculateCartTotals,
  createItemInOrder,
  makeOrder,
  maybeCreateVisit,
  updateOrderById,
  updateUser,
  validateCart
} from "./requests";
import { CHECKOUT, CHECKOUT_ACTIONS, UI, CART, ACTIVITY } from "../actions";
import { PAYMENT_ACTIONS } from "../../../payment/state/payment.actions";
import {
  CHECKOUT_FLOW_STEPS,
  CHECKOUT_STEP_NAMES
} from "../../checkout-flow.constants";
import { toastrHandler } from "../../../../modules/toastr/toastr.actions";
import { getMe } from "../../../../selectors/me";
import { hasValue } from "../../../../utils";

import { getNextStep } from "./helper";

import {
  sourceToCardDetail,
  selectSession
} from "../../../payment/state/payment.selectors";

import { CART_PROMO_FORM } from "../../../../components/checkout/cart/cart-promo/cart-promo.constants";

// Constants

const RESET_NUMBERS = {
  discount: null,
  grandTotal: null,
  shipping: null,
  tax: null,
  total: null
};

// Creation status
const CREATION_CANCELLED = "cancelled";

// Next step in checkout
// ---

const { url, env, paths } = config.api;

function* watchCheckoutGotoStep() {
  yield takeEvery(CHECKOUT_ACTIONS.GO_TO_STEP, handleCheckoutGotoStep);
}

function* watchDrawerCloseBeforeEMRSubmission() {
  const { type } = yield take([types.HIDE_DRAWER, types.SUBMIT_EMR_FORM]);
  if (type === types.HIDE_DRAWER) {
    yield put(ACTIVITY.hide());
    yield put(actions.checkout.activeOrderHasPendingVisit.trigger());
  }
}

export function* handleCheckoutGotoStep({ payload }) {
  // TODO: Is the step that we're switching too actually available, should they be directed back?
  const { step } = payload;
  if (CHECKOUT_FLOW_STEPS[step]) {
    yield put(CHECKOUT.changeStep(step));
  }
}

// Next step!
// ---

function* watchCheckoutNextStep() {
  yield takeEvery(CHECKOUT_ACTIONS.NEXT_STEP, handleCheckoutNextStep);
}

export function* handleCheckoutNextStep() {
  try {
    const creationStatus = yield call(maybeCreateOrder);
    if (creationStatus === CREATION_CANCELLED) {
      return;
    }
    let order = yield select(getActiveOrder);
    let fn = order && order.id ? getNextOrderStep : getNextCartStep;
    let nextStep = yield call(fn);

    yield put(CHECKOUT.changeStep(nextStep));
  } catch (error) {
    console.log(error);
  }
}

function* watchCheckoutStepChanged() {
  yield takeEvery(CHECKOUT_ACTIONS.CHANGE_STEP, handleCheckoutStepChanged);
}

// React to checkout step change events
// Whether step change was dispatched by goToStep or nextStep
export function* handleCheckoutStepChanged({ payload }) {
  const nextStep = propOr("", "step", payload);
  let me = yield select(getMe);

  let order = yield select(getActiveOrder);
  if (!order) {
    yield select(maybeCreateOrder);
    order = yield select(getActiveOrder);
  }

  let visit = yield select(selectActiveVisit);

  if (nextStep === CHECKOUT_STEP_NAMES.ACCOUNT && me.email) {
    yield put(CHECKOUT.nextStep());
  }

  if (nextStep === CHECKOUT_STEP_NAMES.CART) {
    // if visit does not exist, we should create one and bump them back to the visit flow
    if (!visit && order) {
      yield put(ACTIVITY.show());
      yield call(createVisit, order);
      yield put(ACTIVITY.hide());
    } else {
      yield put(ACTIVITY.hide());
      yield handleCalculateCartTotal();
    }
  }

  if (nextStep === CHECKOUT_STEP_NAMES.DATE_OF_BIRTH) {
    if (me && me.dob) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.SHIPPING));
    }
  }

  if (nextStep === CHECKOUT_STEP_NAMES.SHIPPING) {
    if (!visit) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.VISIT));
    }
  }

  if (nextStep === CHECKOUT_STEP_NAMES.REVIEW_ORDER) {
    if (!visit) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.VISIT));
    } else {
      yield put(actions.order.calculateTotal());
    }
  }

  if (nextStep === CHECKOUT_STEP_NAMES.PAYMENT && order) {
    let shippingAddressId = yield select(getCartShippingAddressId);
    // Shipping id must be set first, otherwise, the visit cannot be completed
    if (!shippingAddressId) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.SHIPPING));
      return;
    }
    yield call(updateOrderById, order.id, { shippingAddressId });
    yield put(actions.order.patchOrder({ shippingAddressId }));

    if (!visit) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.VISIT));
    } else {
      yield call(updateVisitById, visit.id, { status: "answered" });
    }
  }

  if (nextStep === CHECKOUT_STEP_NAMES.VISIT && order) {
    yield put(ACTIVITY.show());
    yield call(createVisit, order);
    // doing this here to make the sure coupon is applied before the added to cart page
    yield handleCalculateCartTotal();
    yield put(ACTIVITY.hide());
  }
}

function* updateVisitById(visitId, payload) {
  let { response, error } = yield call(api.patch, {
    authorize: true,
    payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.visits}?id=eq.${visitId}`
  });
  if (error) {
    throw error;
  }
  return response;
}

export function* createVisit(order) {
  if (!order || !order.id) {
    return;
  }
  let { visitId } = yield call(maybeCreateVisit, { orderId: order.id });

  yield put(actions.emr.findVisitById(visitId));

  // Fetch visit
  let visit, visitLoaded;
  while (!visitLoaded) {
    yield delay(100);
    visit = yield select(selectVisit);
    visitLoaded = !!visit;
  }
  $GTM.createVisit.trigger();
  // Open visit
  yield put(UI.showEmr());
  yield spawn(watchDrawerCloseBeforeEMRSubmission);
}

function* getNextCartStep() {
  const args = yield [
    select(hasSession),
    select(containsRx),
    select(hasDob),
    select(cartHasShippingAddressId),
    select(userHasShippingAddresses),
    select(hasPaymentMethod),
    select(getCartShippingAddressId)
  ];

  return getNextStep.apply(null, args);
}

export function* getNextOrderStep() {
  const args = yield [
    select(hasSession),
    select(orderContainsRx),
    select(hasDob),
    select(orderHasShippingAddressId),
    select(userHasShippingAddresses),
    select(hasPaymentMethod),
    select(getCartShippingAddressId)
  ];

  return getNextStep.apply(null, args);
}

export function* maybeCreateOrder() {
  const [
    cartTotal,
    cartItems,
    _containsRx,
    _hasPendingOrder,
    _hasSession
  ] = yield [
    select(selectTotalFromCartState),
    select(getCartItems),
    select(containsRx),
    select(hasPendingOrder),
    select(hasSession)
  ];
  const shouldCreateRxOrder = _containsRx && !_hasPendingOrder;
  const shouldCreateOtcOrder = !_containsRx && !_hasPendingOrder;
  if (!shouldCreateRxOrder && !shouldCreateOtcOrder) {
    return;
  }

  if (!_hasSession) {
    return;
  }

  yield put(ACTIVITY.show());
  // Create pending order

  const order = yield call(makeOrder);
  yield put(actions.order.createOrderResp(order));

  // Must add shipping address before the items
  // Add shipping address
  let shippingAddressId = yield select(getCartShippingAddressId);
  yield call(updateOrderById, order.id, { shippingAddressId });
  yield put(actions.order.patchOrder({ shippingAddressId }));

  // Add items to order
  let errors = [];
  for (let i = 0; i < cartItems.length; i++) {
    // Add to cart
    let x = cartItems[i];
    let item = yield call(createItemInOrder, {
      productId: x.id,
      quantity: x.requiresSubscription ? 1 : x.quantity,
      subscription: x.requiresSubscription ? 1 : 0,
      orderId: order.id
    });

    // Validate cart
    let { error } = yield call(validateCart, order.id);
    if (error) {
      errors.push(error);
      yield put(CART.removeFromCart(x.id));
    } else {
      yield put(actions.order.updateItemInOrderResp(item));
      // yield put(actions.order.calculateTotal());
    }
  }
  if (errors.length) {
    // Surface each error
    for (let i = 0; i < errors.length; i++) {
      yield put(toastrHandler.error({ message: errors[i] }));
    }
    // Put 'em back on the cart step
    yield put(CHECKOUT.changeStep(CHECKOUT_STEP_NAMES.CART));

    yield put(ACTIVITY.hide());
    return CREATION_CANCELLED;
  }

  // Apply coupon
  yield call(maybeApplyCoupon, order);
  // Apply pricing from the cart
  yield put(CART.applyPricing(cartTotal));

  yield put(actions.cart.resetCart());

  yield put(ACTIVITY.hide());
}

export function* maybeApplyCoupon(order) {
  try {
    let coupon = yield select(selectCouponFromCart);

    if (coupon) {
      yield call(updateOrderById, order.id, { coupon });
    }
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  }
}

// ---
// Create order
// ---

export function* watchCheckoutConfirmOrder() {
  yield takeEvery(CHECKOUT_ACTIONS.CONFIRM_ORDER, handleCheckoutConfirmOrder);
}

function* handleCheckoutConfirmOrder() {
  try {
    yield put(ACTIVITY.show());
    $GTM.preConfirmHashIdentify.trigger();
    $GTM.checkoutConfirmOrder.trigger();
    // Charge order
    const [order] = yield all([select(getActiveOrder)]);

    yield call(attemptChargeForOrder, order);
    yield put(CHECKOUT.orderConfirmed());
    yield put(
      actions.checkout.activeOrderFinalReviewConfirmationStep.fulfill()
    );
    $GTM.checkoutConfirmOrder.success();
    // Fetch all orders
    yield put(actions.order.fetchOrders());
    // Close cart and show order confirmation page
    yield put(actions.order.clearActiveOrder());
    yield put(UI.closeCart());
    yield call(routeToConfirmation, order.id);
    // Clear active order
    yield put(actions.order.clearActiveOrder());
  } catch (error) {
    $GTM.checkoutConfirmOrder.failure({ error: error.message });
    yield put(toastrHandler.error({ message: error.message }));
  } finally {
    yield put(ACTIVITY.hide());
  }
}

function* routeToConfirmation(orderId) {
  browserHistory.push({ pathname: "/orders/confirm", query: { id: orderId } });
}

// Compute order totals
// ---

function* watchCalculateOrderTotal() {
  yield takeEvery(types.CALCULATE_TOTAL, calculateTotal);
}

function* calculateTotal() {
  let order = yield select(getActiveOrder);
  if (!order || !hasValue(order.shippingAddressId)) {
    return;
  }
  if (!hasValue(order) || !hasValue(order.items) || order.items.length === 0) {
    yield put(actions.order.calculateTotalResp(RESET_NUMBERS));
    return;
  }

  let totals = yield call(apiTotalsCalc, order);
  yield put(actions.order.calculateTotalResp(totals));
}

// Save payment method
// ---

function* watchSavePaymentMethod() {
  yield takeEvery(PAYMENT_ACTIONS.SAVE_PAYMENT_METHOD, handleSavePaymentMethod);
}

function* handleSavePaymentMethod({ payload }) {
  yield put(ACTIVITY.show());
  try {
    const { source, error } = payload.data;
    if (error) {
      const { message } = error;
      $GTM.checkoutCreatePaymentInfo.failure({ error: message });
      yield put(toastrHandler.error({ message }));
    } else if (hasValue(source)) {
      const partial = {
        paymentToken: source.id,
        cardDetails: [sourceToCardDetail(source)]
      };
      const me = yield select(selectSession);
      yield call(updateUser, partial);
      yield put(actions.user.updateUserResp(merge(me, partial)));
      yield put(actions.auth.fetchMe());
      yield put(CHECKOUT.nextStep());
      $GTM.checkoutCreatePaymentInfo.success();
    } else {
      $GTM.checkoutCreatePaymentInfo.failure({
        error: "Payment method invalid"
      });
      yield put(toastrHandler.error({ message: "Payment method invalid" }));
    }
  } catch (error) {
    $GTM.checkoutCreatePaymentInfo.failure({ error });
    yield put(
      toastrHandler.error({ message: "Failed to create payment method" })
    );
  } finally {
    yield put(ACTIVITY.hide());
  }
}

// Watch pre-purchase coupon application
// ---

function* watchCalculateCartTotal() {
  yield takeEvery(
    CHECKOUT_ACTIONS.CALCULATE_CART_TOTAL,
    handleCalculateCartTotal
  );
}

export function* handleCalculateCartTotal() {
  try {
    // TODO: show loader
    const items = yield select(getActiveOrderItems);
    // if no items in cart don't calculate
    if (isEmpty(items)) {
      return;
    }

    let coupon = yield select(getCouponFromAnyState);
    if (typeof coupon === "string" && coupon.toLowerCase) {
      coupon = coupon.toLowerCase();
    } else if (typeof coupon === "object") {
      coupon = coupon.page || null;
    }

    const payload = { payload: { coupon, items } };
    const totals = yield call(calculateCartTotals, payload);
    yield put(actions.order.applyCouponToOrder(null));
    // if the user entered a coupon, but there is no discount, it must be invalid
    if (hasValue(coupon)) {
      if (!hasValue(totals.discount) || totals.discount === 0) {
        // clear coupon from cart
        yield put(actions.order.applyCouponToOrder(null));
        // set error message on promo code field
        yield put(
          stopSubmit(CART_PROMO_FORM, { discount: "Promo code is not valid" })
        );
        yield put(CART.applyPricing(totals));
        return;
      }

      yield put(actions.order.applyCouponToOrder({ id: coupon }));
    }

    const cartPartial = merge(totals, { coupon });
    yield put(CART.applyPricing(cartPartial));
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  } finally {
    // TODO: hide loader
  }
}

export function* tempCheckoutRootSaga() {
  yield all([
    fork(watchCalculateOrderTotal),
    fork(watchCheckoutConfirmOrder),
    fork(watchCheckoutGotoStep),
    fork(watchCheckoutNextStep),
    fork(watchSavePaymentMethod),
    fork(watchCalculateCartTotal),
    fork(watchCheckoutStepChanged)
  ]);
}
