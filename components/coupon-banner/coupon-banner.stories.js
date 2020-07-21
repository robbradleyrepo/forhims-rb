import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { CouponBanner } from "./coupon-banner.component";

storiesOf("Components|Coupon Banner", module).add(
  "Default Coupon Banner",
  () => {
    const handleAddToCartAndSetCoupon = action("add to cart");
    const offer = text("Offer", "$10 off for your first month");
    const description = text(
      "Description",
      "Welcome to Hers, click here for your first month's discount!"
    );
    const isCouponVisible = boolean("is coupon visible?", true);
    return (
      <CouponBanner
        addToCartAndSetCoupon={handleAddToCartAndSetCoupon}
        applyCouponToOrder={action("apply coupon")}
        couponInfo={{ offer, description }}
        handleDismiss={() => null}
        isCouponVisible={isCouponVisible}
      />
    );
  }
);
