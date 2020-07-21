import React from "react";
import { storiesOf } from "@storybook/react";
import { ScrollButton } from "./scroll-button.component";

import { action } from "@storybook/addon-actions";

storiesOf("Components|Buttons/Icon Button", module).add("Scroll", () => {
  return <ScrollButton onClick={action("scroll-button-onClick")} />;
});
