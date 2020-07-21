import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexIncreaseSexDriveIcon = ({
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
      <path d="M17.66 25.65a15.16 15.16 0 0 1-.21 2.53 14.17 14.17 0 0 0 .14 2.68 9.4 9.4 0 0 0 2.33 5 10 10 0 0 0 9 2.83 7.28 7.28 0 0 0 5.13-4.21 6.26 6.26 0 0 0 0-4.79c-.67-1.54-2.34-2.87-2.61-4.62-.3-1.95 1.14-4 2.29-5.39a29.48 29.48 0 0 0-5.21 2.74 10.92 10.92 0 0 0-.23-5.46 8.79 8.79 0 0 0-3.14-4.5c.13.08 0 1.29 0 1.43a26.89 26.89 0 0 1-.25 3.48c-.55 3.9-4 6.83-3.83 10.93zM20.93 8.4c-1.14.87-1.32 2.53-1.06 3.94a31.19 31.19 0 0 1 .91 4.2 5.68 5.68 0 0 1-1.53 4.11M31.82 13.47a12.5 12.5 0 0 1 1.61-3.33M27 43.62L9.83 48.34l-.95-3.44 10.93-3M27 39.93l8.37-2.3 8.8-2.41.95 3.43-11.29 3.1" />
      <path d="M8.88 38.65l35.29 9.69.95-3.44-26.49-7.27-8.8-2.41-.95 3.43z" />
    </g>
  </SvgIcon>
);

SexIncreaseSexDriveIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
