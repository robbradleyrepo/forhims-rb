import React from "react";
import { storiesOf } from "@storybook/react";
import { SexMadeByWomenIcon } from "./sex-made-by-women-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Made by Women", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexMadeByWomenIcon color={color} height={height} />;
});
