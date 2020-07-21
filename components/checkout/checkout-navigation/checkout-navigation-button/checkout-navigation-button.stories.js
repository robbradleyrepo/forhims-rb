import React from "react";
import { storiesOf } from "@storybook/react";
import { select, boolean } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

import { ShippingIcon } from "../../../icons/shipping-icon";

import { CheckoutNavigationButton } from "./checkout-navigation-button.component";

storiesOf("Domains|Checkout/Navigation", module).add("Button", () => {
  const step = select(
    "This step is:",
    {
      active: "the active step",
      before: "before the active step",
      after: "after the active step"
    },
    "active"
  );
  const isDisabled = boolean("is disabled?", false);
  const stepProps = {
    active: {
      activeStep: "shipping",
      stepName: "shipping"
    },
    after: {
      activeStep: "cart",
      stepName: "shipping"
    },
    before: {
      activeStep: "visit",
      stepName: "shipping"
    }
  };
  return (
    <CheckoutNavigationButton
      icon={ShippingIcon}
      isDisabled={isDisabled}
      onClick={action("checkout-navigation-button-onClick")}
      {...stepProps[step]}
    />
  );
});
