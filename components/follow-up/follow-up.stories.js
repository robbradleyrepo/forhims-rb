import React from "react";
import { storiesOf } from "@storybook/react";
import { FollowUp } from "./follow-up.component";

storiesOf("Components|EMR", module).addWithJSX("Follow Up", () => {
  return <FollowUp />;
});
