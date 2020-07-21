import React from "react";
import PropTypes from "prop-types";
import {
  ActiveStep,
  CompletedStep,
  NextStep
} from "./photo-progress-indicator.style";
import { CheckIcon } from "../../../../icons/check-icon";
import { colors } from "../../../../../theme/colors";

export const PhotoProgressIndicator = ({ isCompleted, isActiveStep, step }) => {
  if (isCompleted) {
    return (
      <CompletedStep>
        <CheckIcon height={30} color={colors.white} />
      </CompletedStep>
    );
  }

  if (isActiveStep) {
    return <ActiveStep>{step}</ActiveStep>;
  }

  return <NextStep>{step}</NextStep>;
};

PhotoProgressIndicator.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  isActiveStep: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired
};
