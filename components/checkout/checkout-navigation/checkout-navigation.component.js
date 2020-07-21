import React from "react";
import PropTypes from "prop-types";

import { values } from "ramda";

import { CheckoutNavigationButton } from "./checkout-navigation-button";
import { CartIcon } from "../../icons/cart-icon";
import { ProfileIcon } from "../../icons/profile-icon";
import { ShippingIcon } from "../../icons/shipping-icon";
import { PaymentIcon } from "../../icons/payment-icon";
import { VisitIcon } from "../../icons/visit-icon";
import { ArrowIcon } from "../../icons/arrow-icon";
import { CheckoutNavigationWrapper } from "./checkout-navigation.style";
import { CHECKOUT_STEP_NAMES } from "./checkout-navigation.constants";

const StepSeparator = () => <ArrowIcon direction="right" height={13} />;

const NAV_ITEMS = [
  {
    icon: CartIcon,
    name: CHECKOUT_STEP_NAMES.CART
  },
  {
    icon: ProfileIcon,
    name: CHECKOUT_STEP_NAMES.PROFILE
  },
  {
    icon: ShippingIcon,
    name: CHECKOUT_STEP_NAMES.SHIPPING
  },
  {
    icon: PaymentIcon,
    name: CHECKOUT_STEP_NAMES.PAYMENT
  },
  {
    icon: VisitIcon,
    name: CHECKOUT_STEP_NAMES.VISIT
  }
];

export const CheckoutNavigation = ({ activeStep, enabledSteps, goToStep }) => {
  return (
    <CheckoutNavigationWrapper>
      {NAV_ITEMS.map(({ icon, name }, index, items) => [
        <CheckoutNavigationButton
          key={name}
          icon={icon}
          stepName={name}
          activeStep={activeStep}
          isDisabled={enabledSteps[name] !== true}
          onClick={() => goToStep(name)}
        />,
        index < items.length - 1 ? (
          <StepSeparator key={`${name}-separator`} />
        ) : null
      ])}
    </CheckoutNavigationWrapper>
  );
};

CheckoutNavigation.propTypes = {
  activeStep: PropTypes.oneOf(values(CHECKOUT_STEP_NAMES)),
  goToStep: PropTypes.func.isRequired,
  enabledSteps: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]).isRequired
};
