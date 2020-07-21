"use strict";

import PropTypes from "prop-types";
import React from "react";
import { BubbleSectionAnswer } from "../questions/question-card/base/subcomponents/sectionAnswer";
import { QuestionContainer } from "../questions/question-card/base/question-card-base.styles";
import { produceSingleSelectableAnswer } from "../questions/question-card/base/subcomponents/produceSingleSelectableAnswer";
import { map } from "ramda";
import { Headline3 } from "../../fonts/h3";
import {
  GenderSelectionButtons,
  GenderSelectionPromptWrapper
} from "./gender-alt.style";
import { Button } from "../../button";
import { Grid } from "../../layout/grid";

const FEMALE = "female";
const MALE = "male";

/**
 * @module Gender
 */

class Gender extends React.Component {
  selectionDataToYield = {
    visit_gender_selection_female: FEMALE,
    visit_gender_selection_male: MALE
  };

  constructor(props) {
    super(props);

    this.state = {
      gender: null
    };
  }

  componentDidMount() {
    if (!this.props.consented) {
      $GTM.navigateVisit.trigger({
        percentage: 0,
        page: "Gender"
      });
    }
  }

  render() {
    const female = {
      id: "visit_gender_selection_female",
      label: "Female",
      isSelected: this.state.gender === FEMALE,
      isExclusive: true
    };

    const male = {
      id: "visit_gender_selection_male",
      label: "Male",
      isSelected: this.state.gender === MALE,
      isExclusive: true
    };

    const availableChoices = map(option => {
      const genderSelectionHandler = id => {
        this.setState({
          gender: this.selectionDataToYield[id]
        });
      };

      return produceSingleSelectableAnswer(
        "radio",
        genderSelectionHandler,
        option
      );
    })([male, female]);

    return (
      <GenderSelectionPromptWrapper>
        <Grid
          item
          xs={13}
          xsOffset={0}
          sm={12}
          smOffset={2}
          md={16}
          mdOffset={4}
        >
          <Headline3>What is your gender?</Headline3>
        </Grid>
        <QuestionContainer container={true}>
          <BubbleSectionAnswer
            {...{ availableChoices }}
            item
            xs={13}
            xsOffset={0}
            sm={12}
            smOffset={2}
            md={16}
            mdOffset={4}
            lg={14}
            lgOffset={5}
          />
        </QuestionContainer>
        <GenderSelectionButtons container={true}>
          <Grid
            item
            xs={13}
            xsOffset={0}
            sm={12}
            smOffset={2}
            md={16}
            mdOffset={4}
            lg={14}
            lgOffset={5}
          >
            <Button
              disabled={this.state.gender !== FEMALE}
              onClick={this.props.closeEmrForm}
              label="Close Visit"
            />
            <Button
              disabled={this.state.gender !== MALE}
              onClick={() => this.props.confirmGender(this.state.gender)}
              label="Confirm"
            />
          </Grid>
        </GenderSelectionButtons>
      </GenderSelectionPromptWrapper>
    );
  }
}

Gender.defaultProps = {};

Gender.propTypes = {
  clearSubmitErrors: PropTypes.func,
  closeEmrForm: PropTypes.func,
  confirmGender: PropTypes.func,
  consented: PropTypes.bool,
  error: PropTypes.bool,
  gender: PropTypes.string,
  setGender: PropTypes.func
};

Gender.displayName = "Gender";

export default Gender;
