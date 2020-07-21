import R from "ramda";
import { createSelector, createStructuredSelector } from "reselect";

import { selectTrimmedCurrentRoute } from "../../selectors/cms";
import { selectCouponBannerIsDismissed } from "../../selectors/ui";

const COUPON_REDIRECT_QUERY_PARAM = "inactive_coupon";

const selectMatchedCoupon = R.pathOr({}, ["coupons", "list", "data", 0]);

const selectCurrentQueryParams = R.path([
  "routing",
  "locationBeforeTransitions",
  "query"
]);

const selectMatchedCouponPage = createSelector(
  selectMatchedCoupon,
  R.propOr(false, "page")
);

export const selectCurrentPageMapsToCoupon = createSelector(
  selectTrimmedCurrentRoute,
  selectMatchedCouponPage,
  R.equals
);

export const selectCouponBannerIsVisible = createSelector(
  selectCurrentPageMapsToCoupon,
  selectCouponBannerIsDismissed,
  (isCouponPage, isDismissed) => !isDismissed && isCouponPage
);

const selectCouponBannerRedirectedCouponInfo = createSelector(
  selectCurrentQueryParams,
  selectCouponBannerIsDismissed,
  (queryParams, isDismissed) =>
    !isDismissed && queryParams[COUPON_REDIRECT_QUERY_PARAM]
);

export const couponBannerConnector = createStructuredSelector({
  isCouponVisible: selectCouponBannerIsVisible,
  redirectedInactiveCouponInfo: selectCouponBannerRedirectedCouponInfo,
  couponInfo: selectMatchedCoupon
});
