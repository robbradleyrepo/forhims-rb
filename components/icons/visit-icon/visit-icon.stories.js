import React from "react";
import { storiesOf } from "@storybook/react";
import { VisitIcon } from "./visit-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Visit", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <VisitIcon color={color} height={height} />;
});
