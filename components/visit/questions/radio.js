"use strict";

import Header from "./header";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";

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

/**
 * @module Radio
 */

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || []
    };

    this.choices = getChoices(props);
    this.exclusiveChoiceIds = getExclusiveChoiceIds(this.choices);
  }

  onClick(choice) {
    let answer = [choice.id];

    this.setState({ answer });
    // Update answer in container
    this.props.setAnswer({ [this.props.question.id]: answer });
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
          {R.map(choice => {
            let style = R.contains(choice.id, this.state.answer)
              ? { fontWeight: "bold", color: "red" }
              : {};
            return (
              <div
                key={choice.id}
                className="visit__choice-container"
                onClick={() => this.onClick(choice)}
              >
                <div style={style}>{choice.label}</div>
              </div>
            );
          }, this.choices)}
        </div>
      </div>
    );
  }
}

Radio.defaultProps = {};

Radio.propTypes = {
  answer: PropTypes.array,
  index: PropTypes.number,
  me: PropTypes.object,
  question: PropTypes.object,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  tuples: PropTypes.array
};

Radio.displayName = "Radio";

export default Radio;
