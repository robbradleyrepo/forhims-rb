"use strict";

import Header from "./header";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import TextareaAutoResize from "react-textarea-autosize";

/**
 * @module TextArea
 */

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || ""
    };
  }
  onChange({ target: { value: answer } }) {
    this.setState({ answer }, () => {
      if (!this.props.onBlur) {
        this.submitAnswer();
      }
    });
  }
  onBlur() {
    if (this.props.onBlur) {
      this.submitAnswer();
    }
  }
  submitAnswer() {
    let answer = this.state.answer;
    if (R.trim(answer)) {
      this.props.setAnswer({
        [this.props.question.id]: answer
      });
    } else {
      this.props.removeAnswer([this.props.question.id]);
    }
  }
  onEnterKeyHandler({ key }) {
    if (key === "Enter") {
      this.textarea && this.textarea.blur();
      this.submitAnswer();
    }
  }
  render() {
    let { me, question } = this.props;
    let animationCls = this.props.step === 0 ? "" : "animated fadeInUp";

    return (
      <div
        id={question.id}
        className={`question-detail ${animationCls}`}
        style={{ marginBottom: "2rem" }}
      >
        <div style={{ textAlign: "left" }}>
          <Header {...this.props} />
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="text-muted text-u-c m-b-xs">
            <small>
              {me.firstName} {me.lastName}
            </small>
          </div>
          <TextareaAutoResize
            autoFocus={this.props.autoFocus}
            className="visit__textarea"
            inputRef={tag => (this.textarea = tag)}
            minRows={3}
            maxRows={6}
            onKeyPress={this.onEnterKeyHandler.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onChange={this.onChange.bind(this)}
            defaultValue={this.state.answer}
          />
        </div>
      </div>
    );
  }
}

TextArea.defaultProps = {};

TextArea.propTypes = {
  answer: PropTypes.string,
  autoFocus: PropTypes.bool,
  index: PropTypes.number,
  me: PropTypes.object,
  onBlur: PropTypes.bool,
  question: PropTypes.object,
  removeAnswer: PropTypes.func,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  tuples: PropTypes.array
};

TextArea.displayName = "TextArea";

export default TextArea;
