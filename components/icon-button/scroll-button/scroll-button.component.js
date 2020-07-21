import React from "react";
import PropTypes from "prop-types";

import { ArrowIcon } from "../../icons/arrow-icon";
import { IconButton } from "../icon-button.component";
import { colors } from "../../../theme/colors";
import { scrollLinkToElementById } from "../../../utils/scroll";

export const ScrollButton = ({ onClick, color = colors.black, to, label }) => (
  <a href={`#${to}`} onClick={scrollLinkToElementById(to)} aria-label={label}>
    <IconButton
      icon={<ArrowIcon direction="down" color={color} height={18} />}
      borderColor={color}
      hoverBorderColor={color}
      onClick={onClick}
      label={label}
    />
  </a>
);

ScrollButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string
};
