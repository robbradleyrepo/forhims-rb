import R from "ramda";
import { createSelector, createStructuredSelector } from "reselect";

import { selectProductsById } from "../../selectors/products";
import i18n from "../../i18n";
import { currency } from "../../utils";

const selectProps = R.nthArg(1);

const selectProductId = R.pipe(
  selectProps,
  R.propOr(false, "productId")
);

const selectSecondaryDescriptor = createSelector(
  selectProps,
  R.propOr("", "secondaryDescriptor")
);

const selectProductDetails = createSelector(
  selectProductId,
  selectProductsById,
  (productId, products) => R.propOr({}, productId)(products)
);

export const selectProductPriceNumber = createSelector(
  selectProductDetails,
  R.propOr(0, "price")
);

export const selectProductPrice = createSelector(
  selectProductPriceNumber,
  currency
);

const selectSecondaryDescriptorInterpolated = createSelector(
  selectSecondaryDescriptor,
  selectProductPrice,
  (label, price) => {
    return i18n.t(label, {
      price
    });
  }
);

export const heroContentCardConnector = createStructuredSelector({
  secondaryDescriptor: selectSecondaryDescriptorInterpolated
});
