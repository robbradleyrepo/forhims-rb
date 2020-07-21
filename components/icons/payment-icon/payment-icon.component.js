import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const PaymentIcon = ({ height = 32, color = colors.black }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <g>
      <g fill="none">
        <path d="M0 0h32v32H0z" />
        <path
          d="M20.3 24.933A7.467 7.467 0 1 0 20.3 10"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M20.353 24.933h-7.466c-2.946 0-5.04-2.22-5.04-5.166"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M5.26 7.773V19.76h14.013V7.773H5.26zM3.768 6.267h17v15h-17v-15zm15.5 3v7h1.5v-7h-1.5z"
          fill={color}
        />
        <path stroke={color} d="M5.267 11.767h8v1h-8z" />
        <path stroke={color} d="M8 16.267h3.5v1H8z" />
        <path
          d="M22.033 16.967c-2.356 0-4.266-1.624-4.266-3.98"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M17.428 13.733H17.1A3.733 3.733 0 0 1 13.367 10h7.466"
          stroke={color}
          strokeWidth="1.5"
        />
      </g>
    </g>
  </SvgIcon>
);

PaymentIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
