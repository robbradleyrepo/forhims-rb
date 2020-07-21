import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CameraIcon = ({ color = colors.black, height = 32 }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <circle fill={color} cx="12" cy="12" r="3.2" />
    <path
      fill={color}
      d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

CameraIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
