import React from "react";
import { storiesOf } from "@storybook/react";
import { SexOnlyMarketIcon } from "./sex-only-market-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Only Prescription On Market", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexOnlyMarketIcon color={color} height={height} />;
});
