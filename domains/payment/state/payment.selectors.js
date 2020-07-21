import R from "ramda";
import { createStructuredSelector, createSelector } from "reselect";
import config from "../../../config";
import { getMe } from "../../../selectors/me";

const selectPaymentMethodDetails = createSelector(
  getMe,
  R.pathOr({}, ["cardDetails", 0, "card"])
);

const selectPaymentName = createSelector(
  selectPaymentMethodDetails,
  R.pathOr("", ["brand"])
);

const selectCardNumberDisplay = createSelector(
  selectPaymentMethodDetails,
  ({ last4 }) => (last4 ? `•••• •••• •••• ${last4}` : "")
);

export const selectPaymentFormValues = R.pathOr({}, [
  "form",
  "payment-method",
  "values"
]);

export const selectProfileFromShippingAddressForm = createSelector(
  selectPaymentFormValues,
  R.pick(["firstName", "lastName", "phone", "sms"])
);

export const selectSession = R.path(["me"]);

export const sourceToCardDetail = R.pick(["card", "created", "id", "usage"]);

export const selectStripeIsReady = R.path(["stripe", "isReady"]);

export const selectStripe = createSelector(
  selectStripeIsReady,
  isReady => (isReady ? window.Stripe(config.stripe.key) : null)
);

export const paymentMethodsConnector = createStructuredSelector({
  cardName: selectPaymentName,
  cardNumberDisplay: selectCardNumberDisplay
});

export const paymentConnector = createStructuredSelector({
  stripe: selectStripe,
  paymentMethod: selectPaymentMethodDetails
});
