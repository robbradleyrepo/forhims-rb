import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairStrongerNailsIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round">
      <path d="M28.78 25v21.07a.78.78 0 0 1-.18.51l-1 1.9a.8.8 0 0 1-1.24 0l-1-1.9a.78.78 0 0 1-.18-.51V25M27.18 12.17V6.43M17.5 15.61l-4.05-4.06M12.8 23.18H7.06M41.2 23.55h5.74M36.76 15.87l4.05-4.06" />
      <ellipse cx="27" cy="21.93" rx="9.06" ry="2.69" />
    </g>
  </SvgIcon>
);

HairStrongerNailsIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
