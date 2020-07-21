import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinBrighteningAltIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="23.91" cy="12.16" r="7.8" />
      <circle cx="42.5" cy="12.16" r="3.9" />
      <circle cx="36.96" cy="30.64" r="2.76" />
      <path d="M34.54 22.05L8.66 47.93l-2.52-2.52 19.43-19.42 6.45-6.46 2.52 2.52zM27.79 28.8l-2.52-2.52" />
    </g>
  </SvgIcon>
);

SkinBrighteningAltIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
