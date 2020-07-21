import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexBirthControlIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color}>
      <rect
        x="15.3"
        y="4.61"
        width="23.41"
        height="44.78"
        rx="2.63"
        ry="2.63"
        transform="rotate(45 26.995 27.002)"
        stroke={color}
      />
      <g fill={color} stroke="none">
        <circle cx="10.85" cy="34.25" r="1.96" />
        <circle cx="19.75" cy="43.15" r="1.96" />
        <circle cx="20.21" cy="24.89" r="1.96" />
        <circle cx="29.11" cy="33.79" r="1.96" />
        <circle cx="15.53" cy="29.57" r="1.96" />
        <circle cx="24.43" cy="38.47" r="1.96" />
        <circle cx="24.89" cy="20.21" r="1.96" />
        <circle cx="33.79" cy="29.11" r="1.96" />
        <circle cx="29.57" cy="15.53" r="1.96" />
        <circle cx="38.47" cy="24.43" r="1.96" />
        <circle cx="34.25" cy="10.85" r="1.96" />
        <circle cx="43.15" cy="19.75" r="1.96" />
        <circle cx="38.7" cy="15.3" r="1.96" />
      </g>
      <path d="M34.23 19.77L14.51 39.49" />
    </g>
  </SvgIcon>
);

SexBirthControlIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
