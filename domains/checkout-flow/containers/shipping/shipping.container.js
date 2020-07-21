import { connect } from "react-redux";
import { ShippingSteps } from "../../components/shipping-steps";
import { checkoutShippingStepsConnector } from "../../state/selectors/shipping";

export const ShippingContainer = connect(checkoutShippingStepsConnector)(
  ShippingSteps
);
