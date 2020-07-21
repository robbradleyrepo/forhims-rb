import React from "react";
import { storiesOf } from "@storybook/react";
import { SexHsddIcon } from "./sex-hsdd-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("HSDD", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexHsddIcon color={color} height={height} />;
});
