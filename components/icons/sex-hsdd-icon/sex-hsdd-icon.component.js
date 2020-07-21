import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexHsddIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill={color} strokeWidth="2px">
      <path d="M17.43 21.91v10.14h-1.9v-4.2h-4.06v4.2H9.6V21.91h1.87v4.25h4.06v-4.25zM20.23 29.09A1.59 1.59 0 0 0 22 30.51c1 0 1.63-.52 1.67-1.22s-.41-1.11-1.39-1.38L21 27.59c-2.21-.65-2.56-1.93-2.56-2.83a3.13 3.13 0 0 1 3.41-3 3.07 3.07 0 0 1 3.37 3.06h-1.88a1.33 1.33 0 0 0-1.51-1.32c-.84 0-1.52.47-1.52 1.19 0 .32.12.87 1.21 1.16l1.25.37c2.27.62 2.85 1.9 2.77 3.09-.09 1.82-1.71 2.87-3.56 2.87-2.17 0-3.64-1.39-3.64-3.12zM26.39 32.05V21.91h4c2.89 0 4.57 2.21 4.57 5.09s-1.68 5-4.57 5zm1.88-1.73h2.08c1.79 0 2.69-1.5 2.69-3.32s-.9-3.37-2.69-3.37h-2.08zM35.86 32.05V21.91h4c2.9 0 4.58 2.21 4.58 5.09s-1.68 5-4.58 5zm1.89-1.73h2.07c1.79 0 2.69-1.5 2.69-3.32s-.9-3.37-2.69-3.37h-2.07z" />
    </g>
    <circle
      cx="27"
      cy="27"
      r="21"
      fill="none"
      stroke={color}
      strokeWidth="2px"
    />
  </SvgIcon>
);

SexHsddIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
