import { compose } from "recompose";
import { connect } from "react-redux";

import { Payment } from "./payment.component";
import { paymentConnector } from "./state/payment.selectors";

import { withEditingState } from "../account/profile/profile.utils";

export const PaymentContainer = compose(
  connect(paymentConnector),
  withEditingState
)(Payment);
