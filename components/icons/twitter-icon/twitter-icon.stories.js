import React from "react";
import { storiesOf } from "@storybook/react";
import { TwitterIcon } from "./twitter-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Twitter", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <TwitterIcon color={color} height={height} />;
});
