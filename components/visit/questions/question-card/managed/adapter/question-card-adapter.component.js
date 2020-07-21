import PropTypes from "prop-types";
import React from "react";
import R from "ramda";
import { acceptedInputTypes, QuestionCardBase } from "../../base";

const getChoices = props =>
  R.compose(
    R.values,
    R.pick(props.question.choices),
    R.path(["visit", "choices"])
  )(props);

const getExclusiveChoiceIds = R.map(
  R.map(R.prop("id")),
  R.filter(x => x.exclusive)
);

export class QuestionCardEMRFlowAdapter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || []
    };

    this.choices = getChoices(props);
    this.exclusiveChoiceIds = getExclusiveChoiceIds(this.choices);

    this.selectionChangeHandler = (...args) =>
      this.props.baseFormSelectionChangeHandler.call(this, ...args);
  }

  render() {
    const { me, question, inputType, step, tuples, visit } = this.props;

    return (
      <QuestionCardBase
        selectionChangeHandler={this.selectionChangeHandler}
        atStep={step + 1}
        totalSteps={tuples.length}
        locallySelectedAnswerIds={this.state.answer}
        {...{
          me,
          question,
          visit,
          inputType
        }}
      />
    );
  }
}

QuestionCardEMRFlowAdapter.defaultProps = {};

QuestionCardEMRFlowAdapter.propTypes = {
  answer: PropTypes.array,
  baseFormSelectionChangeHandler: PropTypes.func,
  index: PropTypes.number,
  inputType: acceptedInputTypes,
  me: PropTypes.object,
  question: PropTypes.object,
  removeAnswer: PropTypes.func,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  tuples: PropTypes.array
};
