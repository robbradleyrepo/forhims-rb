import PropTypes from "prop-types";
import React from "react";
import { QuestionCardTextArea } from "../../base/textarea/question-card-textarea.component";

export class QuestionCardEMRFlowTextAreaAdapter extends React.Component {
  textareaReference = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || ""
    };

    this.textAreaChangeHandler = (...args) =>
      this.props.textAreaChangeHandler.call(this, ...args);

    this.enterKeyHandler = (...args) =>
      this.props.enterKeyHandler.call(this, ...args);

    this.blurHandler = (...args) => this.props.blurHandler.call(this, ...args);
  }

  render() {
    const { me, question, inputType, step, tuples, visit } = this.props;

    return (
      <QuestionCardTextArea
        textAreaChangeHandler={this.textAreaChangeHandler}
        enterKeyHandler={this.enterKeyHandler}
        blurHandler={this.blurHandler}
        atStep={step + 1}
        totalSteps={tuples.length}
        currentAnswer={this.state.answer}
        textareaReference={this.textareaReference}
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

QuestionCardEMRFlowTextAreaAdapter.defaultProps = {};

QuestionCardEMRFlowTextAreaAdapter.propTypes = {
  answer: PropTypes.string,
  blurHandler: PropTypes.func,
  enterKeyHandler: PropTypes.func,
  index: PropTypes.number,
  me: PropTypes.object,
  question: PropTypes.object,
  removeAnswer: PropTypes.func,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  textAreaChangeHandler: PropTypes.func,
  tuples: PropTypes.array
};
