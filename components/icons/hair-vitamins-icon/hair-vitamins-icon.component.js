import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairVitaminsIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <circle cx="15.94" cy="14.07" r="9.18" />
      <rect
        x="25.44"
        y="14.37"
        width="12.67"
        height="38.53"
        rx="6.34"
        ry="6.34"
        transform="rotate(45 31.767 33.638)"
      />
      <path d="M27.29 29.16l8.96 8.96M6.76 14.07h18.36" />
    </g>
  </SvgIcon>
);

HairVitaminsIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
