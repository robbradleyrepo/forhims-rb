import R from "ramda";
import { createStructuredSelector, createSelector } from "reselect";

const hasRequiredActions = createSelector(
  [R.pathOr([], ["messages", "byId"]), R.pathOr([], ["visits", "byId"])],
  (messages, visits) =>
    !R.isEmpty(R.filter(R.propOr(false, "actionRequired"), messages)) ||
    !R.isEmpty(R.filter(R.propEq("status", "pending"), visits))
);

export const accountMenuConnector = createStructuredSelector({
  hasRequiredActions
});
