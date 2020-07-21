import R from "ramda";
import { createSelector, createStructuredSelector } from "reselect";

import { selectProductsById } from "../../../selectors/products";
import i18n from "../../../i18n";
import { currency } from "../../../utils";

const findProductDetails = productsById => propProduct => ({
  original: propProduct,
  found: productsById[propProduct.id]
});

const getProductPriceNumber = R.propOr(0, "price");

const getProductPrice = R.pipe(
  getProductPriceNumber,
  currency
);

const getProductDescription = R.propOr("", "description");

const interpolateDescription = ({ found, original }) => {
  const description = getProductDescription(original);
  const price = getProductPrice(found);
  return i18n.t(description, {
    price
  });
};

const transformProductDetails = ({ found, original }) => {
  const description = interpolateDescription({ found, original });
  const price = getProductPrice(found);
  return { ...original, description, price };
};

const reformatProduct = productsById => propProduct =>
  R.pipe(
    findProductDetails(productsById),
    transformProductDetails
  )(propProduct);

const reformatProducts = (propsProducts, productsById) =>
  propsProducts.map(reformatProduct(productsById));

const selectProps = R.nthArg(1);

const selectProducts = R.pipe(
  selectProps,
  R.propOr([], "products")
);

const selectReformattedProducts = createSelector(
  selectProducts,
  selectProductsById,
  reformatProducts
);

export const productBaseballCardsConnector = createStructuredSelector({
  products: selectReformattedProducts
});
