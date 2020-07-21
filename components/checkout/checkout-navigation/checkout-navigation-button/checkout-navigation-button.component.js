import React from "react";
import PropTypes from "prop-types";
import { values } from "ramda";

import {
  CheckoutNavigationIconButton,
  stepStatusToColor
} from "./checkout-navigation-button.style";
import { CHECKOUT_STEP_NAMES } from "../checkout-navigation.constants";

export const CheckoutNavigationButton = ({
  icon: Icon,
  isDisabled,
  activeStep,
  stepName,
  onClick
}) => {
  return (
    <CheckoutNavigationIconButton disabled={isDisabled} onClick={onClick}>
      <Icon color={stepStatusToColor({ stepName, activeStep })} />
    </CheckoutNavigationIconButton>
  );
};
CheckoutNavigationButton.propTypes = {
  icon: PropTypes.any,
  isDisabled: PropTypes.bool,
  activeStep: PropTypes.oneOf(values(CHECKOUT_STEP_NAMES)),
  stepName: PropTypes.oneOf(values(CHECKOUT_STEP_NAMES)),
  onClick: PropTypes.func
};
