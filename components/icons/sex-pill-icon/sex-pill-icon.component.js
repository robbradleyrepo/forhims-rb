import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexPillIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <path
      fill={color}
      d="M23.72 20.4v13.2h-2.45v-9.83l-2.2.88v-2.2zm1.75 3.89h2.86l1.59 2.29 1.56-2.29h2.85l-3 4.25 3.65 5.06H32.1l-2.2-3.11-2.21 3.11h-2.83l3.67-5.06z"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M11.33 6.38l7.47.7-.71 7.47M27 6a21 21 0 1 1-10 2.52"
    />
  </SvgIcon>
);

SexPillIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
