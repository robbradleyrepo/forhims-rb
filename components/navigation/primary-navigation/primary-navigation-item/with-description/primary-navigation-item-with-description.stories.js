import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { PrimaryNavigationItemWithDescription } from "./primary-navigation-item-with-description.component";

storiesOf("Components|Navigation/Primary Navigation", module).add(
  "Item with description",
  () => {
    const exampleText = text("Text", "Hair");
    const to = text("To", "http://www.example.com");
    const description = text("Description", "(it is good for you)");

    return (
      <PrimaryNavigationItemWithDescription
        description={description}
        target="_blank"
        to={to}
      >
        {exampleText}
      </PrimaryNavigationItemWithDescription>
    );
  }
);
