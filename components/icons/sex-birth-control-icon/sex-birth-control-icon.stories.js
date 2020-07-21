import React from "react";
import { storiesOf } from "@storybook/react";
import { SexBirthControlIcon } from "./sex-birth-control-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Birth Control", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexBirthControlIcon color={color} height={height} />;
});
