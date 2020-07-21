import React from "react";
import { storiesOf } from "@storybook/react";
import { MenuIcon } from "./menu-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Menu", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <MenuIcon color={color} height={height} />;
});
