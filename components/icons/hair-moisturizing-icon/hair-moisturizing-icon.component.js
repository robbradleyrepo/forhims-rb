import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairMoisturizingIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2px"
    >
      <path
        className="cls-1"
        d="M35.67 35.84A8.67 8.67 0 0 1 27 44.51M27 5a.51.51 0 0 0-.51.45 30.64 30.64 0 0 1-2.76 9.75 71.11 71.11 0 0 1-4.2 7.29q-2.14 3.23-3.81 6.34a15.35 15.35 0 0 0-1.67 7.4 11.87 11.87 0 0 0 1 4.94A13 13 0 0 0 22 48a12.51 12.51 0 0 0 5 1 12.3 12.3 0 0 0 5-1 13.38 13.38 0 0 0 4.13-2.75 13 13 0 0 0 2.82-4.06 11.87 11.87 0 0 0 1-4.94 15.35 15.35 0 0 0-1.67-7.4q-1.66-3.12-3.81-6.34a71.11 71.11 0 0 1-4.2-7.29 30.64 30.64 0 0 1-2.76-9.75A.51.51 0 0 0 27 5z"
      />
    </g>
  </SvgIcon>
);

HairMoisturizingIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
