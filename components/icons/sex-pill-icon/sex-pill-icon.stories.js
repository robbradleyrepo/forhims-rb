import React from "react";
import { storiesOf } from "@storybook/react";
import { SexPillIcon } from "./sex-pill-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("1 Pill Icon", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexPillIcon color={color} height={height} />;
});
