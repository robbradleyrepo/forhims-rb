import React from "react";
import { storiesOf } from "@storybook/react";
import { MinusIcon } from "./minus-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Minus", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <MinusIcon color={color} height={height} />;
});
