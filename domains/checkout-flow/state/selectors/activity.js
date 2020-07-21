import R from "ramda";
import { createSelector } from "reselect";

const selectCheckoutFlowActivity = R.path(["checkoutTemp", "activity"]);

export const selectCheckoutFlowActivityVisible = createSelector(
  selectCheckoutFlowActivity,
  R.propOr(false, "visible")
);
