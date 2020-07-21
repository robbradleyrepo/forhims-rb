import React from "react";
import PropTypes from "prop-types";
import { CartLineItem } from "../cart-line-item";
import { CartLineItemListStyle } from "./cart-line-item-list.style";
import { CartLineItemProps } from "../cart/cart.types";

export const CartLineItemList = ({ items, withLastItemBottomBorder }) => {
  return (
    <CartLineItemListStyle>
      {items.map(item => (
        <CartLineItem
          key={item.label}
          label={item.label}
          value={item.value}
          isHighlighted={item.isHighlighted}
          isSeparated={item.isSeparated}
          withLastItemBottomBorder={withLastItemBottomBorder}
        />
      ))}
    </CartLineItemListStyle>
  );
};

CartLineItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(CartLineItemProps)).isRequired,
  withLastItemBottomBorder: PropTypes.bool
};
