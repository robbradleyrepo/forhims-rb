import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const VisitIcon = ({ height = 32, color = colors.black }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <g>
      <g fill="none">
        <path d="M0 0h32v32H0z" />
        <path
          d="M7.5 7.432v18.136h17V7.432h-17zM6 6h20v21H6V6zm5 0v1.432h10V6H11z"
          fill={color}
        />
        <path
          d="M12.5 7.5h7v-2h-2.19l-.393-.9a1 1 0 0 0-1.834 0l-.393.9H12.5v2zM13.708 4a2.5 2.5 0 0 1 4.584 0H21v5H11V4h2.708z"
          fill={color}
        />
        <path
          d="M15.3 18v3.5h1.5V18h3.5v-1.5h-3.5V13h-1.5v3.5h-3.5V18h3.5z"
          fill={color}
        />
      </g>
    </g>
  </SvgIcon>
);

VisitIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
