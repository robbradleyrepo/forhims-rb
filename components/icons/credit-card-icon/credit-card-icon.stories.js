import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditCardIcon } from "./credit-card-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Credit card", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <CreditCardIcon color={color} height={height} />;
});
