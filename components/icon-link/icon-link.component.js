import React from "react";
import PropTypes from "prop-types";

import { CircleButton } from "../icon-button/icon-button.style";

import { colors } from "../../theme/colors";

export const IconLink = ({
  href,
  icon,
  borderColor = colors.canvas.primary,
  hoverBorderColor = colors.black,
  onClick,
  label
}) => (
  <CircleButton
    as="a"
    href={href}
    borderColor={borderColor}
    target="_blank"
    hoverBorderColor={hoverBorderColor}
    onClick={onClick}
    aria-label={label}
    rel="noopener"
  >
    {icon}
  </CircleButton>
);
IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  label: PropTypes.string
};
