import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairExcessSheddingIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2px"
    >
      <ellipse
        className="cls-1"
        cx="34.01"
        cy="18.81"
        rx="16.55"
        ry="10.95"
        transform="rotate(-45 34.012 18.812)"
      />
      <path
        className="cls-1"
        d="M22.1 35.53a7.48 7.48 0 0 1-4.75-4.66M25.25 32.38L11.42 46.22a2.27 2.27 0 0 1-3.19 0L6.62 44.6a2.25 2.25 0 0 1 0-3.19l13.83-13.84M41.69 26.54A18.06 18.06 0 0 1 40.5 40M26.05 10.68c.18-.84-1.15-1.32-1.82-.78a2.93 2.93 0 0 0-.74 2.38c.13 6 2.76 11.51 4.38 17.23a13.54 13.54 0 0 1 .69 4.67 5.56 5.56 0 0 1-2 4.12M36.55 5.08c.18-.84-1.15-1.32-1.82-.78A2.93 2.93 0 0 0 34 6.68c.21 9.83 8.17 19 3.28 28.85M45.41 7.64c-2.06 4-1.53 8.79-.55 13.17s2.37 8.8 1.86 13.26M29.72 8.26c-2.8 4.08.22 10.13 1.49 14.21a48.07 48.07 0 0 1 .34 27.46"
      />
    </g>
  </SvgIcon>
);

HairExcessSheddingIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
