import React from "react";
import { storiesOf } from "@storybook/react";
import { HairExcessSheddingAltIcon } from "./hair-excess-shedding-alt-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Hair/Excess Shedding", module).add(
  "Excess Shedding ALT",
  () => {
    const color = text("Color", "#000");
    const height = number("Height", 32);
    return <HairExcessSheddingAltIcon color={color} height={height} />;
  }
);
