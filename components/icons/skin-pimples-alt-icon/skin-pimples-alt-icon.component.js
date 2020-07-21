import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinPimplesAltIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <path d="M16.79 21.67a3.78 3.78 0 0 0 6.57 0M30.64 21.67a3.78 3.78 0 0 0 6.57 0" />
      <path d="M19.87 34.91a10.89 10.89 0 0 0 12.5 1.26 9.75 9.75 0 0 0 1.72-1.26" />
      <circle cx="27" cy="27.54" r="21" />
    </g>
    <g fill={color}>
      <circle cx="31.58" cy="29.25" r="1.27" />
      <circle cx="39.42" cy="33.32" r="1.27" />
      <circle cx="21.71" cy="41.35" r="1.27" />
    </g>
  </SvgIcon>
);

SkinPimplesAltIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
