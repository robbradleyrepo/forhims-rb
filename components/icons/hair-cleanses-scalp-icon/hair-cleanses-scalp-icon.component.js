import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairCleansesScalpIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round">
      <circle cx="26.28" cy="22.4" r="9.56" />
      <path d="M28.44 13.08A6.24 6.24 0 1 1 35.55 20M33.86 10.74a3.88 3.88 0 0 1 3.88 3.88M25.57 16.08a6.39 6.39 0 0 1 6.4 6.4" />
      <circle cx="13.47" cy="7.35" r="1.99" />
      <circle cx="45.53" cy="18.25" r="1.99" />
      <path d="M13.09 43.13a1.48 1.48 0 0 1-3 0M23.35 43.13a1.48 1.48 0 1 1-3 0M33.61 43.13a1.48 1.48 0 1 1-3 0M43.87 43.13a1.48 1.48 0 1 1-3 0" />
      <path d="M50.08 33.7v8.06a6.86 6.86 0 0 1-6.87 6.87H10.79a6.86 6.86 0 0 1-6.87-6.87V33.7" />
      <path d="M35.06 26.19h8.61a6.43 6.43 0 0 1 6.41 6.41 6.42 6.42 0 0 1-6.41 6.4H10.33a6.42 6.42 0 0 1-6.41-6.4 6.43 6.43 0 0 1 6.41-6.41h7.17" />
    </g>
  </SvgIcon>
);

HairCleansesScalpIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
