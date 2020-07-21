import React from "react";
import PropTypes from "prop-types";
import { CartLineItemStyle } from "./cart-line-item.style";

export const CartLineItem = ({
  isHighlighted,
  isSeparated,
  label,
  value,
  withLastItemBottomBorder
}) => (
  <CartLineItemStyle
    isHighlighted={isHighlighted}
    isSeparated={isSeparated}
    withLastItemBottomBorder={withLastItemBottomBorder}
  >
    <span>{label}</span>
    <span>{value}</span>
  </CartLineItemStyle>
);

CartLineItem.propTypes = {
  isHighlighted: PropTypes.bool,
  isSeparated: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  withLastItemBottomBorder: PropTypes.bool
};
