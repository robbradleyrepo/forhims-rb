import { compose } from "recompose";
import { connect } from "react-redux";

import { PaymentMethods } from "../../components";
import { paymentMethodsConnector } from "../../state/payment.selectors";
import { CHECKOUT } from "../../../checkout-flow/state/actions";

const dispatchers = {
  nextStep: CHECKOUT.nextStep
};

export const PaymentMethodsContainer = compose(
  connect(
    paymentMethodsConnector,
    dispatchers
  )
)(PaymentMethods);
