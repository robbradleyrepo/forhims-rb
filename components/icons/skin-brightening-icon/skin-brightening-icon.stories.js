import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinBrighteningIcon } from "./skin-brightening-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin/Brightening", module).add("Brightening", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinBrighteningIcon color={color} height={height} />;
});
