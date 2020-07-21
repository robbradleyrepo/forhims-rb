import { createSelector, createStructuredSelector } from "reselect";
import R from "ramda";

import { selectProductsById } from "../../selectors/products";

import i18n from "../../i18n";

import { currency } from "../../utils";

const selectProps = R.nthArg(1);

const selectProductId = R.pipe(
  selectProps,
  R.propOr(false, "productId")
);

const selectProductDetails = createSelector(
  selectProductId,
  selectProductsById,
  (productId, products) => R.propOr({}, productId)(products)
);

const selectProductPrice = createSelector(
  selectProductDetails,
  R.propOr(currency(0), "price")
);

const selectBuyButtonLabel = createSelector(selectProps, R.propOr("", "label"));

const selectBuyButtonLabelInterpolated = createSelector(
  selectBuyButtonLabel,
  selectProductPrice,
  (label, price) => {
    return i18n.t(label, {
      price
    });
  }
);

export const addToCartConnector = createStructuredSelector({
  label: selectBuyButtonLabelInterpolated,
  productId: selectProductId
});
