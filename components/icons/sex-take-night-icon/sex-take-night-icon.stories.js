import React from "react";
import { storiesOf } from "@storybook/react";
import { SexTakeNightIcon } from "./sex-take-night-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Only Take At Night", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexTakeNightIcon color={color} height={height} />;
});
