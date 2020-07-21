import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinUnevenTextureIcon } from "./skin-uneven-texture-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Uneven Texture", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinUnevenTextureIcon color={color} height={height} />;
});
