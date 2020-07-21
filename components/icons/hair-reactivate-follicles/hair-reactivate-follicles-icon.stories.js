import React from "react";
import { storiesOf } from "@storybook/react";
import { HairReactivateFolliclesIcon } from "./hair-reactivate-follicles-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair", module).add("Reactivate Follicles", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);

  return <HairReactivateFolliclesIcon color={color} height={height} />;
});
