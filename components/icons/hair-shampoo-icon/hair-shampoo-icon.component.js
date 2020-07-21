import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairShampooIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <circle cx="21.14" cy="34.05" r="14.34" />
      <path d="M24.39 20.07a9.37 9.37 0 1 1 10.66 10.41M33.68 15.39a5.82 5.82 0 0 1 5.82 5.82M21.25 23.41a9.6 9.6 0 0 1 9.6 9.6" />
      <circle cx="16.74" cy="10.41" r="4.81" />
      <path d="M35.1 37.37a4.75 4.75 0 0 1 2.16-.52 4.81 4.81 0 1 1-4.67 6" />
      <circle cx="43.27" cy="9.37" r="2.01" />
      <circle cx="45.19" cy="33.09" r="2.01" />
    </g>
  </SvgIcon>
);

HairShampooIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
