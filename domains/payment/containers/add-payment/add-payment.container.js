import PropTypes from "prop-types";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { injectStripe } from "react-stripe-elements";

import { AddPayment } from "../../components";
import { PAYMENT } from "../../state/payment.actions";
import { paymentConnector } from "../../state/payment.selectors";
import { ACTIVITY } from "../../../checkout-flow/state/actions";

const dispatchers = {
  savePaymentMethod: PAYMENT.savePaymentMethod,
  showActivity: ACTIVITY.show,
  hideActivity: ACTIVITY.hide
};

export const AddPaymentContainer = compose(
  connect(
    paymentConnector,
    dispatchers
  ),
  injectStripe,
  withHandlers({
    handleSubmit: props => event => {
      event.preventDefault();
      $GTM.checkoutCreatePaymentInfo.trigger();
      props.showActivity();
      props.stripe
        .createSource({ usage: "reusable", type: "card" })
        .then(result => {
          props.savePaymentMethod(result);
          props.handleSelectExistingMethod();
        })
        .catch(() => {
          // TODO: Sad path :(
          $GTM.checkoutCreatePaymentInfo.failure({
            error: "Stripe call failed"
          });
          props.hideActivity();
        });
    }
  })
)(AddPayment);

AddPayment.propTypes = {
  savePayment: PropTypes.func
};
