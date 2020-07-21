import React from "react";
import { storiesOf } from "@storybook/react";
import { ShippingIcon } from "./shipping-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Shipping", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <ShippingIcon color={color} height={height} />;
});
