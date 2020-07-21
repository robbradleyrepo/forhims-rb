import React from "react";
import { storiesOf } from "@storybook/react";
import { SkinDoctorPrescribedIcon } from "./skin-doctor-prescribed-icon.component";
import { number, text } from "@storybook/addon-knobs";

storiesOf("Assets|Icons/Skin", module).add("Doctor Prescribed", () => {
  const color = text("Color", "#000");
  const height = number("Height", 32);
  return <SkinDoctorPrescribedIcon color={color} height={height} />;
});
