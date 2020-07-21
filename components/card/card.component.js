import React from "react";
import PropTypes from "prop-types";

import { CardBlock } from "./card.style";

export const Card = ({ children, className, highlighted = false }) => (
  <CardBlock className={className} highlighted={highlighted}>
    {children}
  </CardBlock>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  highlighted: PropTypes.bool
};
