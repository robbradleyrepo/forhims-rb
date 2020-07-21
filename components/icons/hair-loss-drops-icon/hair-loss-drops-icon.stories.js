import React from "react";
import { storiesOf } from "@storybook/react";
import { HairLossDropsIcon } from "./hair-loss-drops-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Hair", module).add("Loss Drops", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <HairLossDropsIcon color={color} height={height} />;
});
