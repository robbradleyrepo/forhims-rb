import { createSelector, createStructuredSelector } from "reselect";
import { pathOr, identity } from "ramda";

const selectEmail = createSelector(
  pathOr("[no email]", ["me", "email"]),
  identity
);

const selectConfirmationNumber = createSelector(
  pathOr("[no confirmation number]", [
    "routing",
    "locationBeforeTransitions",
    "query",
    "id"
  ]),
  identity
);

export const ConfirmationPageConnector = createStructuredSelector({
  email: selectEmail,
  confirmationNumber: selectConfirmationNumber
});
