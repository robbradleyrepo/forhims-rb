import React from "react";
import PropTypes from "prop-types";

import { CardBlock } from "./card-with-border.style";

export const CardWithBorder = ({
  borderColor,
  backgroundColor,
  children,
  ...props
}) => (
  <CardBlock
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    {...props}
  >
    {children}
  </CardBlock>
);

CardWithBorder.propTypes = {
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string
};
