import React from "react";
import { storiesOf } from "@storybook/react";
import { CameraIcon } from "./camera-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Camera", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <CameraIcon color={color} height={height} />;
});
