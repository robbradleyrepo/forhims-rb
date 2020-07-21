import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairLossDropsIcon = ({ color = colors.black, height = 32 }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2px"
    >
      <path
        className="cls-1"
        d="M11.94 40a.13.13 0 0 0-.12.1 6.67 6.67 0 0 1-.62 2.2 16.23 16.23 0 0 1-.94 1.64 15.93 15.93 0 0 0-.86 1.43A3.49 3.49 0 0 0 9 47a2.64 2.64 0 0 0 .24 1.11 2.79 2.79 0 0 0 .63.92 2.88 2.88 0 0 0 3.17.62 3.09 3.09 0 0 0 .93-.62 2.79 2.79 0 0 0 .63-.92 2.64 2.64 0 0 0 .26-1.11 3.49 3.49 0 0 0-.38-1.67 15.93 15.93 0 0 0-.86-1.43 16.23 16.23 0 0 1-.94-1.64 6.91 6.91 0 0 1-.63-2.2.11.11 0 0 0-.11-.1zM34.57 10.51l5.6-5.61a2.84 2.84 0 0 1 4 0 2.84 2.84 0 0 1 0 4l-5.61 5.6"
      />
      <rect
        className="cls-1"
        x="27.69"
        y="11.8"
        width="13.57"
        height="5.56"
        rx="1.6"
        ry="1.6"
        transform="rotate(45 34.48 14.582)"
      />
      <path
        className="cls-1"
        d="M33.63 17.9L15.89 35.64a.8.8 0 0 1-.48.23l-2 .64a.79.79 0 0 1-.85-.86l.63-2a.8.8 0 0 1 .23-.49l17.74-17.73"
      />
    </g>
  </SvgIcon>
);

HairLossDropsIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
