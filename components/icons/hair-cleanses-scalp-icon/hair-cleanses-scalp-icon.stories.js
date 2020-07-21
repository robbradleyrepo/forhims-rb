import React from "react";
import { storiesOf } from "@storybook/react";
import { HairCleansesScalpIcon } from "./hair-cleanses-scalp-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Hair", module).add("Cleanses Scalp", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <HairCleansesScalpIcon color={color} height={height} />;
});
