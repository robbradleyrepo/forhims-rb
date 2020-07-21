import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinRxIcon } from "./skin-rx-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("RX", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinRxIcon color={color} height={height} />;
});
