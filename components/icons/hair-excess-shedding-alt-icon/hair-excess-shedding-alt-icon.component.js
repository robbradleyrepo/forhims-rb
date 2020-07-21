import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairExcessSheddingAltIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeWidth="2px" strokeLinecap="round">
      <path d="M38.73 11.87A21.4 21.4 0 0 1 9.44 4.29M49 18.83a21.39 21.39 0 0 1-30.21 1.69M48.46 38.78A21.4 21.4 0 0 1 19.33 47M32.46 36.74A21.4 21.4 0 0 1 5 24" />
    </g>
  </SvgIcon>
);

HairExcessSheddingAltIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
