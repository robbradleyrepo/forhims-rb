import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinHyperpigmentationIcon } from "./skin-hyperpigmentation-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Hyperpigmentation", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinHyperpigmentationIcon color={color} height={height} />;
});
