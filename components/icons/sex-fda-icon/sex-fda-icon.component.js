import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexFdaIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <circle cx="27" cy="27" r="21" strokeLinejoin="round" fill="none" />
    </g>
    <path
      fill={color}
      d="M11.53 20.2h7.75v2.1h-5.4v3.29h4.28v2.1h-4.28v5.2h-2.35zM20.62 32.89V20.2h5c3.63 0 5.73 2.76 5.73 6.37s-2.1 6.32-5.73 6.32zM23 30.73h2.6c2.24 0 3.37-1.88 3.37-4.16s-1.13-4.22-3.37-4.22H23zM39.63 29.81H34.9l-1.16 3.08h-2.51L36 20.2h2.54l4.75 12.69h-2.5zm-3.94-2.06h3.17l-1.61-4.85z"
    />
    <g fill="#fff" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <circle cx="41.85" cy="41.4" r="6.14" />
      <path d="M44.44 39.86l-3.17 4.16-2.01-2.76" />
    </g>
  </SvgIcon>
);

SexFdaIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
