import React from "react";
import R from "ramda";
import { QuestionCardEMRFlowTextAreaAdapter } from "./adapter/question-card-adapter-textarea.component";

/*
  Copied & pasted from the original component so as to adapt this one to the parent manager
  logic.
 */
function submitAnswer() {
  let answer = this.state.answer;
  if (R.trim(answer)) {
    this.props.setAnswer({
      [this.props.question.id]: answer
    });
  } else {
    this.props.removeAnswer([this.props.question.id]);
  }
}

function enterKeyHandler({ key }) {
  if (key === "Enter") {
    const currentDOMObject = R.path(["textareaReference", "current"])(this);
    currentDOMObject && currentDOMObject.blur();
  }
}

const answerLengthAccessor = R.path(["answer", "length"]);

function textAreaChanged({ target: { value: answer }, ...rest }) {
  const previousState = this.state;

  this.setState({ answer }, () => {
    const lengthPrev = answerLengthAccessor(previousState);
    const lengthCurrent = answerLengthAccessor(this.state);

    /*
      todo / note

      Next button state depends on parent component's answer array.
      Since we don't want to touch the existing VisitContainer & similar
      emr flow management code ; modifying textarea to display the button
      isn't feasible.

      However, since parents' props are refreshed upon each setanswer,
      each keystroke will cause excessive amounts of rerender because
      parent props cannot be diffed. This is something that needs
      to be fixed at VisitContainer level.

      For now, we'll prevent propagating the message upwards unless the button's
      visual state should truly change. Final answer will also always be
      submitted on blur anyways.

      For future reference : Filling a textarea, answering a few of the
      followups and going back & erasing a textarea, and then rewriting an
      answer wouldn't trigger the next question button with original hims prod
      code either ; this optimization doesn't break it.
    */
    if (
      (lengthPrev === 0 && lengthCurrent > 0) ||
      (lengthPrev > 0 && lengthCurrent === 0)
    ) {
      submitAnswer.call(this);
    }
  });
}

export const ManagedTextArea = props => {
  return (
    <QuestionCardEMRFlowTextAreaAdapter
      textAreaChangeHandler={textAreaChanged}
      enterKeyHandler={enterKeyHandler}
      blurHandler={submitAnswer}
      {...props}
    />
  );
};

ManagedTextArea.displayName = "Question Card with Text Area";
