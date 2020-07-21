import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";

import { HersLogo } from "./hers-logo.component";

storiesOf("Assets|Logos", module).add("Hers Logo", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HersLogo color={color} height={height} />;
});
