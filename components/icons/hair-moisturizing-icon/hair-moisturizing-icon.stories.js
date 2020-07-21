import React from "react";
import { storiesOf } from "@storybook/react";
import { HairMoisturizingIcon } from "./hair-moisturizing-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Moisturizing", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <HairMoisturizingIcon color={color} height={height} />;
});
