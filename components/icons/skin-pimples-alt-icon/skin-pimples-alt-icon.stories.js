import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinPimplesAltIcon } from "./skin-pimples-alt-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin/Pimples", module).add("Pimples ALT", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinPimplesAltIcon color={color} height={height} />;
});
