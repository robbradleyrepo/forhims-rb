import React from "react";
import { storiesOf } from "@storybook/react";
import { HairShampooIcon } from "./hair-shampoo-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Shampoo", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HairShampooIcon color={color} height={height} />;
});
