import {
  BubbleQuestion,
  BubbleWrapperQuestion,
  QuestionContentWrapper,
  QuestionHeader,
  QuestionNumber,
  QuestionStepIndicator
} from "../question-card-base.styles";
import { BodySmall } from "../../../../../fonts/body-small";
import React from "react";
import { questionBubbleEndAnchor } from "../question-card-base.component";
import PropTypes from "prop-types";

export const BubbleSectionQuestion = ({ atStep, totalSteps, question }) => {
  return (
    <BubbleWrapperQuestion
      item
      xs={13}
      xsOffset={0}
      sm={14}
      smOffset={1}
      md={6}
      mdOffset={4}
    >
      <div>
        <div>
          <QuestionNumber>
            <BodySmall>{atStep}</BodySmall>
          </QuestionNumber>
          <QuestionContentWrapper>
            <QuestionHeader>
              <QuestionStepIndicator>
                {atStep} of {totalSteps}
              </QuestionStepIndicator>
            </QuestionHeader>
            <BubbleQuestion item xs={12}>
              <BodySmall>
                {atStep}. {question.title}
              </BodySmall>
              <span className={questionBubbleEndAnchor} />
            </BubbleQuestion>
          </QuestionContentWrapper>
        </div>
      </div>
    </BubbleWrapperQuestion>
  );
};

BubbleSectionQuestion.propTypes = {
  question: PropTypes.object,
  atStep: PropTypes.number,
  totalSteps: PropTypes.number,
  providerName: PropTypes.string
};
