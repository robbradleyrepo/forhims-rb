import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";

import { HimsLogo } from "./hims-logo.component";

storiesOf("Assets|Logos", module).add("Hims Logo", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HimsLogo color={color} height={height} />;
});
