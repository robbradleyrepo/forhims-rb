import React from "react";
import { storiesOf } from "@storybook/react";
import { SexIncreaseSexDriveIcon } from "./sex-increase-sex-drive-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Sex", module).add("Increase Sex Drive", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SexIncreaseSexDriveIcon color={color} height={height} />;
});
