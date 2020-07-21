import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { PrimaryNavigationList } from "./primary-navigation-list.component";
import { PrimaryNavigationItem } from "../primary-navigation-item";

storiesOf("Components|Navigation/Primary Navigation", module).add(
  "List",
  () => {
    const isVisible = boolean("is visible?", true);
    const slowStart = boolean("slow start");
    return isVisible ? (
      <PrimaryNavigationList key="list" slowStart={slowStart}>
        <PrimaryNavigationItem to={"/hair"} target="_blank">
          {"Hair"}
        </PrimaryNavigationItem>
        <PrimaryNavigationItem to={"/skin"} target="_blank">
          {"Skin"}
        </PrimaryNavigationItem>
        <PrimaryNavigationItem to={"/sex"} target="_blank">
          {"Sex"}
        </PrimaryNavigationItem>
      </PrimaryNavigationList>
    ) : null;
  }
);
