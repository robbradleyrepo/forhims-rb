import React from "react";
import { storiesOf } from "@storybook/react";
import { HairExcessSheddingIcon } from "./hair-excess-shedding-icon.component";
import { number, text } from "@storybook/addon-knobs/react";

storiesOf("Assets|Icons/Hair/Excess Shedding", module).add(
  "Excess Shedding",
  () => {
    const color = text("Color", "#000");
    const height = number("Height", 32);

    return <HairExcessSheddingIcon color={color} height={height} />;
  }
);
