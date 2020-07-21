import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinSmoothLinesIcon } from "./skin-smooth-lines-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Smooth Lines", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinSmoothLinesIcon color={color} height={height} />;
});
