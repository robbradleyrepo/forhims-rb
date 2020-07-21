import { createStructuredSelector } from "reselect";

import { selectProductsById } from "../../../../selectors/products";

export const cancelSubscriptionConnector = createStructuredSelector({
  productsById: selectProductsById
});
