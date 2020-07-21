import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { GlobalNavigationItem } from "./global-navigation-item";
import { GlobalNavigationHeader } from "./global-navigation-header";

storiesOf("Components|Navigation/Global Navigation", module)
  .add("Item", () => {
    const exampleText = text("Text", "Hair");
    const to = text("To", "http://www.example.com");

    return <GlobalNavigationItem to={to}> {exampleText} </GlobalNavigationItem>;
  })
  .add("Header", () => {
    return <GlobalNavigationHeader />;
  });
