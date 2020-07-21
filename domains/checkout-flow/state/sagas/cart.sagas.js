import R from "ramda";
import { takeLatest, all, fork, put, call, select } from "redux-saga/effects";

import actions from "../../../../actions";
import { CART, CART_ACTIONS, UI, CHECKOUT, ACTIVITY } from "../actions";
import { toastrHandler } from "../../../../modules/toastr/toastr.actions";
import {
  hasRequiredConsultation,
  selectCartState,
  selectProductsById,
  hasRequiredSubscription
} from "../selectors/cart";
import {
  getActiveOrder,
  getItemsInCartByProductId,
  getOrderItems,
  selectIsOrderWaitingOnFinalReview
} from "../selectors/checkout";

import {
  createItemInOrder,
  deleteOrderItem,
  updateItemById,
  validateCart
} from "./requests";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";
import { SHOW_DRAWER_CART_OR_FINAL_REVIEW } from "../../../../constants/ActionTypes";

function getItemQuantityAndSubscription(productId) {
  return {
    quantity: 1
  };
}

function* getCartItemByProductId(productId) {
  const productsById = yield select(selectProductsById);
  const item = productsById[productId];
  const quantityAndSubscription = getItemQuantityAndSubscription(productId);

  return R.merge(item, quantityAndSubscription);
}

// Add to cart!
// ---

function* watchAddToCart() {
  yield takeLatest(CART_ACTIONS.ADD_TO_CART, handleAddProduct);
}

function* handleAddProduct({ payload }) {
  yield put(actions.order.clearActiveOrder());
  const order = yield select(getActiveOrder);
  const item = yield call(getCartItemByProductId, payload.id);
  const fn = order ? addToOrder : addToCart;
  try {
    yield put(UI.showCart());
    yield put(ACTIVITY.show());
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.ACCOUNT));
    yield call(fn, item, order);
    $GTM.checkoutAddProduct.trigger({ product: item });
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  } finally {
    if (order) {
      yield put(actions.order.calculateTotal());
    } else {
      yield put(CHECKOUT.calculateCartTotal());
    }
    yield put(ACTIVITY.hide());
  }
}

function* canAddToCart(item) {
  // Product already added? bail
  const productsById = yield select(getItemsInCartByProductId);

  if (productsById[item.id]) {
    return {
      validates: false,
      message: null
    };
  }

  // Already contains an RX? bail
  const hasRx = yield select(hasRequiredConsultation);

  if (hasRx && item.requiresConsultation) {
    return {
      validates: false,
      message: "You can only check out with one prescription product at a time."
    };
  }

  // Already contains a subscription product
  const hasSubscription = yield select(hasRequiredSubscription);

  if (hasSubscription && item.requiresSubscription) {
    return {
      validates: false,
      message: "You can only check out with one subscription product at a time."
    };
  }

  return { validates: true };
}

function* addToCart(item, order) {
  const { validates, message } = yield call(canAddToCart, item);

  if (!validates) {
    // Contains message? show it!
    if (message) {
      throw new Error(message);
    }
    return;
  }
  // Else, add to cart
  yield put(CART.addToCartSuccess(item));
}

function* addToOrder(item, order) {
  const { validates, message } = yield call(canAddToCart, item);

  if (!validates) {
    // Contains message? show it!
    if (message) {
      yield put(toastrHandler.error({ message }));
    }
    return;
  }

  let payload = {
    productId: item.id,
    quantity: 1,
    subscription: item.requiresSubscription ? 1 : 0,
    orderId: order.id
  };
  // Add item to order
  let x = yield call(createItemInOrder, payload);
  // Pre-validate cart
  let { error } = yield call(validateCart, order.id);

  if (error) {
    yield put(CART.removeFromCart(x.id));
    // maybe add GTM tag to track error here?
    throw new Error(error);
  } else {
    yield put(actions.order.updateItemInOrderResp(x));
    yield put(actions.order.calculateTotal());
  }
}

// Increment quantity
// ---

function* watchIncreaseQuantity() {
  yield takeLatest(CART_ACTIONS.INCREASE_QUANTITY, handleIncrementQuantity);
}

function* handleIncrementQuantity({ payload }) {
  const order = yield select(getActiveOrder);
  const item = yield call(getCartItemByProductId, payload.id);

  try {
    let fn = order ? incrementOrderItemQuantity : incrementCartItemQuantity;
    yield call(fn, item, order);
    yield put(CHECKOUT.calculateCartTotal());
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  }
}

const incrementQunatity = x => R.assoc("quantity", x.quantity + 1, x);

function* incrementCartItemQuantity(item, order) {
  const cart = yield select(selectCartState);
  const updatedItems = R.compose(
    R.map(R.when(R.propEq("id", item.id), incrementQunatity)),
    R.prop("items")
  )(cart);
  const updatedCart = R.assoc("items", updatedItems, cart);

  yield put(CART.updateCart(updatedCart));
}

function* incrementOrderItemQuantity(item, order) {
  yield call(updateProductInOrder, item, order);
}

// Decrement quantity
// ---

function* watchDecreaseQuantity() {
  yield takeLatest(CART_ACTIONS.DECREASE_QUANTITY, handleDecrementQuantity);
}

function* handleDecrementQuantity({ payload }) {
  const order = yield select(getActiveOrder);
  const item = yield call(getCartItemByProductId, payload.id);

  try {
    let fn = order ? decrementOrderItemQuantity : decrementCartItemQuantity;
    yield call(fn, item, order);
    yield put(CHECKOUT.calculateCartTotal());
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  }
}

function* decrementCartItemQuantity(item, order) {
  const cart = yield select(selectCartState);
  const itemsWithModifiedQuantity = R.map(
    R.when(
      x => R.and(R.gt(x.quantity, 1), R.propEq("id", item.id, x)),
      x => R.assoc("quantity", x.quantity - 1, x)
    ),
    cart.items
  );

  yield put(CART.updateCart(R.assoc("items", itemsWithModifiedQuantity, cart)));
  yield put(CHECKOUT.calculateCartTotal());
}

function* decrementOrderItemQuantity(item, order) {
  yield call(updateProductInOrder, item, order);
}

function* updateProductInOrder(item, order) {
  try {
    yield put(actions.order.updateItemInOrderResp(item));
    yield call(updateItemById, item);
  } catch (error) {
    yield put(actions.order.updateOrderResp(order)); // revert back to original order
  } finally {
    yield put(actions.order.calculateTotal());
  }
}

// Remove item
// ---

function* watchRemoveCart() {
  yield takeLatest(CART_ACTIONS.REMOVE_FROM_CART, handleRemoveItem);
}

function* handleRemoveItem({ payload }) {
  const order = yield select(getActiveOrder);
  try {
    let fn = order ? handleRemoveFromOrder : handleRemoveFromCart;
    yield call(fn, payload.id);
    yield put(CHECKOUT.calculateCartTotal());
  } catch (error) {
    yield put(toastrHandler.error({ message: error.message }));
  }
}

function* handleRemoveFromCart(productId) {
  const item = yield call(getCartItemByProductId, productId);
  const cart = yield select(selectCartState);
  const updatedItems = R.reject(R.propEq("id", item.id), cart.items);
  const updatedCart = R.assoc("items", updatedItems, cart);

  yield put(CART.updateCart(updatedCart));
}

function* handleRemoveFromOrder(id) {
  yield call(deleteOrderItem, id);
  yield put(actions.order.calculateTotal());
  yield put(actions.order.deleteProductFromCart({ id })); // Undo optimistic update

  const itemsAfterDelete = yield select(getOrderItems);

  if (itemsAfterDelete.length === 0) {
    // NOTE: Because of when we create the order (moving to visit), we need to clean things up
    //   if someone removes the last item. This will need to be refactored
    //   when non-RX products are added (e.g. removing an RX item, but leaving a non-RX item)
    //   would result in a visit being retained. Currently you can only have one item in the cart
    yield put(actions.order.clearActiveOrder());
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART));
  }
}

function* watchDrawerCartShowRequest() {
  yield takeLatest(
    SHOW_DRAWER_CART_OR_FINAL_REVIEW,
    handleDrawerCartShowRequest
  );
}

export function* handleDrawerCartShowRequest() {
  const waitingOnReview = yield select(selectIsOrderWaitingOnFinalReview);
  yield put(UI.showCart());

  if (waitingOnReview) {
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.REVIEW_ORDER));
  } else {
    yield put(actions.order.clearActiveOrder());
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART));
  }
}

export default function*() {
  yield all([
    fork(watchAddToCart),
    fork(watchDecreaseQuantity),
    fork(watchIncreaseQuantity),
    fork(watchRemoveCart),
    fork(watchDrawerCartShowRequest)
  ]);
}
