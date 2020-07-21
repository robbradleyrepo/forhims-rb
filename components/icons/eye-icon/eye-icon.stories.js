import React from "react";
import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";

import { EyeIcon } from "./eye-icon.component";

storiesOf("Assets|Icons", module).add("Eye", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <EyeIcon color={color} height={height} />;
});
