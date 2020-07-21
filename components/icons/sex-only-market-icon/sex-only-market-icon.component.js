import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SexOnlyMarketIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M41.21 29.06V45.7a2.16 2.16 0 0 1-2.16 2.15H10.78a2.15 2.15 0 0 1-2.16-2.15V10.06a2.16 2.16 0 0 1 2.16-2.16h28.27a2.16 2.16 0 0 1 2.16 2.16V21.8M18.1 13.23v5.78m2.89-2.89H15.2m19.61 8.23H15.2m19.42 8.23H15.2m11.88 8.23H15.2"
    />
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M35.76 38.78l-3.2 2.1.1-3.82 13.3-23.73 3.09 1.73-13.29 23.72zm8.55-22.21l2.7 1.51"
    />
  </SvgIcon>
);

SexOnlyMarketIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
