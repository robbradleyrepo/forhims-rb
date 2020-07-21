import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexFibHsddTabletsIcon = ({
  color = colors.black,
  height = 32
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2px"
    >
      <path d="M45.23 35L34.11 46.08a6.11 6.11 0 0 1-8.6 0 6.1 6.1 0 0 1 0-8.61l5.56-5.56 5.56-5.56a6.09 6.09 0 0 1 8.6 0 6.09 6.09 0 0 1 0 8.65zM39.67 40.52l-8.6-8.61M19.89 27.65L8.77 16.53a6.1 6.1 0 0 1 0-8.61 6.11 6.11 0 0 1 8.6 0l5.56 5.56 5.56 5.57a6.09 6.09 0 0 1 0 8.6 6.09 6.09 0 0 1-8.6 0zM14.33 22.09l8.6-8.61" />
    </g>
  </SvgIcon>
);

SexFibHsddTabletsIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
