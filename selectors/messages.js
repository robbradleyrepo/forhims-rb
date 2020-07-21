"use strict";

import R from "ramda";
import { createSelector } from "reselect";

import { route } from "./url";

const stateToMessages = R.compose(
  R.values,
  R.path(["messages", "byId"])
);

const getMessagesWithAction = R.compose(
  R.filter(x => !!x.actionRequired),
  stateToMessages
);

const hasMessagesWithAction = R.compose(
  xs => !!xs.length,
  getMessagesWithAction
);

const selectSortedMessages = R.path(["messages", "sorted"]);

const selectMessages = createSelector(selectSortedMessages, messages =>
  R.defaultTo([], messages)
);

const selectMessageIdFromUrl = createSelector(
  route,
  R.pipe(
    R.propOr("", "pathname"),
    R.match(/\/messages\/(.+)/),
    R.nth(1)
  )
);

const selectMessagesFromDoctor = createSelector(
  selectSortedMessages,
  R.filter(R.propEq("isReply", false))
);

module.exports = {
  getMessagesWithAction,
  hasMessagesWithAction,
  selectMessages,
  selectMessageIdFromUrl,
  selectMessagesFromDoctor
};
