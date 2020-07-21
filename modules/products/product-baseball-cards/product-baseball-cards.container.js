import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { CART } from "../../../domains/checkout-flow/state/actions";
import { productBaseballCardsConnector } from "./product-baseball-cards.selectors";

import { ProductBaseballCardsComponent } from "./product-baseball-cards.component";

const dispatchers = {
  addToCart: CART.addToCart
};

export const ProductBaseballCards = compose(
  connect(
    productBaseballCardsConnector,
    dispatchers
  ),
  withHandlers({
    handleAddToCartClick: ({ addToCart }) => productId => event => {
      event.preventDefault();
      addToCart(productId);
    }
  })
)(ProductBaseballCardsComponent);
