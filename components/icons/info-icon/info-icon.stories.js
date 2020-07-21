import React from "react";
import { storiesOf } from "@storybook/react";
import { InfoIcon } from "./info-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Info", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <InfoIcon color={color} height={height} />;
});
