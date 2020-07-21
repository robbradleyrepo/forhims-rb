import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CheckIcon = ({ color = colors.black, height = 24 }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill={color} d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </SvgIcon>
);

CheckIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
