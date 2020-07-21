import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import { ReviewOrder } from "../../../../components/checkout/review-order";
import { orderConnector } from "../../state/selectors/review-order";
import { CART, CHECKOUT } from "../../state/actions";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";

const dispatchers = {
  goToStep: CHECKOUT.goToStep,
  confirmOrder: CHECKOUT.confirmOrder,
  decreaseQuantity: CART.decreaseQuantity,
  increaseQuantity: CART.increaseQuantity,
  removeProduct: CART.removeFromCart,
  deleteOrderFromCart: CART.removeFromCart
};

export const ReviewOrderContainer = compose(
  connect(
    orderConnector,
    dispatchers
  ),
  withHandlers({
    goToShippingAddress: props => () => {
      props.goToStep(CHECKOUT_STEP_NAMES.SHIPPING);
    },
    goToBilling: props => () => {
      props.goToStep(CHECKOUT_STEP_NAMES.PAYMENT);
    },
    onDecreaseQuantity: props => productId => {
      props.decreaseQuantity(productId);
    },
    onIncreaseQuantity: props => productId => {
      props.increaseQuantity(productId);
    },
    onRemoveProduct: props => productId => {
      props.removeProduct(productId);
    }
  })
)(ReviewOrder);
