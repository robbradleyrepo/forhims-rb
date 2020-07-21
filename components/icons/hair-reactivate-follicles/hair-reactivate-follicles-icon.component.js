import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const HairReactivateFolliclesIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="2px">
      <circle className="cls-1" cx="22.81" cy="38.05" r="12.5" />
      <circle className="cls-1" cx="35.54" cy="25.32" r="6.25" />
      <circle className="cls-1" cx="22.81" cy="13.4" r="4.7" />
      <circle className="cls-2" cx="43.92" cy="38.05" r="1.56" />
      <circle className="cls-2" cx="35.54" cy="9.17" r="1.56" />
      <circle className="cls-2" cx="10.08" cy="25.32" r="1.56" />
    </g>
  </SvgIcon>
);

HairReactivateFolliclesIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
