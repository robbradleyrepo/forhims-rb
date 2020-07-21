import React from "react";
import { storiesOf } from "@storybook/react";
import { CircleIcon } from "./circle-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Circle", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <CircleIcon color={color} height={height} />;
});
