import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CircleIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <circle cx="9" cy="9" r="9" fill={color} />
  </SvgIcon>
);

CircleIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
