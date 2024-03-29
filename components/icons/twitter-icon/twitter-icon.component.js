import React from "react";
import PropTypes from "prop-types";

import { SvgIcon } from "../svg-icon";
import { colors } from "../../../theme/colors";

export const TwitterIcon = ({ height = 24, color = colors.black }) => (
  <SvgIcon originalHeight={25} originalWidth={22} height={height}>
    <path
      d="M19.644 5.709c.8475-.5346 1.4979-1.3824 1.803-2.3922-.7935.4963-1.6704.8552-2.606 1.0494C18.0944 3.5247 17.0273 3 15.8463 3c-2.2656 0-4.1016 1.9368-4.1016 4.3252 0 .3391.034.6695.1045.9851-3.4091-.1807-6.432-1.9009-8.457-4.5195-.3533.641-.5552 1.3836-.5552 2.1756 0 1.4999.7243 2.824 1.8254 3.6012-.6726-.0222-1.3054-.219-1.8594-.5408v.0533c0 2.0964 1.4134 3.845 3.2928 4.241-.3451.1015-.7067.1522-1.0824.1522-.264 0-.5224-.026-.7712-.0767.5212 1.7177 2.0367 2.9701 3.8328 3.0035-1.4052 1.1609-3.1743 1.8514-5.096 1.8514-.331 0-.6585-.0186-.979-.0594 1.816 1.2264 3.9725 1.943 6.2898 1.943 7.5483 0 11.6735-6.5912 11.6735-12.3074 0-.1881-.0024-.375-.0106-.5594.8018-.6101 1.499-1.3724 2.0473-2.24a7.8668 7.8668 0 0 1-2.356.6807z"
      fill={color}
    />
  </SvgIcon>
);

TwitterIcon.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string
};
