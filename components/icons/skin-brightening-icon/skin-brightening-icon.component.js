import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinBrighteningIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M38.76 15.26l3.17-3.17M30.49 11.04l.7-4.43M21.31 12.48l-2.03-4M14.73 19.04L10.74 17M13.27 28.21l-4.43.7M25.75 40.72l-.7 4.43M34.93 39.28l2.03 3.99M41.5 32.72l4 2.03M42.97 23.55l4.42-.71M35.25 18.75l-3.39 6.65 5.28 5.28-7.37-1.17-3.39 6.65-1.17-7.37-7.37-1.17 6.65-3.39-1.17-7.37 5.28 5.28 6.65-3.39zM25.21 28.79l-18.6 18.6" />
    </g>
  </SvgIcon>
);

SkinBrighteningIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
