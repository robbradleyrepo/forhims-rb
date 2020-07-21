import React from "react";
import PropTypes from "prop-types";

import { CircleButton } from "./icon-button.style";

import { colors } from "../../theme/colors";

export const IconButton = ({
  onClick,
  icon,
  borderColor = colors.canvas.primary,
  hoverBorderColor = colors.black,
  label,
  testId: testAttributeName = null
}) => (
  <CircleButton
    borderColor={borderColor}
    hoverBorderColor={hoverBorderColor}
    onClick={onClick}
    aria-label={label}
    data-testid={testAttributeName}
  >
    {icon}
  </CircleButton>
);
IconButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  label: PropTypes.string,
  testId: PropTypes.string
};
