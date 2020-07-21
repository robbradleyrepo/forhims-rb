import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinDarkSpotsIcon } from "./skin-dark-spots-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin", module).add("Dark Spots", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinDarkSpotsIcon color={color} height={height} />;
});
