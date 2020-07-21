import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const WaterDropIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <defs>
      <path id="a" d="M0 0h6v7H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M8 1.57122C3.32597 7.30582 1 11.50267 1 14c0 3.866 3.134 7 7 7s7-3.134 7-7c0-2.49733-2.32597-6.69418-7-12.42878z"
        stroke={color}
        strokeWidth="2"
      />
      <g transform="rotate(60 -2.026 16.794)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <circle stroke={color} strokeWidth="2" mask="url(#b)" cy="7" r="3" />
      </g>
    </g>
  </SvgIcon>
);

WaterDropIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
