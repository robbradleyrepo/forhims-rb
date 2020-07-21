import { connect } from "react-redux";

import { CheckoutFlow } from "./checkout-flow.component";
import { checkoutFlowConnector } from "./checkout-flow.selectors";

import { CHECKOUT } from "./state/actions/checkout.actions";

const dispatchers = {
  goToStep: CHECKOUT.goToStep
};

export const CheckoutFlowContainer = connect(
  checkoutFlowConnector,
  dispatchers
)(CheckoutFlow);
