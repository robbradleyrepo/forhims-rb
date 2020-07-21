import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinSunSpotsIcon } from "./skin-sun-spots-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Skin", module).add("Sun Spots", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SkinSunSpotsIcon color={color} height={height} />;
});
