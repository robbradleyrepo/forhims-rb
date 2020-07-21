import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexLowLibidoIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.59 30.63h24.82v3.52H14.59z" />
      <path d="M17.28 49.42l-2-15.5h23.45l-2.01 15.5H17.28zM17.94 12.4a4.52 4.52 0 0 1 4.5-4.5 4.51 4.51 0 0 1 4.49 4.5v17.26" />
      <path d="M22 15.84a6.88 6.88 0 0 1-.37 4.76 6.87 6.87 0 0 1-3.4-3.35 6.88 6.88 0 0 1 .37-4.76 6.91 6.91 0 0 1 3.4 3.35z" />
      <path d="M13.87 15.84a6.94 6.94 0 0 0 .37 4.76 6.91 6.91 0 0 0 3.41-3.35 6.92 6.92 0 0 0-.38-4.76 6.91 6.91 0 0 0-3.4 3.35z" />
    </g>
  </SvgIcon>
);

SexLowLibidoIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
