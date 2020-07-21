import { ui } from "../../../../actions";
import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";

import { Cart } from "../../../../components/checkout/cart";
import { cartConnector } from "../../state/selectors/cart";
import { CHECKOUT, CART } from "../../state/actions";

const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } = CART;
const { calculateCartTotal, nextStep, goToStep } = CHECKOUT;

const actions = {
  addToCart: addToCart,
  calculateCartTotal: calculateCartTotal,
  decreaseQuantity: decreaseQuantity,
  handleNextStep: nextStep,
  handleGoToStep: goToStep,
  hideDrawer: ui.hideDrawer,
  increaseQuantity: increaseQuantity,
  removeProduct: removeFromCart
};

export const CartContainer = compose(
  connect(
    cartConnector,
    actions
  ),
  withHandlers({
    handleEmptyCartCtaClick: props => () => {
      props.hideDrawer();
    },
    decreaseQuantity: props => productId => {
      props.decreaseQuantity(productId);
    },
    increaseQuantity: props => productId => {
      props.increaseQuantity(productId);
    },
    removeProduct: props => productId => {
      props.removeProduct(productId);
    },
    handleCalculateCartTotal: props => () => {
      new Promise((resolve, reject) => {
        props.calculateCartTotal(resolve, reject);
      });
    }
  })
)(Cart);
