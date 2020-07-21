import React from "react";
import PropTypes from "prop-types";

import {
  ButtonVariant,
  ButtonIconWrapper,
  ButtonVariantLink
} from "./button.style";
import { BUTTON_VARIANTS } from "../../theme/buttons";

export const Button = ({
  accessibilityLabel,
  className,
  disabled = false,
  fullWidth = false,
  shrinkToText = false,
  label,
  icon: IconComponent,
  onClick,
  testId = null,
  type = "button",
  variant = BUTTON_VARIANTS.PRIMARY
}) => {
  return (
    <ButtonVariant
      className={className}
      disabled={disabled}
      fullWidth={fullWidth}
      shrinkToText={shrinkToText}
      onClick={onClick}
      type={type}
      variant={variant}
      data-testid={testId}
      aria-label={accessibilityLabel}
    >
      {label}
      {IconComponent && (
        <ButtonIconWrapper>
          <IconComponent forceColor={false} />
        </ButtonIconWrapper>
      )}
    </ButtonVariant>
  );
};

export const ButtonLink = ({
  to,
  accessibilityLabel,
  label,
  testId,
  ...props
}) => (
  <ButtonVariantLink
    aria-label={accessibilityLabel || label}
    data-testid={testId}
    to={to}
    {...props}
  >
    {label}
  </ButtonVariantLink>
);

Button.propTypes = {
  accessibilityLabel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.func,
  onClick: PropTypes.func,
  testId: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  shrinkToText: PropTypes.bool
};
