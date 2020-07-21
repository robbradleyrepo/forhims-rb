import {
  AnswerLabel,
  AnswerListContainer,
  RadioSpan
} from "../question-card-base.styles";
import { BodySmall } from "../../../../../fonts/body-small";
import { CheckmarkSpan } from "../../../../../checkbox-field/checkbox-field.style";
import React from "react";

export const produceSingleSelectableAnswer = (
  inputType,
  notifyChangeOn,
  choice
) => {
  // Note : choice.id is number|string.
  const idPrefix = `${choice.id}`;
  const content = choice.label;
  const isSelected = choice.isSelected;
  const isExclusive = choice.exclusive;

  return (
    <AnswerListContainer key={`${idPrefix}_K`}>
      <input
        type={inputType}
        name={`${idPrefix}_N`}
        id={`${idPrefix}_ID`}
        value={content}
        checked={isSelected}
        onChange={() => notifyChangeOn(choice.id, isExclusive)}
      />
      <AnswerLabel htmlFor={`${idPrefix}_ID`}>
        <BodySmall>{content}</BodySmall>
        {inputType === "checkbox" && <CheckmarkSpan />}
        {inputType === "radio" && <RadioSpan />}
      </AnswerLabel>
    </AnswerListContainer>
  );
};
