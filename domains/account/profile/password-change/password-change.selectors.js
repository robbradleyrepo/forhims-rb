import { createSelector, createStructuredSelector } from "reselect";
import { isSubmitting } from "redux-form";
import { FORM_NAME } from "./password-change.constants";
import { propOr, identity } from "ramda";

const selectMe = createSelector(propOr({}, "me"), identity);

const selectToken = createSelector(propOr("", "token"), identity);

const selectSubmitButtonLabel = createSelector(
  isSubmitting(FORM_NAME),
  submitting => (submitting ? "Changing Password…" : "Change Password")
);

export const passwordChangeConnector = createStructuredSelector({
  me: selectMe,
  submitButtonLabel: selectSubmitButtonLabel,
  token: selectToken
});
