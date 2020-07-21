import React from "react";
import { storiesOf } from "@storybook/react";
import { EditIcon } from "./edit-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Edit", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <EditIcon color={color} height={height} />;
});
