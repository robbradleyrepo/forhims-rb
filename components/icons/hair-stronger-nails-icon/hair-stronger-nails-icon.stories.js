import React from "react";
import { storiesOf } from "@storybook/react";
import { HairStrongerNailsIcon } from "./hair-stronger-nails-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Hair", module).add("Stronger Nails", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <HairStrongerNailsIcon color={color} height={height} />;
});
