import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinUnevenTextureIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeWidth="2px"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32.48 46L20.59 22.06c-1.91-3.84-5.16-3.84-7.08 0L1.62 46zM28.42 36.28l3.95-7.77c1.28-2.56 3.44-2.56 4.72 0L45.81 46H32.48" />
      <path d="M21.59 23.08l6.05-12.16c1.91-3.85 5.16-3.85 7.07 0L52.38 46H41" />
    </g>
  </SvgIcon>
);

SkinUnevenTextureIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
