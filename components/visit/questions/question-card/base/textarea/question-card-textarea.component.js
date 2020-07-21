import React from "react";
import PropTypes from "prop-types";

import {
  BubbleWrapperQuestion,
  BubbleWrapperAnswer,
  QuestionHeader,
  QuestionStepIndicator,
  BubbleQuestion,
  QuestionContainer,
  BubbleWrapperAnswerAdjust,
  QuestionNumber,
  QuestionContentWrapper
} from "../question-card-base.styles";
import { Choice, TextAnswer } from "./question-card-textarea.styles";
import { BodySmall } from "../../../../../fonts/body-small";
import { questionBubbleEndAnchor } from "../question-card-base.component";
import { pipe, defaultTo, prop } from "ramda";

export const textareaEntry = "answerTextArea";

function handlerWithResize(targetHandler) {
  return event => {
    console.log(event);

    return targetHandler(event);
  };
}

const BP_QUESTION =
  "You need to know your blood pressure (BP) within the last 6 months to receive treatment. It is an important factor in deciding whether it is safe for you to use ED medication. It is essential that you are accurate and honest about your BP. Do not proceed if you do not know your BP.";

export const QuestionCardTextArea = props => {
  const {
    question,
    atStep,
    totalSteps,
    textAreaChangeHandler,
    enterKeyHandler,
    blurHandler
  } = props;

  const questionId = `QC_${question.id}`;

  const textAreaChangeHandlerBound = textAreaChangeHandler.bind(this);
  const enterKeyHandlerBound = enterKeyHandler.bind(this);
  const blurHandlerBound = blurHandler.bind(this);
  const textAreaPlaceholder = pipe(
    prop("placeholder"),
    defaultTo("Tell us more.")
  )(question);

  return (
    <QuestionContainer container={true} id={questionId}>
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
                  {atStep}.{" "}
                  {/You need to know your blood pressure/.test(question.title)
                    ? BP_QUESTION
                    : question.title}
                </BodySmall>
                <span className={questionBubbleEndAnchor} />
              </BubbleQuestion>
            </QuestionContentWrapper>
          </div>
        </div>
      </BubbleWrapperQuestion>
      <BubbleWrapperAnswerAdjust
        item
        xs={13}
        xsOffset={0}
        sm={14}
        smOffset={1}
        md={8}
        mdOffset={2}
      >
        <BubbleWrapperAnswer>
          <form className={textareaEntry}>
            <fieldset>
              <Choice>
                <BodySmall>
                  <TextAnswer
                    ref={props.textareaReference}
                    id={`${question.id}_TA_ID`}
                    onBlur={blurHandlerBound}
                    onKeyPress={enterKeyHandlerBound}
                    onChange={handlerWithResize(textAreaChangeHandlerBound)}
                    placeholder={textAreaPlaceholder}
                    value={props.currentAnswer}
                    style={{
                      height: `${props.textareaReference &&
                        props.textareaReference.current &&
                        props.textareaReference.current.scrollHeight}px`
                    }}
                  />
                </BodySmall>
              </Choice>
            </fieldset>
          </form>
        </BubbleWrapperAnswer>
      </BubbleWrapperAnswerAdjust>
    </QuestionContainer>
  );
};

QuestionCardTextArea.defaultProps = {
  textAreaChangeHandler: () => {},
  enterKeyHandler: () => {},
  blurHandler: () => {},
  locallySelectedAnswerIds: []
};

QuestionCardTextArea.propTypes = {
  me: PropTypes.object,
  question: PropTypes.object,
  atStep: PropTypes.number,
  totalSteps: PropTypes.number,
  providerName: PropTypes.string,
  visit: PropTypes.object,
  textAreaChangeHandler: PropTypes.func,
  enterKeyHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  currentAnswer: PropTypes.string,
  textareaReference: PropTypes.object
};
