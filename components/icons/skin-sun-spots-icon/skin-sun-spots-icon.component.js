import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinSunSpotsIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
    >
      <circle cx="27" cy="27" r="13.56" />
      <path d="M27 13.44V4.13M19.03 16.03L13.56 8.5M14.11 22.81l-8.86-2.88M14.11 31.19l-8.86 2.88M19.03 37.97l-5.47 7.53M27 40.56v9.31M34.97 37.97l5.47 7.53M39.89 31.19l8.86 2.88M39.89 22.81l8.86-2.88M34.97 16.03l5.47-7.53" />
    </g>
  </SvgIcon>
);

SkinSunSpotsIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
