import { selectCouponBannerIsVisible } from "./coupon-banner.selectors";

const couponState = {
  list: {
    data: [
      {
        page: "gentsed",
        description:
          "Welcome to Hims, click here for your first month's discount. ",
        offer: "only £1 for your consultation",
        productId: "DWraq9FV",
        utmSource: "",
        utmMedium: "",
        utmCampaign: "",
        utmContent: "1dconsuled"
      }
    ],
    error: null,
    loading: false
  }
};

const couponRouteState = {
  locationBeforeTransitions: {
    pathname: "/gentsed",
    search: "",
    hash: "",
    action: "POP",
    key: null,
    query: {}
  }
};

describe("Coupon Banner Selectors", () => {
  it("Should display the coupon banner when the current route matches an active coupon", () => {
    const mockState = {
      coupons: couponState,
      routing: couponRouteState,
      ui: {
        couponBanner: {
          isDismissed: false
        }
      }
    };
    const isVisible = selectCouponBannerIsVisible(mockState);
    expect(isVisible).toBeTruthy();
  });
  it("Should not display the coupon banner when the current route does not match an active coupon", () => {
    const mockState = {
      coupons: couponState,
      routing: {
        locationBeforeTransitions: {
          pathname: "/sexual-health",
          search: "",
          hash: "",
          action: "POP",
          key: null,
          query: {}
        }
      },
      ui: {
        couponBanner: {
          isDismissed: false
        }
      }
    };
    const isVisible = selectCouponBannerIsVisible(mockState);
    expect(isVisible).toBeFalsy();
  });
  it("Should not display the coupon banner when the current route matches an active coupon, but the banner has been dismissed by the user", () => {
    const mockState = {
      coupons: couponState,
      routing: couponRouteState,
      ui: {
        couponBanner: {
          isDismissed: true
        }
      }
    };
    const isVisible = selectCouponBannerIsVisible(mockState);
    expect(isVisible).toBeFalsy();
  });
});
