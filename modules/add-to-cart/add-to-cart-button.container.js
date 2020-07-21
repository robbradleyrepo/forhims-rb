import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import PropTypes from "prop-types";

import { AddToCartButtonComponent } from "./add-to-cart-button.component";
import { CART } from "../../domains/checkout-flow/state/actions";
import { addToCartConnector } from "./add-to-cart.selectors";

const dispatchers = {
  addToCart: CART.addToCart
};

export const AddToCartButton = compose(
  connect(
    addToCartConnector,
    dispatchers
  ),
  withHandlers({
    handleAddToCartClick: props => () => {
      props.addToCart(props.productId);
    }
  })
)(AddToCartButtonComponent);

AddToCartButton.propTypes = {
  productId: PropTypes.string,
  variant: PropTypes.string
};
