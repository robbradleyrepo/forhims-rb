import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const InfoIcon = ({ color = colors.black, height = 32 }) => (
  <SvgIcon originalHeight={23} originalWidth={23} height={height}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
    />
  </SvgIcon>
);

InfoIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
