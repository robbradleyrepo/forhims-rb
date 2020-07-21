import React from "react";
import { storiesOf } from "@storybook/react";
import { InstagramIcon } from "./instagram-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Instagram", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <InstagramIcon color={color} height={height} />;
});
