import {
  BubbleWrapperAnswer,
  BubbleWrapperAnswerAdjust,
  Choices
} from "../question-card-base.styles";
import React from "react";
import PropTypes from "prop-types";

export const BubbleSectionAnswer = ({
  me,
  availableChoices,
  ...wrapperProps
}) => {
  return (
    <BubbleWrapperAnswerAdjust {...wrapperProps}>
      <BubbleWrapperAnswer>
        <form>
          <fieldset>
            <Choices>{availableChoices}</Choices>
          </fieldset>
        </form>
      </BubbleWrapperAnswer>
    </BubbleWrapperAnswerAdjust>
  );
};

BubbleSectionAnswer.propTypes = {
  me: PropTypes.object,
  availableChoices: PropTypes.array
};
