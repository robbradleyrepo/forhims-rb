import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Head from "./head";

storiesOf("Components|EMR/Photo/Instructions", module).add("Head", () => {
  const direction = text("direction", "right");
  return <Head direction={direction} />;
});
