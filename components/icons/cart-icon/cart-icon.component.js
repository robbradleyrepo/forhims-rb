import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CartIcon = ({ color = colors.black, height = 32 }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <g fill="none" strokeLinecap="round">
      <path d="M0 0h32v32H0z" />
      <path
        d="M8.535 9.75l.427 9.5h15.576l.427-9.5H8.535z"
        stroke={color}
        strokeWidth="1.5"
      />
      <g transform="translate(7 9)">
        <use fill="#F2F2F2" fillRule="evenodd" />
        <circle stroke={color} strokeWidth="1.5" cx="3.5" cy="15.5" r="1.75" />
      </g>
      <g transform="translate(7 9)">
        <use fill="#F2F2F2" fillRule="evenodd" />
        <circle stroke={color} strokeWidth="1.5" cx="15.5" cy="15.5" r="1.75" />
      </g>
      <path
        fill={color}
        d="M4.071 4.76l4.817-.74.531 8.624-1.474.052-.417-6.868-3.204.48z"
      />
    </g>
  </SvgIcon>
);

CartIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
