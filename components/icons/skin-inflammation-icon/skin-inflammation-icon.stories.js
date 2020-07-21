import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinInflammationIcon } from "./skin-inflammation-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin", module).add("Inflammation", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinInflammationIcon color={color} height={height} />;
});
