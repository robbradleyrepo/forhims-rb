import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexTakeNightIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M23.65 29.89a16.58 16.58 0 0 1 2.84-19.35 16.59 16.59 0 1 0 14.72 28 16.59 16.59 0 0 1-17.56-8.65z"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M36.03 19.85l1.83 3.35 3.35 1.83-3.35 1.83-1.83 3.35-1.83-3.35-3.35-1.83 3.35-1.83 1.83-3.35zM9.18 4.91l1.51 2.76 2.76 1.51-2.76 1.51-1.51 2.76-1.51-2.76-2.76-1.51 2.76-1.51 1.51-2.76z"
    />
    <circle
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      cx="10.18"
      cy="45.11"
      r="1.56"
    />
    <circle
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      cx="45.31"
      cy="11.8"
      r="1.56"
    />
  </SvgIcon>
);

SexTakeNightIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
