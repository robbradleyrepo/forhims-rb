import { contains, filter, append } from "ramda";
import { QuestionCardEMRFlowAdapter } from "./adapter";
import React from "react";

/*
  Copied & pasted from the original component so as to adapt this one to the parent manager
  logic.
 */
function formDataChanged(id, exclusive) {
  let result;
  let { answer: set } = this.state;
  // Already selected? Remove
  if (contains(id, set)) {
    result = filter(x => x !== id, set);
  }
  // Add to collection
  else if (exclusive) {
    result = [id];
  }
  // An exclusive choice in the answer set? Remove it!
  else {
    result = append(
      id,
      filter(x => !contains(x, this.exclusiveChoiceIds), set)
    );
  }

  this.setState({ answer: result });
  // Update answer in container
  if (result.length) {
    this.props.setAnswer({ [this.props.question.id]: result });
  } else {
    this.props.removeAnswer([this.props.question.id]);
  }
}

export const ManagedCheckboxQuestion = props => {
  return (
    <QuestionCardEMRFlowAdapter
      inputType="checkbox"
      baseFormSelectionChangeHandler={formDataChanged}
      {...props}
    />
  );
};

ManagedCheckboxQuestion.displayName = "Question Card with Checkboxes";
