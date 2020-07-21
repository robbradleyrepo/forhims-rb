import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairRegrowingIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <path d="M14.59 45.41h24.82v2.52a3.27 3.27 0 0 1-3.27 3.27H17.86a3.27 3.27 0 0 1-3.27-3.27v-2.52z" />
      <path d="M17.28 45.41l-2-11.49h23.45l-2.01 11.49M37 33.2s2.82-10.23 4.83-13c0 0-8.54 0-9.59 13" />
      <path d="M34.44 25s2.82-10.24 4.83-13c0 0-10.15 1.35-10.94 22M17 33.2s-2.82-10.23-4.83-13c0 0 8.54 0 9.59 13" />
      <path d="M19.56 25s-2.82-10.24-4.83-13c0 0 10.15 1.35 10.94 22" />
      <path d="M23.36 21.05c0-11.72 2.9-15.46 3.64-16.3.74.84 3.64 4.58 3.64 16.3" />
    </g>
  </SvgIcon>
);

HairRegrowingIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
