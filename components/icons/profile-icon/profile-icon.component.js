import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const ProfileIcon = ({ color = colors.black, height = 32 }) => (
  <SvgIcon originalHeight={32} originalWidth={32} height={height}>
    <g>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h32v32H0z" />
        <path
          d="M15.709 23.692c-4.064 0-7.401-3.296-7.401-7.384H9.86c0 3.197 2.61 5.835 5.848 5.835s5.815-2.638 5.815-5.835h1.553c0 4.055-3.304 7.384-7.368 7.384z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M16 28C9.392 28 4 22.608 4 16S9.392 4 16 4s12 5.392 12 12-5.392 12-12 12zm0-22.455C10.247 5.545 5.545 10.247 5.545 16S10.247 26.455 16 26.455 26.455 21.753 26.455 16 21.753 5.545 16 5.545z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          fill={color}
          fillRule="nonzero"
          d="M17.385 18.77l-4.77-.51 1.693-8.106 1.415.318-1.354 6.453 3.17.35z"
        />
      </g>
    </g>
  </SvgIcon>
);

ProfileIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
};
