import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinInflammationIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M38.64 23.01h-8.89l8.34-16.83h-9.78l-11.9 23.9h7.1l-6.14 17.74 21.27-24.81zM4.28 40.64H14.9M28.64 40.64h21.08" />
    </g>
  </SvgIcon>
);

SkinInflammationIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
