import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { PrimaryNavigationItemWithAlert } from "./primary-navigation-item-with-alert.component";

storiesOf("Components|Navigation/Primary Navigation", module).add(
  "Item with Alert",
  () => {
    const exampleText = text("Text", "Required Actions");
    const to = text("To", "http://www.example.com");

    return (
      <PrimaryNavigationItemWithAlert to={to}>
        {exampleText}
      </PrimaryNavigationItemWithAlert>
    );
  }
);
