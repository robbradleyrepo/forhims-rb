import React from "react";
import { storiesOf } from "@storybook/react";
import { CloseIcon } from "./close-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Close", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <CloseIcon color={color} height={height} />;
});
