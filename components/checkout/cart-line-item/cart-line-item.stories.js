import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import { CartLineItem } from "./cart-line-item.component";

storiesOf("Domains|Checkout/Cart", module).addWithJSX("Cart Line Item", () => {
  const label = text("Label", "Subtotal");
  const value = text("Value", "$10.35");
  const isHighlighted = boolean("Is Highlighted");
  const isSeparated = boolean("Is Separated");
  return (
    <CartLineItem
      label={label}
      value={value}
      isHighlighted={isHighlighted}
      isSeparated={isSeparated}
    />
  );
});
