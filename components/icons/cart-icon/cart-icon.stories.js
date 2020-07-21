import React from "react";
import { storiesOf } from "@storybook/react";
import { CartIcon } from "./cart-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Cart", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <CartIcon color={color} height={height} />;
});
