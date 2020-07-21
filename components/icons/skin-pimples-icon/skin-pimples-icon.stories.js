import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinPimplesIcon } from "./skin-pimples-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin/Pimples", module).add("Pimples", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinPimplesIcon color={color} height={height} />;
});
