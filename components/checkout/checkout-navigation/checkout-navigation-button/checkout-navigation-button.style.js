import styled from "styled-components";
import { equals } from "ramda";
import { ButtonReset } from "../../../elements/elements.style";

import { colors } from "../../../../theme/colors";
import { CHECKOUT_STEP_ORDER } from "../checkout-navigation.constants";

export const stepStatusToColor = ({ stepName, activeStep }) => {
  const isActiveStep = equals(stepName, activeStep);
  const isAfterActiveStep =
    CHECKOUT_STEP_ORDER[stepName] > CHECKOUT_STEP_ORDER[activeStep];
  return isActiveStep
    ? colors.black
    : isAfterActiveStep
      ? colors.canvas.primary
      : colors.grey;
};

export const CheckoutNavigationIconButton = styled(ButtonReset)`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
