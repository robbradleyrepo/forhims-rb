import React from "react";
import { storiesOf } from "@storybook/react";
import { ProfileIcon } from "./profile-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons", module).add("Profile", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <ProfileIcon color={color} height={height} />;
});
