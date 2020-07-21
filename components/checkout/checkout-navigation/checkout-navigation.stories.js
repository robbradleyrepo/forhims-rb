import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

import { CheckoutNavigation } from "./checkout-navigation.component";

storiesOf("Domains|Checkout/Navigation", module).add("Navigation Bar", () => {
  const activeStep = select(
    "Current step",
    {
      cart: "cart",
      profile: "profile",
      shipping: "shipping",
      payment: "payment"
    },
    "cart"
  );
  const cartIsCompleted = boolean("Cart step is completed", false);
  const profileIsCompleted = boolean("Profile step is completed", false);
  const shippingIsCompleted = boolean("Shipping step is completed", false);
  const paymentIsCompleted = boolean("Payment step is completed", false);
  const goToStep = action("goToStep-onClick");
  const enabledSteps = ["cart", "account", "shipping", "payment"];
  const props = {
    activeStep,
    cartIsCompleted,
    profileIsCompleted,
    shippingIsCompleted,
    paymentIsCompleted,
    goToStep,
    enabledSteps
  };
  return <CheckoutNavigation {...props} />;
});
