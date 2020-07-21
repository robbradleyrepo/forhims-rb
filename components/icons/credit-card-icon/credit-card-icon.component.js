import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const CreditCardIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={21} originalWidth={32} height={height}>
    <path
      fill={color}
      d="M26.58 21H2.42A2.4 2.4 0 0 1 0 18.62V4.38A2.4 2.4 0 0 1 2.42 2h24.16A2.4 2.4 0 0 1 29 4.38v14.25A2.4 2.4 0 0 1 26.58 21zM10 7.83c0-.46-.35-.83-.78-.83H3.78c-.43 0-.78.37-.78.83v3.34c0 .46.35.83.78.83h5.44c.43 0 .78-.37.78-.83V7.83zM25 17c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1h-3c-.65 0-1 .3-1 1s.35 1 1 1h3zm-6 0c.65 0 1-.3 1-1s-.35-1-1-1H4c-.65 0-1 .3-1 1s.35 1 1 1h3z"
      fillRule="evenodd"
    />
  </SvgIcon>
);

CreditCardIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
