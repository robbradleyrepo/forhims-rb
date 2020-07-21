import React from "react";
import { storiesOf } from "@storybook/react";
import { QuestionIcon } from "./question-icon.component";

storiesOf("Assets|Icons", module).addWithJSX("Question", () => {
  return <QuestionIcon />;
});
