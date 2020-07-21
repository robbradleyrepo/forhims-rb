import React from "react";
import { storiesOf } from "@storybook/react";
import { HairRegrowingIcon } from "./hair-regrowing-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Regrowing", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HairRegrowingIcon color={color} height={height} />;
});
