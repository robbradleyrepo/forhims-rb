import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinEnlargedPoresIcon } from "./skin-enlarged-pores-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin", module).add("Enlarged Pores", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinEnlargedPoresIcon color={color} height={height} />;
});
