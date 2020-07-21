"use strict";
import * as types from "../constants/ActionTypes";
import R from "ramda";
import actions from "../actions";
import config from "../config";
import selectors from "../selectors";
import { browserHistory } from "react-router";
import { getters } from "./helpers";
import {
  takeEvery,
  takeLatest,
  take,
  call,
  fork,
  put,
  select
} from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  // apiTotalsCalc,
  attemptChargeForOrder,
  createItemInOrder,
  deleteOrderItem,
  getAllOrders,
  getCouponsById,
  getOrderById,
  maybeCreateVisit,
  makeOrder,
  maybeRegisterPatient,
  updateItemById,
  updateOrderById
} from "./requests";
import { toastrHandler } from "../modules/toastr/toastr.actions";

// Constants
// ---

const DEFAULT_ORDER = {
  coupon: null,
  discount: null,
  grandTotal: null,
  id: null,
  items: [],
  shipping: null,
  shippingAddressId: null,
  status: "pending",
  tax: null,
  total: null,
  userId: null
};

// const RESET_NUMBERS = {
//   discount: null,
//   grandTotal: null,
//   shipping: null,
//   tax: null,
//   total: null
// };

// Fn's
// ---

const indexById = R.indexBy(R.prop("id"));

const indexByProductId = R.indexBy(R.prop("productId"));

const getShippingAddress = () => {
  return $APP.utils.session.hasShippingAddress()
    ? { shippingAddressId: $APP.utils.session.getShippingAddress().id }
    : {};
};

function* gtmUpdate(params) {
  let {
    fn,
    item: { productId, quantity }
  } = params;
  let products = yield select(getters.products);
  let product = products.byId[productId];
  $GTM[fn].trigger({ product, quantity });
}

// Fetch Orders
// ===

function* watchFetchOrders() {
  yield takeEvery(actions.order.fetchOrders.TRIGGER, fetchOrders);
}

function* fetchOrders() {
  try {
    yield put(actions.order.fetchOrders.request());
    let orders = yield call(getAllOrders);
    let ordersById = indexById(orders);
    yield put(actions.order.fetchOrders.success(ordersById));
  } catch (error) {
    console.log(error);
    yield put(actions.order.fetchOrders.failure(error.message));
  } finally {
    yield put(actions.order.fetchOrders.fulfill());
  }
}

// ============================================================
// Create Order
// ============================================================

function* watchCreateOrder() {
  yield takeEvery(types.CREATE_ORDER, createOrder);
}

function* createOrder({ payload }) {
  let [token, order] = yield [select(getters.token), select(getters.order)];
  // No order? create on
  if (!order) {
    let fn =
      token && !payload.isClientSide
        ? createPersistedOrder
        : createAnonymousOrder;

    yield call(fn, payload);
  }
}

function* createAnonymousOrder() {
  let order = R.merge(DEFAULT_ORDER, getShippingAddress());
  yield put(actions.order.createOrderResp(order));
}

function* createPersistedOrder() {
  try {
    let order = yield call(makeOrder); // create order
    if ($APP.utils.session.hasShippingAddress()) {
      // add shipping address
      order = yield call(updateOrderById, order.id, getShippingAddress());
    }
    order = R.assoc("items", [], order);
    yield put(actions.order.createOrderResp(order));
  } catch (error) {
    console.log(error);
  }
}

// ============================================================
// Create order for cart
// ============================================================

function* watchCreateOrderForCart() {
  yield takeEvery(types.CREATE_ORDER_FOR_CART, createOrderForCart);
}

function* createOrderForCart() {
  let [order, coupon] = yield [select(getters.order), select(getters.coupon)];
  // If there is a pending order with no id, then proceed!
  if (order && !order.id) {
    // Create order on the API side
    yield call(createPersistedOrder);
    // Add items to the order
    for (var i = 0; i < order.items.length; i++) {
      yield put(actions.order.addProductToCart(order.items[i]));
    }
    // Add coupon
    if (coupon) {
      yield put(actions.order.applyCouponToOrder(coupon));
    }
  }
}

// ============================================================
// Apply coupon to order
// ============================================================

function* watchApplyCouponToOrder() {
  yield takeEvery(types.APPLY_COUPON_TO_ORDER, applyCouponToOrder);
}

function* applyCouponToOrder({ payload: coupon }) {
  try {
    let order = yield select(getters.order);
    if (order && order.id && coupon && coupon.id) {
      let payload = { coupon: coupon.id };
      yield call(updateOrderById, order.id, payload);
      yield put(actions.order.patchOrder(payload)); // Update state
    }
  } catch (error) {
    console.log(error);
  }
}

// ============================================================
// Add shipping address to order
// ============================================================

function* watchAddShippingAddressToOrder() {
  yield takeEvery(types.ADD_SHIP_ADDRESS_TO_ORDER, addShippingAddressToOrder);
}

function* addShippingAddressToOrder({ payload: shippingAddressId }) {
  try {
    let order = yield select(getters.order);
    let payload = { shippingAddressId };
    yield call(updateOrderById, order.id, payload);
    yield put(actions.order.patchOrder(payload));
  } catch (error) {
    console.log(error);
  }
}

// ============================================================
// Remove item fromOrder
// ============================================================

function* watchDeleteItemFromCart() {
  yield takeEvery(types.DELETE_PRODUCT_FROM_CART, deleteItemFromOrder);
}

// payload :: { id, productId }
function* deleteItemFromOrder({ payload: item }) {
  // Optimistic update happens in reducer
  try {
    let token = yield select(getters.token);
    if (token) {
      yield call(deleteOrderItem, item.id);
    }
  } catch (error) {
    console.log(error);
    yield put(actions.order.updateItemInOrderResp(item)); // Undo optimistic update
  } finally {
    yield put(actions.order.calculateTotal());
    yield call(onItemDeleteRunCouponCheck);
  }
}

function* onItemDeleteRunCouponCheck() {
  let [order, coupon] = yield [select(getters.order), select(getters.coupon)];
  // No coupon? no worries
  if (!coupon) {
    return;
  }

  let emptyCart = order.items.length === 0;
  let isCouponApplicable = yield call(
    validateCouponBasedOnItems,
    coupon,
    order
  );
  // empty cart or a coupon that don't apply to anything? bail!
  if (emptyCart || !isCouponApplicable) {
    yield put(actions.order.setCoupon(null));
  }
}

function* validateCouponBasedOnItems(coupon, order) {
  try {
    let coupons = yield call(getCouponsById, coupon);
    let applicableProducts = indexByProductId(coupons);
    let productIds = R.map(x => x.productId, order.items);
    return R.compose(
      R.not,
      R.isEmpty,
      R.pick(productIds)
    )(applicableProducts);
  } catch (error) {
    return console.log(error);
  }
}

// ============================================================
// Add Product to Order
// ============================================================

function* watchAddProduct() {
  while (true) {
    const action = yield take(actions.order.addProductToCart.TRIGGER);
    yield fork(addProductToOrder, action);
  }
}

// Action :: { type, payload }
// payload :: { productId, subscription, quantity }
function* addProductToOrder({ payload }) {
  try {
    yield put(actions.order.addProductToCart.request());
    let [order, token, pendingOrderCheckCompleted, products] = yield [
      select(getters.order),
      select(getters.token),
      select(getters.pendingOrderCheckCompleted),
      select(getters.products)
    ];
    // Rx purchases are mutually exclusive
    if (
      hasRxTypeConflict(order, payload.productId, products) ||
      isMoreThanJustEd(order, payload.productId, products)
    ) {
      /*
        todo : Global openmodal event wasn't being listened to before ;
        commenting this out as I'm not sure if this is a modal we'd want
        to display to users.
      */

      /* const ConflictRX = () => (
        <div className="" style={{}}>
          Conflict in RX!
        </div>
      );

      yield put(
        actions.global.openModal({
          content: <ConflictRX />
        })
      ); */
      return;
    }

    let fn =
      !token || !pendingOrderCheckCompleted
        ? addProductToOrderAnonymously
        : addProductToOrderWithSession;

    yield call(fn, payload);

    // Open right drawer
    yield put(
      actions.drawers.renderDrawer({ drawer: "RIGHT", content: "Checkout" })
    );
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
    yield put(actions.order.addProductToCart.failure(error.message));
  } finally {
    yield put(actions.order.addProductToCart.fulfill());
  }
}

function isMoreThanJustEd(order, productId) {
  let productIds = R.compose(
    R.uniq,
    R.concat([productId]),
    R.map(x => x.productId),
    R.defaultTo([])
  )(order.items);

  return (
    productIds.length > 1 &&
    R.any(
      x =>
        R.contains(x, [
          config.products.idByName.sildenafil,
          config.products.idByName.sildenafilV2,
          config.products.idByName.sildenafilV3
        ]),
      productIds
    )
  );
}

function hasRxTypeConflict(order, productId, products) {
  let productIds = R.compose(
    R.concat([productId]),
    R.map(x => x.productId),
    R.defaultTo([])
  )(order.items);
  let prescriptions = R.reduce(
    (result, productId) =>
      R.concat(products.byId[productId].prescriptions || [], result),
    [],
    productIds
  );
  return R.uniq(prescriptions).length > 1;
}

function* addProductToOrderAnonymously(payload) {
  let order = yield select(getters.order);
  if (!productAlreadyAddedToOrder(payload.productId, order)) {
    yield call(appendProductToCartOptimistically, payload);
  }
}

function* addProductToOrderWithSession(payload) {
  let { productId } = payload;
  let order = yield select(getters.order);
  // Once an order is submitted, a new draft cart is created - but we don't
  //  persist it until the user adds a product to the cart; This prevents us
  //  from creating ghost orders
  if (!order.id) {
    yield call(createPersistedOrder);
  }

  if (
    !productAlreadyAddedToOrder(productId, order) ||
    !productSavedToOrder(productId, order)
  ) {
    yield call(saveProductToOrder, payload, order);
    yield put(actions.order.calculateTotal());
  }
}

function* saveProductToOrder(payload, order) {
  try {
    // Optimistically update order
    if (!productAlreadyAddedToOrder(payload.productId, order)) {
      yield call(appendProductToCartOptimistically, payload);
    }
    // nnasoody - 2017-11-10
    // Edge Case: User has session. Refresh page. Immediately add item to cart.
    // Result: Since there is token but no orderId yet (active order isn't set yet), the API call below will fail.
    // Solution: Poll for order
    while (!order || !order.id) {
      yield delay(250);
      order = yield select(getters.order);
    }
    let item = yield call(createItemInOrder, payload, order.id);
    yield put(actions.order.updateItemInOrderResp(item));
  } catch (error) {
    yield call(removeItemInOrder, payload);
  }
}

function* appendProductToCartOptimistically(payload) {
  let order = yield select(getters.order);
  let items = R.concat(order.items, payload);
  yield put(actions.order.patchOrder({ items }));
}

function productSavedToOrder(productId, order) {
  return R.compose(
    R.prop("id"),
    R.find(x => x.productId === productId)
  )(order.items);
}

function productAlreadyAddedToOrder(productId, order) {
  return R.any(x => x.productId === productId, order.items);
}

function* removeItemInOrder(item) {
  let order = yield select(getters.order);
  // Update items in order
  let updatedOrder = R.compose(
    R.assoc("items", R.__, order),
    R.filter(x => x.productId !== item.productId),
    R.prop("items")
  )(order);
  // Update active order
  yield put(actions.order.updateOrderResp(updatedOrder));
}

// ============================================================
// Update item in order
// ============================================================

function* watchUpdateProductInOrder() {
  yield takeEvery(types.UPDATE_ITEM_IN_ORDER, updateProductInOrder);
}

// TODO
// payload :: { item, quantity, subscription }
function* updateProductInOrder({ payload }) {
  let [token, order, products] = yield [
    select(getters.token),
    select(getters.order),
    select(getters.products)
  ];

  let fn = !token
    ? updateProductInOrderAnonymously
    : updateProductInOrderWithSession;
  // GTM
  yield call(gtmUpdate, {
    fn: "checkoutUpdateProduct",
    item: payload,
    products
  });
  yield call(fn, payload, order);
}

function* updateProductInOrderAnonymously(item) {
  yield put(actions.order.updateItemInOrderResp(item));
  // yield call(calculateTotal);
}

function* updateProductInOrderWithSession(item, order) {
  try {
    yield put(actions.order.updateItemInOrderResp(item));
    yield call(updateItemById, item);
  } catch (error) {
    yield put(actions.order.updateOrderResp(order)); // revert back to original order
  } finally {
    // yield call(calculateTotal);
  }
}

// ============================================================
// Confirm order
// ============================================================

function* watchOrderConfirm() {
  while (true) {
    const action = yield take(actions.order.confirmOrder.TRIGGER);
    yield fork(confirmOrder, action);
    yield call(delay, 1000);
  }
}

function* confirmOrder() {
  try {
    // Puts UI in loading mode
    yield put(actions.order.fetchOrders.request());
    // Attribution tags!
    $GTM.preConfirmHashIdentify.trigger();
    $GTM.checkoutConfirmOrder.trigger();

    let [state, order, me] = yield [
      select(getters.state),
      select(getters.order),
      select(getters.me)
    ];

    // Maybe register patient
    if (
      selectors.cart.hasRequiredConsultation(state) &&
      me.dob &&
      !me.patientId
    ) {
      let { error: patientRegisterError } = yield call(maybeRegisterPatient);
      if (patientRegisterError) {
        throw patientRegisterError;
      } else {
        yield put(actions.auth.fetchMe());
      }
    }

    // Attempt to charge order
    let { error: paymentError } = yield call(attemptChargeForOrder, order);
    if (paymentError) {
      throw paymentError;
    }

    // Successful charge, clear previous error
    yield put(actions.order.confirmOrder.failure({ error: null }));
    // Update UI state
    yield put(
      actions.order.updateOrderResp(R.merge(order, { status: "submitted" }))
    );
    // Clear coupon
    yield put(actions.order.setCoupon(null));
    // Get visit id
    let { visitId } = yield call(maybeCreateVisit, { orderId: order.id });
    // Has visit? Fetch!
    if (visitId) {
      yield put(actions.checkout.activeOrderHasPendingVisit.trigger());
      yield put(actions.emr.findVisitById(visitId));
      let visit, visitLoaded;
      while (!visitLoaded) {
        yield delay(250);
        visit = yield select(getters.visit);
        visitLoaded = !!visit;
      }
      yield put(actions.emr.launchEmrVisit(visitId));
      $GTM.createVisit.trigger();
    } else {
      yield put(actions.drawers.hideRightDrawer());
      browserHistory.push({
        pathname: "/orders/confirm",
        query: { id: order.id, orderType: 0 }
      });
    }

    $GTM.checkoutConfirmOrder.success();
    yield put(actions.order.clearActiveOrder()); // Clear active order
    yield put(actions.order.createOrder({ isClientSide: true })); // Create an empty cart
  } catch (error) {
    yield put(actions.order.confirmOrder.failure({ error: error.message }));
    $GTM.checkoutConfirmOrder.failure({ error: error.message });
  } finally {
    yield put(actions.order.confirmOrder.fulfill());
  }
}

// ============================================================
// Cancel order
// ============================================================

function* watchCancelOrder() {
  yield takeLatest(types.CANCEL_ORDER, cancelOrder);
}

function* cancelOrder({ payload }) {
  try {
    let partial = { status: "cancelled" };
    yield call(updateOrderById, payload.id, partial); // api call
    // Update state
    yield put(
      actions.order.cancelOrderResp(R.merge(partial, { id: payload.id }))
    );
    // If active order was cancelled, then create a new one
    let order = yield select(getters.order);
    if (order.id === payload.id) {
      yield put(actions.order.createOrder({ isClientSide: true })); // Create a new draft cart
    }
    // If active visit is associated with cancelled order, clear it!
    let visit = yield select(getters.visit);
    if (visit && visit.orderId === payload.id) {
      yield put(actions.emr.setActiveVisit(null));
    }
  } catch (error) {
    console.log(error);
  }
}

// ============================================================
// Set active order by orderId
// ============================================================

function* watchSetActiveOrderById() {
  yield takeEvery(types.SET_ACTIVE_ORDER, setActiveOrderById);
}

function* setActiveOrderById({ payload }) {
  try {
    let order = yield call(getOrderById, payload.id);
    yield put(actions.order.updateOrderResp(order));
  } catch (error) {
    console.log(error);
  }
}

// ============================================================
// Compute totals
// ============================================================

// function* watchCalculateOrderTotal() {
//   yield takeEvery(types.CALCULATE_TOTAL, calculateTotal);
// }

// function* calculateTotal() {
//   let order = yield select(getters.order);
//   // Don't bother api if order not yet persisted or no shipping address on order
//   if (!order.id || !order.shippingAddressId) {
//   } else if (!order.items.length) {
//     // No items in order - reset shipping/totals/taxes
//     yield put(actions.order.calculateTotalResp(RESET_NUMBERS));
//   } else {
//     let totals = yield call(apiTotalsCalc, order);
//     yield put(actions.order.calculateTotalResp(totals));
//   }
// }

// ============================================================
// Set cart to order
// ============================================================

function* watchSetCartToOrderById() {
  yield takeEvery(actions.order.setCartToOrderById.TRIGGER, setCartToOrderById);
}

function* setCartToOrderById({ payload: orderId }) {
  try {
    let [orders] = yield [select(getters.orders)];
    yield put(actions.order.setCartToOrderById.success(orders.byId[orderId]));
  } catch (error) {
    yield put(actions.order.setCartToOrderById.failure(error.message));
  } finally {
    yield put(actions.order.setCartToOrderById.fulfill());
  }
}

// Fork!
// ---

export default function*() {
  yield fork(watchAddProduct);
  yield fork(watchAddShippingAddressToOrder);
  yield fork(watchApplyCouponToOrder);
  // yield fork(watchCalculateOrderTotal);
  yield fork(watchCancelOrder);
  yield fork(watchCreateOrder);
  yield fork(watchCreateOrderForCart);
  yield fork(watchDeleteItemFromCart);
  yield fork(watchFetchOrders);
  yield fork(watchOrderConfirm);
  yield fork(watchSetActiveOrderById);
  yield fork(watchSetCartToOrderById);
  yield fork(watchUpdateProductInOrder);
}
