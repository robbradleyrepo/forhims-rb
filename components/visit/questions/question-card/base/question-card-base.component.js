import React from "react";
import PropTypes from "prop-types";
import {
  map,
  compose,
  values,
  pick,
  path,
  find,
  equals,
  isNil,
  not,
  curry
} from "ramda";

import { QuestionContainer } from "./question-card-base.styles";
import { produceSingleSelectableAnswer } from "./subcomponents/produceSingleSelectableAnswer";
import { BubbleSectionAnswer } from "./subcomponents/sectionAnswer";
import { BubbleSectionQuestion } from "./subcomponents/sectionQuestion";

export const questionBubbleEndAnchor = "questionEnd";

const getChoices = props =>
  compose(
    values,
    pick(props.question.choices),
    path(["visit", "choices"])
  )(props);

export const acceptedInputTypes = PropTypes.oneOf(["radio", "checkbox"]);

export const QuestionCardBase = props => {
  const {
    me,
    question,
    inputType,
    atStep,
    totalSteps,
    providerName,
    selectionChangeHandler,
    locallySelectedAnswerIds
  } = props;

  const questionId = `QC_${question.id}`;
  const choices = getChoices(props);

  const choicesWithCheckedFlag = map(choice => {
    const isSelected = compose(
      not,
      isNil,
      find(equals(choice.id))
    )(locallySelectedAnswerIds);

    return {
      isSelected,
      ...choice
    };
  })(choices);

  const renderFunctionByInputType = curry(produceSingleSelectableAnswer)(
    inputType,
    selectionChangeHandler
  );

  const availableChoices = map(singleChoice =>
    renderFunctionByInputType(singleChoice)
  )(choicesWithCheckedFlag);

  return (
    <QuestionContainer container={true} id={questionId}>
      <BubbleSectionQuestion
        {...{
          atStep,
          providerName,
          totalSteps,
          question
        }}
      />
      <BubbleSectionAnswer
        me={me}
        availableChoices={availableChoices}
        item
        xs={13}
        xsOffset={0}
        sm={14}
        smOffset={1}
        md={8}
        mdOffset={2}
      />
    </QuestionContainer>
  );
};

QuestionCardBase.defaultProps = {
  inputType: "checkbox",
  selectionChangeHandler: () => {},
  locallySelectedAnswerIds: []
};

QuestionCardBase.propTypes = {
  inputType: acceptedInputTypes,
  me: PropTypes.object,
  question: PropTypes.object,
  atStep: PropTypes.number,
  totalSteps: PropTypes.number,
  providerName: PropTypes.string,
  visit: PropTypes.object,
  selectionChangeHandler: PropTypes.func,
  locallySelectedAnswerIds: PropTypes.array
};
