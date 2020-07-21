import React from "react";
import { storiesOf } from "@storybook/react";
import { RenewIcon } from "./renew-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Renew", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <RenewIcon color={color} height={height} />;
});
