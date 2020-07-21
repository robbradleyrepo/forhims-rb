import React from "react";
import { storiesOf } from "@storybook/react";
import { HairVitaminsIcon } from "./hair-vitamins-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Vitamins", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HairVitaminsIcon color={color} height={height} />;
});
