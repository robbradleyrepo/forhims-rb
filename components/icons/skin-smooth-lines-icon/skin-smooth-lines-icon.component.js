import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinSmoothLinesIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
    >
      <path d="M45.57 30.78H8.37c0-7.89 8.33-14.29 18.6-14.29h18.6z" />
      <rect
        x="19.61"
        y="6.72"
        width="25.95"
        height="3.81"
        rx="1.74"
        ry="1.74"
      />
      <path d="M45.57 8.79v16.56M8.43 39.55a6.53 6.53 0 0 0 12.19 3.25 6.53 6.53 0 0 0 12.82 0 6.53 6.53 0 0 0 12.19-3.25M27.03 37.09v4.93M15.78 37.09l-1.74 3.88M38.28 37.09l1.74 3.88" />
      <circle cx="38.28" cy="23.64" r="2.17" />
    </g>
  </SvgIcon>
);

SkinSmoothLinesIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
