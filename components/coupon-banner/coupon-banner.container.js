import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import actions from "../../actions";
import { CART } from "../../domains/checkout-flow/state/actions";

import { CouponBanner } from "./coupon-banner.component";
import { couponBannerConnector } from "./coupon-banner.selectors";

const { applyCouponToOrder } = actions.order;
const { dismissCouponBanner } = actions.ui;

const dispatchers = {
  addToCart: CART.addToCart,
  applyCouponToOrder,
  dismissCouponBanner
};

export const CouponBannerContainer = compose(
  connect(
    couponBannerConnector,
    dispatchers
  ),
  withHandlers({
    addToCartAndSetCoupon: props => () => {
      $GTM.popupRedeem.trigger({ coupon: props.couponInfo.page });
      props.addToCart(props.couponInfo.productId);
      props.dismissCouponBanner();
    },
    handleDismiss: props => e => {
      // Prevent bubbling up to Add to Cart handler
      e.stopPropagation();
      props.dismissCouponBanner();
    }
  })
)(CouponBanner);
