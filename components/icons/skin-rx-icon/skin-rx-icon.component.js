import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinRxIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <path
      d="M31.33 33.28l4.42-6.11h-3.52l-2.59 3.7L26 25.82c3.66-.4 5.14-3.23 5.14-6.14 0-3.17-1.79-6.32-6.06-6.32h-7.72v19.88h3.09v-7.3h2.13l5.35 7.34-5.34 7.36h3.47l3.57-4.93 3.52 4.93h3.49zM20.45 23.14v-6.95H25c2.14 0 3 1.82 3 3.49s-.89 3.46-3.11 3.46z"
      fill={color}
    />
    <circle cx="27" cy="27" r="21" fill="none" stroke={color} strokeWidth="2" />
  </SvgIcon>
);

SkinRxIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
