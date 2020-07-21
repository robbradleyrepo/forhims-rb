import { createSelector, createStructuredSelector } from "reselect";
import R from "ramda";

export const selectAccountState = R.path(["checkoutTemp", "account"]);

export const selectLoginFormValues = R.pathOr({ email: "", password: "" }, [
  "form",
  "checkout-login",
  "values"
]);

export const selectRegisterFormValues = R.pathOr({ email: "", password: "" }, [
  "form",
  "checkout-register",
  "values"
]);

export const selectForgotFormValues = R.pathOr({ email: "" }, [
  "form",
  "checkout-forgot",
  "values"
]);

export const selecDateOfBirthFormValues = R.path([
  "form",
  "date-of-birth",
  "values"
]);

export const selectMe = R.pathOr({}, ["me"]);

export const selectActiveView = createSelector(
  selectAccountState,
  R.prop("activeView")
);

export const accountConnector = createStructuredSelector({
  activeView: selectActiveView
});
