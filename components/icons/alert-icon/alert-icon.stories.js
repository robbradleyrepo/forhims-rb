import React from "react";
import { storiesOf } from "@storybook/react";
import { AlertIcon } from "./alert-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Alert", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <AlertIcon color={color} height={height} />;
});
