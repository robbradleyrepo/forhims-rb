import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { CART } from "../../domains/checkout-flow/state/actions";
import { addToCartConnector } from "./add-to-cart.selectors";
import PropTypes from "prop-types";

const dispatchers = {
  addToCart: CART.addToCart
};

export const AddToCart = component => {
  const container = compose(
    connect(
      addToCartConnector,
      dispatchers
    ),
    withHandlers({
      handleAddToCartClick: props => () => {
        props.addToCart(props.productId);
      }
    })
  )(component);

  container.propTypes = {
    productId: PropTypes.string
  };

  return container;
};
