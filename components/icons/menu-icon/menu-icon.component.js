import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const MenuIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={color} />
  </SvgIcon>
);

MenuIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
