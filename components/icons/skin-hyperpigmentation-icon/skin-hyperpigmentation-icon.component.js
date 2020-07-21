import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinHyperpigmentationIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <clipPath id="clip-path">
        <circle cx="27.09" cy="26.67" r="21" />
      </clipPath>
      <g clipPath="url(#clip-path)">
        <circle cx="50.39" cy="26.67" r="20.34" fill={color} />
      </g>
      <circle cx="27.09" cy="26.67" r="21" />
    </g>
  </SvgIcon>
);

SkinHyperpigmentationIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
