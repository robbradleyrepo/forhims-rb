import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const PlusIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <path fill={color} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </SvgIcon>
);

PlusIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
