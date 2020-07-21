import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const MinusIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <path fill={color} d="M19 13H5v-2h14v2z" />
  </SvgIcon>
);

MinusIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
