import React from "react";
import { storiesOf } from "@storybook/react";
import { WaterDropIcon } from "./water-drop-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Water Drop", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <WaterDropIcon color={color} height={height} />;
});
