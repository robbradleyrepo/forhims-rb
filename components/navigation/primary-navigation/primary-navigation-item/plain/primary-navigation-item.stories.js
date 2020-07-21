import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { PrimaryNavigationItem } from "./index";

storiesOf("Components|Navigation/Primary Navigation", module)
  // using addWithJSX breaks the story - I think the router intercepts the error caused by the jsx addon and throws again
  .add("Item", () => {
    const exampleText = text("Text", "Hair");
    const to = text("To", "http://www.example.com");

    return (
      <PrimaryNavigationItem to={to} target="_blank">
        {exampleText}
      </PrimaryNavigationItem>
    );
  });
