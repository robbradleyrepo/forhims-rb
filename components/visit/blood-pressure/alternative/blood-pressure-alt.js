/*
  Copied & pasted from the original component so as to adapt this one to the parent manager
  logic.
 */
import styled from "styled-components";
import { QuestionCardEMRFlowAdapter } from "../../questions/question-card/managed/adapter";
import React from "react";
import R from "ramda";
import { Grid } from "../../../layout/grid";
import Example from "../example";
import { QuestionContainer } from "../../questions/question-card/base/question-card-base.styles";
import PropTypes from "prop-types";
import BloodPressure from "../../questions/blood-pressure";

const ExampleCenter = styled.div`
  margin: 0 auto;
`;

/*
  A quick wrapper made more sense than creating a 3rd managed component
  type.
 */
const formDataChanged = parent =>
  function(id) {
    let answer = [id];

    this.setState({ answer });
    // Update answer in container
    this.props.setAnswer({ [this.props.question.id]: answer });
  };

export class BloodPressureQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.answer || []
    };

    this.formDataChanged = formDataChanged(this);
  }

  isRootQuestion() {
    return R.contains(this.props.question.id, this.props.visit.root);
  }

  isActive(answer) {
    return choice => R.contains(choice.id, answer);
  }

  render() {
    return (
      <div id={`BPQ_${this.props.question.id}`}>
        {this.isRootQuestion() ? (
          <React.Fragment>
            <QuestionCardEMRFlowAdapter
              style={{ active: this.isActive(this.state.answer) }}
              inputType="radio"
              baseFormSelectionChangeHandler={this.formDataChanged}
              {...this.props}
            />
            <QuestionContainer container>
              <Grid
                item
                xs={13}
                xsOffset={0}
                sm={7}
                smOffset={1}
                md={16}
                mdOffset={4}
              >
                <ExampleCenter>
                  <Example />
                </ExampleCenter>
              </Grid>
            </QuestionContainer>
          </React.Fragment>
        ) : (
          <QuestionCardEMRFlowAdapter
            style={{ active: this.isActive(this.state.answer) }}
            inputType="radio"
            baseFormSelectionChangeHandler={this.formDataChanged}
            {...this.props}
          />
        )}
      </div>
    );
  }
}

BloodPressureQuestion.displayName = "Blood Pressure Question";

BloodPressure.propTypes = {
  answer: PropTypes.array,
  question: PropTypes.object,
  setAnswer: PropTypes.func,
  step: PropTypes.number,
  visit: PropTypes.object
};
