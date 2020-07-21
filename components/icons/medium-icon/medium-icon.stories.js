import React from "react";
import { storiesOf } from "@storybook/react";
import { MediumIcon } from "./medium-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Medium", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <MediumIcon color={color} height={height} />;
});
