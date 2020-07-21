import { QuestionCardEMRFlowAdapter } from "./adapter";
import React from "react";

/*
  Copied & pasted from the original component so as to adapt this one to the parent manager
  logic.
 */
function formDataChanged(id) {
  let answer = [id];

  this.setState({ answer });
  // Update answer in container
  this.props.setAnswer({ [this.props.question.id]: answer });
}

export const ManagedRadioQuestion = props => {
  return (
    <QuestionCardEMRFlowAdapter
      inputType="radio"
      baseFormSelectionChangeHandler={formDataChanged}
      {...props}
    />
  );
};

ManagedRadioQuestion.displayName = "Question Card with Radio Buttons";
