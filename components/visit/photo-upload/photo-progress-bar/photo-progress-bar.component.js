import React from "react";
import PropTypes from "prop-types";
import { ArrowIcon } from "../../../icons/arrow-icon";
import {
  PhotoProgressBarContainer,
  SeparatorContainer
} from "./photo-progress-bar.style";
import { colors } from "../../../../theme/colors";
import { PhotoProgressIndicator } from "./photo-progress-indicator";

const Separator = () => (
  <SeparatorContainer>
    <ArrowIcon direction="right" height={22} color={colors.text.secondary} />
  </SeparatorContainer>
);

export const PhotoProgressBar = ({ activeStep, steps }) => (
  <PhotoProgressBarContainer>
    {steps.map((name, index, items) => [
      <PhotoProgressIndicator
        key={`${name}-${index}`}
        isCompleted={index < activeStep}
        isActiveStep={index === activeStep}
        step={index + 1}
      />,
      index < items.length - 1 ? <Separator key={`${name}-separator`} /> : null
    ])}
  </PhotoProgressBarContainer>
);

PhotoProgressBar.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired
};

PhotoProgressBar.displayName = "PhotoProgressBar";
