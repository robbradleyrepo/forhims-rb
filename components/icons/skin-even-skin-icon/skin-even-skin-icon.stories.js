import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinEvenSkinIcon } from "./skin-even-skin-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Even Skin", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinEvenSkinIcon color={color} height={height} />;
});
