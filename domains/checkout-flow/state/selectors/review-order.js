import { calculateTotalAndDiscount } from "./pricing-order";
import { createSelector, createStructuredSelector } from "reselect";
import { selectProductsById } from "../../../../selectors/products";
import R from "ramda";

export const selectOrderState = R.path(["orders", "active"]);

export const selectOrderTotals = R.compose(
  R.pick(["discount", "grandTotal", "shipping"]),
  R.path(["orders", "active"])
);

export const selectOrderItems = createSelector(
  R.pathOr([], ["orders", "active", "items"]),
  R.identity
);

export const selectOrderProducts = createSelector(
  selectProductsById,
  selectOrderItems,
  (productsById, items) =>
    R.reduce(
      (acc, item) => [...acc, { ...productsById[item.productId], ...item }],
      []
    )(items)
);

const hasRequiredConsultation = createSelector(
  selectProductsById,
  selectOrderItems,
  (products, items) =>
    R.compose(
      R.any(id => products[id].requiresConsultation),
      R.map(R.prop("productId"))
    )(items)
);

const selectLineItems = createSelector(
  selectOrderState,
  hasRequiredConsultation,
  (order, hasRequiredConsultation) =>
    calculateTotalAndDiscount(order, hasRequiredConsultation)
);

export const selectShippingAddress = createSelector(
  R.pathOr("", ["orders", "active", "shippingAddressId"]),
  R.pathOr([], ["me", "addresses"]),
  (shippingAddressId, addresses) =>
    R.compose(
      R.defaultTo({}),
      R.find(R.propEq("id", shippingAddressId))
    )(addresses)
);

const selectBillingInformation = createSelector(
  R.path(["me", "cardDetails"]),
  R.path(["me", "paymentToken"]),
  (cardDetails, paymentToken) =>
    R.compose(
      R.prop("card"),
      R.find(R.propEq("id", paymentToken))
    )(cardDetails)
);

const selectOrderContext = createSelector(
  R.pathOr("", ["orders", "active"]),
  order =>
    R.compose(
      R.defaultTo({}),
      R.applySpec({
        origin: R.prop("origin"),
        isRenewal: R.propEq("origin", "rx_renewal")
      })
    )(order)
);

export const orderConnector = createStructuredSelector({
  billingInformation: selectBillingInformation,
  cartItems: selectOrderProducts,
  lineItems: selectLineItems,
  products: selectOrderProducts,
  shippingAddress: selectShippingAddress,
  orderContext: selectOrderContext
});
