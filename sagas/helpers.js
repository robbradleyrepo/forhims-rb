"use strict";

import R from "ramda";

const getters = {
  blog: R.prop("blog"),
  coupon: R.compose(
    R.prop("coupon"),
    R.prop("orders")
  ),
  drawers: R.prop("drawers"),
  emrQuestionnaires: R.compose(
    R.prop("questionnaires"),
    R.prop("emr")
  ),
  me: R.prop("me"),
  modal: R.prop("modal"),
  navigation: R.prop("navigation"),
  order: R.compose(
    R.prop("active"),
    R.prop("orders")
  ),
  orders: R.prop("orders"),
  pendingOrderCheckCompleted: R.compose(
    R.prop("pendingOrderCheckCompleted"),
    R.prop("orders")
  ),
  photos: R.prop("photos"),
  products: R.prop("products"),
  route: R.path(["routing", "locationBeforeTransitions"]),
  session: R.prop("session"),
  state: R.identity,
  token: R.prop("token"),
  visit: R.compose(
    R.prop("active"),
    R.prop("visits")
  ),
  visit2: R.prop("visit"),
  visits: R.prop("visits")
};

module.exports = {
  getters
};
