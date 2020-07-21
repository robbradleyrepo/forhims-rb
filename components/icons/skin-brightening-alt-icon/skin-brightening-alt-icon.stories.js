import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinBrighteningAltIcon } from "./skin-brightening-alt-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin/Brightening", module).add(
  "Brightening ALT",
  () => {
    const color = text("Color", "#000");
    const height = number("Height", 32);
    return <SkinBrighteningAltIcon color={color} height={height} />;
  }
);
