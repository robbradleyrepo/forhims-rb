import React from "react";
import { storiesOf } from "@storybook/react";
import { SexFibHsddTabletsIcon } from "./sex-fib-hsdd-tablets-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Fib + HSDD Tablets", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexFibHsddTabletsIcon color={color} height={height} />;
});
