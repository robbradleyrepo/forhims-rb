import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const SkinPimplesIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={54} originalWidth={54} height={height}>
    <g
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
    >
      <path d="M50.19 49.74L43 39.17l-5.65-8.34c-1.37-2-2.26-4.7-5.05-5.07a3.48 3.48 0 0 0-1.59.25c-1.43.52-2.57 1.88-4.1 2.15a4.67 4.67 0 0 1-2.8-.73c-1.22-.62-3.06-2.1-4.36-.82a9.68 9.68 0 0 0-1 1.54L16 31.68l-5.46 8.06-6.77 10zM31.15 11.54a4.89 4.89 0 0 0 .52-2.2 5.08 5.08 0 1 0-7.48 4.46 4.41 4.41 0 1 0 6 5h.11a3.68 3.68 0 0 0 .82-7.26zM12.08 11.83l3.31 1.93-.3 4.09 2.29 2.46M35.69 20.63l2.5-2.91 3.4-.42.33-3.69 2.75-3.35M8.84 24.2l2.55.47 2.03-.94 2.13.94M38.17 24.2l3.78-1.18" />
    </g>
  </SvgIcon>
);

SkinPimplesIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
