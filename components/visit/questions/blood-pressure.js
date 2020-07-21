import BloodPressureQuestion from "../blood-pressure/question";
import BloodPressureRootQuestion from "../blood-pressure/root";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";

const getChoices = props =>
  R.compose(
    R.values,
    R.pick(props.question.choices),
    R.path(["visit", "choices"])
  )(props);

/**
 * @module BloodPressure
 */

class BloodPressure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || []
    };

    this.choices = getChoices(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(choice) {
    let answer = [choice.id];

    this.setState({ answer });

    // Update answer in container
    this.props.setAnswer({ [this.props.question.id]: answer });
  }

  isRootQuestion() {
    return R.contains(this.props.question.id, this.props.visit.root);
  }

  isActive(answer) {
    return choice => R.contains(choice.id, answer);
  }

  render() {
    const animationCls = this.props.step === 0 ? "" : "animated fadeInUp";

    return (
      <div
        id={this.props.question.id}
        className={`question-detail ${animationCls}`}
      >
        {this.isRootQuestion() ? (
          <BloodPressureRootQuestion
            {...this.props}
            choices={this.choices}
            isActive={this.isActive(this.state.answer)}
            onClick={this.onClick}
          />
        ) : (
          <BloodPressureQuestion
            {...this.props}
            choices={this.choices}
            isActive={this.isActive(this.state.answer)}
            onClick={this.onClick}
            type={this.props.question.bpType}
          />
        )}
      </div>
    );
  }
}

BloodPressure.propTypes = {
  answer: PropTypes.array,
  question: PropTypes.object,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  visit: PropTypes.object
};

BloodPressure.displayName = "BloodPressure";

export default BloodPressure;
