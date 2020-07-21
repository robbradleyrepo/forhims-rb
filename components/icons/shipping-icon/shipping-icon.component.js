import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const ShippingIcon = ({ height = 32, color = colors.black }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <g>
      <g fill="none">
        <path d="M0 0h32v32H0z" />
        <path
          d="M4.5 7.5v15h14v-15h-14zM3 6h17v18H3V6zm4 16.5V24h4v-1.5H7z"
          fill={color}
        />
        <path
          d="M19.25 9.55v6.2h5.973l-.603-6.2h-5.37z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M26.827 16.5H20v6h7.36l-.533-6zM18.5 15h9.7l.8 9H18.5v-9zm3.5 7.5V24h4v-1.5h-4z"
          fill={color}
        />
        <path
          d="M9.217 25.196a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          fill={color}
        />
        <path
          d="M23.74 25.196a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          fill={color}
        />
      </g>
    </g>
  </SvgIcon>
);

ShippingIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
