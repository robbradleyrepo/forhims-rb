"use strict";

import { createSelector } from "reselect";
import R from "ramda";

const getCoupons = R.path(["coupons", "list", "data"]);

const stateToCouponValues = R.compose(
  R.map(R.prop("page")),
  getCoupons
);

const getWhiteList = R.compose(
  R.map(R.toLower),
  stateToCouponValues
);

const findCoupon = (coupon, state) =>
  R.compose(
    R.find(label => new RegExp(`${label}(\/$|$)`, "gi").test(coupon)),
    getWhiteList
  )(state);

const isValid = (coupon, state) => {
  return findCoupon(coupon, state) || "";
};

const getCoupon = R.compose(
  R.toLower,
  R.replace("/", ""),
  R.path(["routing", "locationBeforeTransitions", "pathname"])
);

const stateToCouponLabel = state =>
  R.compose(
    coupon => isValid(coupon, state),
    getCoupon
  )(state);

const stateToCoupon = state => {
  const coupon = stateToCouponLabel(state);
  return getWhiteList(state).indexOf(coupon) > -1
    ? R.find(x => R.toLower(x.page) === R.toLower(coupon), getCoupons(state))
    : null;
};

const selectActiveCouponRoute = createSelector(
  stateToCoupon,
  R.propOr("", "page")
);

module.exports = {
  stateToCoupon,
  stateToCouponLabel,
  selectActiveCouponRoute,
  getCoupons
};
