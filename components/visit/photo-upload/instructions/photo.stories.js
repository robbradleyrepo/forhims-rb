import React from "react";
import { storiesOf } from "@storybook/react";

import Photo from "./photo";

storiesOf("Components|EMR/Photo/Instructions", module).add("Photo", () => {
  return <Photo />;
});
