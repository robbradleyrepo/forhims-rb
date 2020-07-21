import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinEnlargedPoresIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill={color}>
      <circle cx="36.57" cy="37.12" r="1.27" />
      <circle cx="31.15" cy="41.71" r="1.27" />
      <circle cx="29.79" cy="34.61" r="1.27" />
      <circle cx="35.21" cy="30.02" r="1.27" />
      <circle cx="24.37" cy="39.2" r="1.27" />
    </g>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2px"
      strokeLinejoin="round"
    >
      <circle cx="27.05" cy="30.53" r="17.52" />
      <path d="M21.71 5.69S27 7.91 27 13M31.59 11a6.83 6.83 0 0 1-4.73.6 6.9 6.9 0 0 1 2.59-4 6.89 6.89 0 0 1 4.74-.6 6.87 6.87 0 0 1-2.6 4z" />
    </g>
  </SvgIcon>
);

SkinEnlargedPoresIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
