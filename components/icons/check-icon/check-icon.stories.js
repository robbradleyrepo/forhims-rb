import React from "react";
import { storiesOf } from "@storybook/react";
import { CheckIcon } from "./check-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Check", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <CheckIcon color={color} height={height} />;
});
