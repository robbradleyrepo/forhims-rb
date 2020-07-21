import React from "react";
import PropTypes from "prop-types";

import { fillProps, SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CloseIcon = ({
  height = 24,
  color = colors.black,
  forceColor
}) => (
  <SvgIcon originalHeight={24} originalWidth={24} height={height}>
    <path
      {...fillProps(forceColor, color)}
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </SvgIcon>
);

CloseIcon.defaultProps = {
  forceColor: true
};

CloseIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  forceColor: PropTypes.bool
};
