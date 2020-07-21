import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const FacebookIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={155} originalWidth={155} height={height}>
    <path
      fill={color}
      d="M89.584,155.139V84.378h23.742l3.562-27.585H89.584V39.184
		c0-7.984,2.208-13.425,13.67-13.425l14.595-0.006V1.08C115.325,0.752,106.661,0,96.577,0C75.52,0,61.104,12.853,61.104,36.452
		v20.341H37.29v27.585h23.814v70.761H89.584z"
    />
  </SvgIcon>
);

FacebookIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
