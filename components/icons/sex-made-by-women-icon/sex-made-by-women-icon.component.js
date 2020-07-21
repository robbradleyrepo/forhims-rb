import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexMadeByWomenIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.22 39.84s4.25-9.59 15.35-9.59c4.37 0 10.5 1.17 13.26 4.87a9.17 9.17 0 0 1-.08 10.75c-3 4-9.76 3.93-14.27 4.21-7 .45-14-.77-21-.48-1.6.07-3.94 1.15-5.37.08-1.11-.85-1.03-2.63-.89-3.88.67-5.63.34-11.5 2.31-16.9 1.56-4.25 4.25-8.85 4.28-13.52 0-1.63-.36-4.16 1.63-7s3-6.14 7.4-4.34 8.4 2.08 5.51 5.6c0 0 2.89 1.9.27 4.06-1.14.95-1.91 2.25-3 3.23s-2.83 1.31-4.32 1.92c-1.14.46-.92 3.73-.95 4.66-.08 3.52-.37 7-.64 10.46-.04.5-.43 6.28.51 5.87z" />
      <path d="M26.35 9.69A17.56 17.56 0 0 1 23 12.16c-.67.34-3.56 1.26-4 .29a.93.93 0 0 1-.1-.45c.05-1 0-1.94 0-2.93 0-.42 0-1.57.59-1.61a4.58 4.58 0 0 1 1.79.36c.42.14 1.67.4 1.72 1a.33.33 0 0 1-.13.29 3.35 3.35 0 0 1-.87.49" />
    </g>
  </SvgIcon>
);

SexMadeByWomenIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
