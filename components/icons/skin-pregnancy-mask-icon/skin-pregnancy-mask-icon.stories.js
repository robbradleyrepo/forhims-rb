import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinPregnancyMaskIcon } from "./skin-pregnancy-mask-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Pregnancy Mask", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinPregnancyMaskIcon color={color} height={height} />;
});
