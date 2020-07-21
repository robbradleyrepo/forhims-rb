import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinAcneScarsIcon } from "./skin-acne-scars-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin", module).add("Acne Scars", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinAcneScarsIcon color={color} height={height} />;
});
