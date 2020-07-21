import React from "react";
import { storiesOf } from "@storybook/react";
import { PaymentIcon } from "./payment-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Payment", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <PaymentIcon color={color} height={height} />;
});
