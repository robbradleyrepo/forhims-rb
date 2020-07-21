import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinDarkSpotsIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <circle cx="27" cy="27" r="15.87" fill={color} />
    <circle
      cx="27"
      cy="27"
      r="21"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </SvgIcon>
);

SkinDarkSpotsIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
