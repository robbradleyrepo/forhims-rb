import React from "react";
import { storiesOf } from "@storybook/react";
import { SexLowLibidoIcon } from "./sex-low-libido-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Low Libido", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexLowLibidoIcon color={color} height={height} />;
});
