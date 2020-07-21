"use strict";

import PropTypes from "prop-types";
import React from "react";
import {
  GenderContainer,
  BottomButtonContainer,
  BottomButton
} from "./gender.style";
import { Button } from "../../button";
import { Radio } from "../../radio";

const FEMALE = "female";
const MALE = "male";

/**
 * @module Gender
 */

class Gender extends React.Component {
  constructor(props) {
    super(props);
    const male = (
      <div>
        <img
          src="https://res.cloudinary.com/forhims/image/upload/v1539025457/HimsImages/man-silhouette.png"
          style={{
            width: "2rem",
            height: "2rem",
            border: this.props.gender === MALE ? "1px solid #000" : ""
          }}
        />
        Male
      </div>
    );
    const female = (
      <div>
        <img
          src="https://res.cloudinary.com/forhims/image/upload/v1539025456/HimsImages/woman-silhouette.png"
          style={{
            width: "2rem",
            height: "2rem",
            border: this.props.gender === FEMALE ? "1px solid #000" : ""
          }}
        />
        Female
      </div>
    );
    this.state = {
      options: [{ title: MALE, body: male }, { title: FEMALE, body: female }]
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
    return (
      <GenderContainer>
        <h3>What is your gender?</h3>
        <Radio
          options={this.state.options}
          onChange={gender => {
            this.setState({
              gender
            });
          }}
          radioName="Gender"
        />
        <BottomButtonContainer>
          <BottomButton>
            <Button onClick={this.props.closeEmrForm} label="Close Visit" />
          </BottomButton>
          <BottomButton>
            <Button onClick={this.props.confirmGender} label="Confirm" />
          </BottomButton>
        </BottomButtonContainer>
      </GenderContainer>
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
