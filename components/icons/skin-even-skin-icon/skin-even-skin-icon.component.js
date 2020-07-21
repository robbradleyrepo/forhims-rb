import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinEvenSkinIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <path d="M43.15 45.06V8.94M32.05 45.06c0-3.61.67-3.61.67-7.22s-.67-3.61-.67-7.22.67-3.61.67-7.22-.67-3.62-.67-7.23.67-3.62.67-7.23M21 45.06c0-3.61 1.33-3.61 1.33-7.22S21 34.23 21 30.62s1.28-3.62 1.28-7.22S21 19.78 21 16.17s1.33-3.62 1.33-7.23M9.85 45.06c0-3.61 2-3.61 2-7.22s-2-3.61-2-7.22 2-3.61 2-7.22-2-3.62-2-7.23 2-3.62 2-7.23" />
    </g>
  </SvgIcon>
);

SkinEvenSkinIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
