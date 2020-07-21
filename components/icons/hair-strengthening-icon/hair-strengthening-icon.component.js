import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairStrengtheningIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <path d="M42.3 23.94h-3.77a32.16 32.16 0 0 1-14-3.28c-3.22-1.57-7-3-10.52-1.42a8.63 8.63 0 0 0-5.23 7.62v.28A8.63 8.63 0 0 0 14 34.76c3.49 1.58 7.3.15 10.52-1.42a32.16 32.16 0 0 1 14.05-3.28h3.73" />
      <path d="M12.44 30.06a35.05 35.05 0 0 1 14.71 3.28c3.22 1.57 7 3 10.52 1.42a8.63 8.63 0 0 0 5.22-7.62v-.28a8.63 8.63 0 0 0-5.22-7.62c-3.5-1.58-7.3-.15-10.52 1.42a35.05 35.05 0 0 1-14.71 3.28M45.33 23.93H52M45.33 30.07H52M2 23.93h6.67M2 30.07h6.67" />
    </g>
  </SvgIcon>
);

HairStrengtheningIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
