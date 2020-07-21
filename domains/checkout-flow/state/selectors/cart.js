import { createSelector, createStructuredSelector } from "reselect";
import R from "ramda";

import { selectOrderProducts } from "./review-order";
import { calculateTotalAndDiscount as calculateCartTotalAndDiscount } from "./pricing-cart";
import { calculateTotalAndDiscount as calculateOrderTotalAndDiscount } from "./pricing-order";
import {
  CHECKOUT_CONSULTATION_TITLES,
  CHECKOUT_MEDICAL_FEE_COST,
  CHECKOUT_MEDICAL_FEE_TITLE
} from "../../checkout-flow-content.constants";
import {
  RX_AGE_ERROR,
  RX_AGE_MAX,
  RX_AGE_MIN
} from "../../checkout-flow-validation.constants";
import {
  selectAge,
  selectHasDateOfBirth,
  selectIsAuthenticated
} from "../../../../selectors/me";
import { hasValue } from "../../../../utils";

export const selectCartState = R.path(["checkoutTemp", "cart"]);
export const selectCartItemsState = createSelector(
  selectCartState,
  R.propOr([], "items")
);
// duplicate from review-order.
export const selectOrderState = R.path(["orders", "active"]);

export const selectCartItems = createSelector(
  selectCartItemsState,
  R.map(item => R.assoc("productId", item.id, item))
);

const calculateSubTotalFromItems = R.pipe(
  R.map(item => item.quantity * item.price),
  R.reduceRight(R.add, 0)
);

export const selectProducts = createSelector(
  selectOrderState,
  selectOrderProducts,
  selectCartItems,
  (order, orderProducts, cartItems) => (order ? orderProducts : cartItems)
);

const getSubTotal = createSelector(selectProducts, calculateSubTotalFromItems);

export const selectHasCartProducts = createSelector(selectProducts, hasValue);

const isRx = R.propEq("requiresConsultation", true);

const isRenewal = R.propEq("origin", "rx_renewal");

export const selectRxProducts = createSelector(
  selectProducts,
  R.filter(R.allPass([isRx, R.complement(isRenewal)]))
);

export const selectOtcProducts = createSelector(
  selectProducts,
  R.filter(product => !isRx(product))
);

export const selectProductsById = createSelector(
  R.path(["products", "byId"]),
  R.identity
);

export const hasRequiredConsultation = createSelector(
  selectProductsById,
  selectProducts,
  (products, items) => {
    return R.any(x => {
      const key = x.productId || x.id;
      return key && products[key].requiresConsultation;
    }, items);
  }
);

export const hasRequiredSubscription = createSelector(
  selectProductsById,
  selectProducts,
  (products, items) => {
    return R.any(x => {
      const key = x.productId || x.id;
      return key && products[key].requiresSubscription;
    }, items);
  }
);

const necessaryOrderItemsHaveValues = order =>
  R.pipe(
    R.pick(["grandTotal", "total", "medical"]),
    R.values,
    R.all(R.isNil),
    R.not
  )(order);

const shouldUseOrderForLineItems = order =>
  !!order && !R.isEmpty(order.items) && necessaryOrderItemsHaveValues(order);

export const selectLineItems = createSelector(
  selectOrderState,
  selectCartState,
  getSubTotal,
  hasRequiredConsultation,
  (order, cart, subTotal, hasRequiredConsultation) =>
    shouldUseOrderForLineItems(order)
      ? calculateOrderTotalAndDiscount(order, hasRequiredConsultation)
      : calculateCartTotalAndDiscount(cart, subTotal)
);

export const selectNumberOfItemsInCart = createSelector(
  selectCartItems,
  R.length
);

export const selectCouponFromCart = createSelector(
  R.pathOr("", ["checkoutTemp", "cart", "coupon"]),
  R.identity
);

const convertProductIdToConsultationTitle = id =>
  R.propOr("", id, CHECKOUT_CONSULTATION_TITLES);

const convertProductToConsultation = ({ id, productId }) => ({
  id,
  description: convertProductIdToConsultationTitle(productId),
  price: CHECKOUT_MEDICAL_FEE_COST,
  productId,
  showImage: false,
  title: CHECKOUT_MEDICAL_FEE_TITLE
});

export const selectRxProductConsultations = createSelector(
  selectRxProducts,
  rxProducts =>
    hasValue(rxProducts) ? R.map(convertProductToConsultation, rxProducts) : []
);

const isWithinRxMax = val => R.lte(val, RX_AGE_MAX);
const isWithinRxMin = val => R.gte(val, RX_AGE_MIN);
export const isWithinRxRange = R.allPass([isWithinRxMax, isWithinRxMin]);

export const selectAgeIsWithinRxRange = createSelector(
  selectAge,
  isWithinRxRange
);

export const selectHasNewRxPermissions = createSelector(
  selectIsAuthenticated,
  selectHasDateOfBirth,
  selectAgeIsWithinRxRange,
  (isAuthenticated, hasDob, isWithinRxRange) =>
    isAuthenticated && hasDob ? isWithinRxRange : true
);

export const selectHasRxAgeError = createSelector(
  selectHasNewRxPermissions,
  hasRequiredConsultation,
  (hasNewRxPermissions, hasRxProductsInCart) =>
    hasRxProductsInCart ? !hasNewRxPermissions : false
);

const addErrorMessageToRxProduct = R.assoc("errorMessage", RX_AGE_ERROR);

export const selectRxProductConsultationsWithRxError = createSelector(
  selectProducts,
  selectHasRxAgeError,
  (products, hasRxError) =>
    hasRxError ? R.map(addErrorMessageToRxProduct, products) : products
);

export const selectProductsWithConsultations = createSelector(
  selectOtcProducts,
  selectRxProductConsultationsWithRxError,
  (products, rxConsultations) => R.concat(products, rxConsultations, [])
);

export const cartConnector = createStructuredSelector({
  currentOrder: selectOrderState,
  cartItems: selectProducts,
  lineItems: selectLineItems,
  products: selectProductsWithConsultations,
  coupon: selectCouponFromCart,
  hasError: selectHasRxAgeError
});

export const selectTotalFromCartState = R.compose(
  R.pick(["grandTotal", "discount", "medicalFee", "processingFee"]),
  selectCartState
);
