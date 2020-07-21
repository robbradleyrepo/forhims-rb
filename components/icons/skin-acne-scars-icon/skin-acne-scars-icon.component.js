import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinAcneScarsIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill={color}>
      <circle cx="27.03" cy="23.11" r="1.31" />
      <circle cx="30.89" cy="26.97" r="1.31" />
      <circle cx="23.11" cy="27.03" r="1.31" />
      <circle cx="26.97" cy="30.89" r="1.31" />
    </g>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="19.26"
        y="0.9"
        width="15.49"
        height="52.21"
        rx="7.74"
        ry="7.74"
        transform="rotate(45 26.995 27.002)"
      />
      <path d="M27 16.05L37.95 27M27 37.95L16.05 27" />
    </g>
  </SvgIcon>
);

SkinAcneScarsIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
