import React from "react";
import { storiesOf } from "@storybook/react";
import { ArrowIcon } from "./arrow-icon.component";
import { number, text, select } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Arrow", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  const direction = select(
    "Direction",
    { up: "up", down: "down", left: "left", right: "right" },
    "down"
  );
  return <ArrowIcon color={color} height={height} direction={direction} />;
});
