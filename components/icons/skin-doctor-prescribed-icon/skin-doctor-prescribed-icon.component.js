import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinDoctorPrescribedIcon = ({
  height = 24,
  color = colors.black
}) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g fill="none" stroke={color} strokeWidth="2px">
      <path d="M41.2 12.51v7.57a9.16 9.16 0 1 1-18.32 0v-7.57M32 29.72v8a9.29 9.29 0 0 1-9.16 9.37 9.29 9.29 0 0 1-9.16-9.37M22.83 12.31a2.71 2.71 0 1 0-2.71-2.71 2.71 2.71 0 0 0 2.71 2.71zM41.52 12.31a2.71 2.71 0 1 0-2.71-2.71 2.71 2.71 0 0 0 2.71 2.71z" />
      <path d="M13.63 37.27a3.87 3.87 0 1 0-3.86-3.86 3.86 3.86 0 0 0 3.86 3.86z" />
    </g>
  </SvgIcon>
);

SkinDoctorPrescribedIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
