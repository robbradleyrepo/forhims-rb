import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { createStructuredSelector } from "reselect";
import { PropTypes } from "prop-types";

import { ProductListComponent } from "./product-list.component";
import productSelectors from "../../../selectors/products";
import { CART } from "../../../domains/checkout-flow/state/actions";

const dispatchers = {
  addToCart: CART.addToCart
};

const productListConnector = createStructuredSelector({
  products: productSelectors.selectFeaturedProductsByCategory
});

export const ProductList = compose(
  connect(
    productListConnector,
    dispatchers
  ),
  withHandlers({
    handleShopButtonClick: props => productId => {
      props.addToCart(productId);
    }
  })
)(ProductListComponent);

ProductList.propTypes = {
  category: PropTypes.string
};
