import R from "ramda";
import { createStructuredSelector } from "reselect";

import { selectCheckoutFlowActivityVisible } from "../../domains/checkout-flow/state/selectors/activity";

const createFormSubmittingSelector = formName =>
  R.pathOr(false, ["form", formName, "submitting"]);

const formsTriggeringActivityOverlay = [
  "checkout-login",
  "checkout-register",
  "shipping-address",
  "shipping-address-list",
  "shipping-address-validate",
  "date-of-birth"
];

const selectIsVisible = R.anyPass([
  ...formsTriggeringActivityOverlay.map(createFormSubmittingSelector),
  selectCheckoutFlowActivityVisible
]);

export const activityOverlayConnector = createStructuredSelector({
  visible: selectIsVisible
});
