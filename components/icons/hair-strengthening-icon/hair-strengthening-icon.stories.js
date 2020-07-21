import React from "react";
import { storiesOf } from "@storybook/react";
import { HairStrengtheningIcon } from "./hair-strengthening-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Strengthening", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HairStrengtheningIcon color={color} height={height} />;
});
