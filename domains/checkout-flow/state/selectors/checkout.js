import { createSelector } from "reselect";
import {
  __,
  any,
  assoc,
  compose,
  gt,
  indexBy,
  length,
  map,
  omit,
  path,
  pathOr,
  pick,
  pipe,
  prop,
  take as rTake,
  mergeAll,
  propOr
} from "ramda";
import { CART_PROMO_FORM } from "../../../../components/checkout/cart/cart-promo/cart-promo.constants";
import { getFormValues } from "redux-form";

export const selectCheckoutState = path(["checkoutTemp", "checkout"]);

export const selectActiveStep = createSelector(
  selectCheckoutState,
  propOr("cart", "step")
);

export const hasSession = compose(
  Boolean,
  prop("me")
);

export const getCartItems = pathOr([], ["checkoutTemp", "cart", "items"]);

export const containsRx = s =>
  compose(
    any(x => s.products.byId[x.id].requiresConsultation),
    getCartItems
  )(s);

export const getOrderItems = pathOr([], ["orders", "active", "items"]);

export const orderContainsRxItem = s => {
  return compose(
    any(x => s.products.byId[x.productId].requiresConsultation),
    getOrderItems
  )(s);
};

export const hasDob = compose(
  x => !!x,
  pathOr(false, ["me", "dob"])
);

export const getCartShippingAddressId = path([
  "checkoutTemp",
  "shipping",
  "addressId"
]);

export const cartHasShippingAddressId = compose(
  x => !!x,
  getCartShippingAddressId
);

export const userHasShippingAddresses = compose(
  gt(__, 0),
  length,
  pathOr([], ["me", "addresses"])
);

export const hasPaymentMethod = compose(
  x => !!x,
  pathOr(false, ["me", "paymentToken"])
);

export const hasPendingOrder = compose(
  x => !!x,
  path(["orders", "active"])
);

export const getActiveOrder = path(["orders", "active"]);

export const getActiveOrderItems = path(["orders", "active", "items"]);

export const getItemsInCartByProductId = compose(
  indexBy(prop("id")),
  getCartItems
);

export const getItemsInOrderByProductId = compose(
  indexBy(prop("id")),
  getOrderItems
);

export const orderContainsRx = s =>
  compose(
    any(x => s.products.byId[x.productId].requiresConsultation),
    getOrderItems
  )(s);

export const getOrderShippingAddressId = path([
  "orders",
  "active",
  "shippingAddressId"
]);

export const orderHasShippingAddressId = compose(
  x => !!x,
  getOrderShippingAddressId
);

export const selectVisit = path(["visits", "active"]);
export const selectVisitById = path(["visits", "byId"]);

export const hasVisit = compose(
  x => !!x,
  selectVisit
);

export const selectCouponInForm = pipe(
  getFormValues(CART_PROMO_FORM),
  propOr(null, "discount")
);

export const selectCouponFromCart = pathOr(null, [
  "checkoutTemp",
  "cart",
  "coupon"
]);

export const selectCouponFromState = pathOr(null, ["coupons", "list", "data"]);

const rekeyItem = x =>
  compose(
    omit(["id"]),
    assoc("product_id", x.id),
    pick(["id", "quantity"])
  )(x);

export const selectActiveVisit = createSelector(
  getActiveOrder,
  selectVisitById,
  (order, visitsById) => {
    let visit;
    for (let v in visitsById) {
      let visitById = visitsById[v];
      if (order && visitById.orderId === order.id) {
        visit = visitById;
      }
    }
    return visit;
  }
);

export const getCouponFromAnyState = createSelector(
  selectCouponInForm,
  selectCouponFromCart,
  selectCouponFromState,
  (formCoupon, cartCoupon, stateCoupons) => {
    return formCoupon || cartCoupon || mergeAll(rTake(1, stateCoupons));
  }
);

export const selectPreOrderItems = compose(
  map(rekeyItem),
  getCartItems
);

export const selectIsOrderWaitingOnFinalReview = pathOr(false, [
  "visits",
  "activeOrderNeedsFinalReviewConfirmation"
]);
