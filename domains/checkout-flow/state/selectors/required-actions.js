import R from "ramda";
import { createSelector } from "reselect";

export const selectMessages = createSelector(
  state => state.messages.byId,
  messageList => R.filter(m => m.actionRequired, messageList)
);

export const selectVisits = createSelector(
  state => state.visits.byId,
  visitList => R.filter(v => v.status === "pending", visitList)
);

export const selectOrders = R.path(["orders", "byId"]);
