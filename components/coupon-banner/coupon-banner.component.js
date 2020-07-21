import React, { Component } from "react";
import PropTypes from "prop-types";

import { Headline4 } from "../fonts";

import {
  CouponBannerWrapper,
  CouponBannerHeader,
  CouponBannerDismissButton,
  CouponBannerCloseIcon,
  FixedToBottom,
  CouponBannerHeaderWrapper
} from "./coupon-banner.style";

export class CouponBanner extends Component {
  componentDidMount() {
    this.props.applyCouponToOrder(this.props.couponInfo.page);
  }

  render() {
    const {
      addToCartAndSetCoupon,
      couponInfo,
      handleDismiss,
      isCouponVisible,
      redirectedInactiveCouponInfo: redirectedCode
    } = this.props;

    // If there's no coupon
    if (!isCouponVisible && !redirectedCode) return null;

    const { description, offer } = couponInfo;

    const header = redirectedCode
      ? `Sorry! Coupon code "${redirectedCode}" has expired`
      : description;

    const headline = redirectedCode
      ? "We are not able to add this coupon to your cart and redeem the discount."
      : offer;

    const onClick = redirectedCode ? undefined : addToCartAndSetCoupon;

    return (
      <FixedToBottom>
        <CouponBannerWrapper onClick={onClick}>
          <CouponBannerHeaderWrapper mb={2}>
            <CouponBannerHeader as="h3" onPrimary>
              {header}
            </CouponBannerHeader>
          </CouponBannerHeaderWrapper>
          <Headline4 as="p" onPrimary>
            {headline}
          </Headline4>
          <CouponBannerDismissButton onClick={handleDismiss}>
            <CouponBannerCloseIcon />
          </CouponBannerDismissButton>
        </CouponBannerWrapper>
      </FixedToBottom>
    );
  }
}

CouponBanner.propTypes = {
  addToCartAndSetCoupon: PropTypes.func,
  applyCouponToOrder: PropTypes.func,
  redirectedInactiveCouponInfo: PropTypes.any,
  couponInfo: PropTypes.shape({
    description: PropTypes.string,
    offer: PropTypes.string,
    page: PropTypes.string,
    productId: PropTypes.string
  }).isRequired,
  handleDismiss: PropTypes.func,
  isCouponVisible: PropTypes.bool
};
