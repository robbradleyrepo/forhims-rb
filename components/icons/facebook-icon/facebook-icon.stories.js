import React from "react";
import { storiesOf } from "@storybook/react";
import { FacebookIcon } from "./facebook-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons", module).add("Facebook", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <FacebookIcon color={color} height={height} />;
});
