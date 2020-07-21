import React from "react";
import { storiesOf } from "@storybook/react";
import { SquiggleIcon } from "./squiggle-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Squiggle", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SquiggleIcon color={color} height={height} />;
});
