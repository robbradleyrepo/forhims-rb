import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinPregnancyMaskIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2px"
      strokeLinejoin="round"
    >
      <path d="M33.84 28.64c4.06.85 6.74 4.63 7.19 8.78a11.85 11.85 0 1 1-23.56 2.51" />
      <path d="M32.35 21.31a6.38 6.38 0 0 1 6.38 6.39 6.24 6.24 0 0 1-.74 3M20.36 27.19A4.64 4.64 0 0 0 23 35.67v5.38a10 10 0 0 1 0-20" />
      <circle cx="27.81" cy="12.96" r="9.21" />
      <path d="M24 36.38h2.2a2.13 2.13 0 0 1 2.12 2.13 2.13 2.13 0 0 1-2.12 2.13H24M30.65 4.2s-7.27 13.46-17.71 14.06M18.74 11.61a15.25 15.25 0 0 1-7.17 2.45" />
    </g>
  </SvgIcon>
);

SkinPregnancyMaskIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
