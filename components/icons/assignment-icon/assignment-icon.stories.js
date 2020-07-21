import React from "react";
import { storiesOf } from "@storybook/react";

import { AssignmentIcon } from "./assignment-icon";

storiesOf("Assets|Icons", module).addWithJSX("Assignment", () => {
  return <AssignmentIcon />;
});
