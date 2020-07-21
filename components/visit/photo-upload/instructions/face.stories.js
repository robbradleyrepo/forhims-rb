import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Face from "./face";

storiesOf("Components|EMR/Photo/Instructions", module).add("Face", () => {
  const direction = text("direction", "right");
  return <Face direction={direction} />;
});
