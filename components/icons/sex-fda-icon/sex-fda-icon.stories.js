import React from "react";
import { storiesOf } from "@storybook/react";
import { SexFdaIcon } from "./sex-fda-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Sex", module).add("FDA", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <SexFdaIcon color={color} height={height} />;
});
