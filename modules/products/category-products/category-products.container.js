import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import { createStructuredSelector } from "reselect";
import { PropTypes } from "prop-types";

import { RelatedProducts } from "../related-products";
import productSelectors from "../../../selectors/products";

const { selectProductsByIdOrFill } = productSelectors;

const dispatchers = {};

const categoryProductsConnector = createStructuredSelector({
  productsByCategory: selectProductsByIdOrFill
});

export const CategoryProducts = compose(
  connect(
    categoryProductsConnector,
    dispatchers
  ),
  withProps(({ productsByCategory, category = "all", featuredProductIds }) => {
    return {
      products: productsByCategory(featuredProductIds)[category]
    };
  })
)(RelatedProducts);

CategoryProducts.propTypes = {
  category: PropTypes.string
};
