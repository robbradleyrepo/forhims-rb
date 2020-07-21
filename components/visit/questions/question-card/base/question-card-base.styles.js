import styled, { css } from "styled-components";
import { BodySmall } from "../../../../fonts/body-small";
import { ListReset } from "../../../../elements";
import { Grid } from "../../../../layout/grid";
import {
  createMaxWidthMediaQuery,
  createMinWidthMediaQuery
} from "../../../../../utils/breakpoints";
import { CheckmarkSpan } from "../../../../checkbox-field/checkbox-field.style";

const px24 = "1.625rem";
const px40 = "2.5rem";

export const QuestionContainer = styled(Grid)`
  ${createMaxWidthMediaQuery("medium")} {
    margin-bottom: ${px24};
  }

  margin-bottom: ${px40};
`;

const centerAlignmentBoilerplate = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const BubbleWrapperQuestion = styled(Grid)`
  ${createMaxWidthMediaQuery("medium")} {
    margin-bottom: ${px24};
  }

  > div {
    ${centerAlignmentBoilerplate};
    align-items: flex-start;
  }

  > div > div {
    ${centerAlignmentBoilerplate};
  }
`;

export const DoctorName = styled(BodySmall)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const QuestionStepIndicator = styled(BodySmall)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const QuestionNumber = styled.div`
  ${createMaxWidthMediaQuery("medium")} {
    display: none;
  }

  border-radius: 50%;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.brand.sex};
  width: ${px40};
  height: ${px40};
  margin-right: 1.25rem;
  flex-shrink: 0;
  flex-grow: 0;

  ${BodySmall} {
    text-align: center;
    vertical-align: middle;
    line-height: ${px40};
    color: ${({ theme }) => theme.colors.text.onPrimary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const QuestionContentWrapper = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
`;

export const QuestionHeader = styled.section`
  display: flex;

  ${createMinWidthMediaQuery("medium")} {
    justify-content: flex-start;
  }

  justify-content: space-between;

  ${DoctorName} {
    margin-right: 0.5rem;
  }
`;

export const BubbleQuestion = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.canvas.primary};
  border-radius: 0 12px 12px;
  padding: 1rem;

  p {
    padding-left: 1rem;
    padding-right: 1rem;
    ${createMinWidthMediaQuery("small")} {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const BubbleWrapperAnswerAdjust = styled(Grid)`
  display: flex;
  align-items: flex-start;
`;

export const BubbleWrapperAnswer = styled.section`
  width: 100%;

  form,
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }
`;

export const UserName = styled(BodySmall)`
  text-align: right;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const AnswerCheckbox = css`
  opacity: 0;
  position: fixed;
  top: -100vh;
  bottom: -100vw;
`;

export const RadioSpan = styled(CheckmarkSpan)`
  :before {
    border-radius: 50%;
    transition: border-color 0.5s, background-color 0.5s, border-width 0.5s;
  }

  :after {
    border-color: ${({ theme }) => theme.colors.canvas.white};
    border-radius: 50%;
    width: 12px;
    height: 12px;

    transform: translate(4px, 4px);
    transition: border-color 0.5s, background-color 0.5s;
  }
`;

export const AnswerLabel = styled.label`
  z-index: 1;

  cursor: pointer;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.spacing.three};
  margin: 0;

  ${BodySmall} {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  && ${CheckmarkSpan}, && ${RadioSpan} {
    flex-shrink: 0;
    flex-grow: 0;
    margin-left: 0.375rem;
    padding-right: 0;

    :before {
      border: solid 1px ${({ theme }) => `${theme.colors.button.primary}66`};
      width: 20px;
      height: 20px;
    }

    background-color: ${({ theme }) => theme.colors.canvas.white};
  }

  && ${CheckmarkSpan} {
    :before {
      border: solid 1px ${({ theme }) => `${theme.colors.button.primary}66`};
      margin-right: 0;
    }

    :after {
      transform: translate(7px, 2.5px) rotate(45deg);
    }
  }
`;

export const AnswerListContainer = styled.li`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.canvas.primaryLight};
`;

export const Choices = styled(ListReset)`
  border: none;

  input[type="checkbox"],
  input[type="radio"] {
    ${AnswerCheckbox};
  }

  input[type="checkbox"]
    + ${AnswerLabel}:hover,
    input[type="checkbox"]:checked
    + ${AnswerLabel},
    input[type="radio"]
    + ${AnswerLabel}:hover,
    input[type="radio"]:checked
    + ${AnswerLabel} {
    ${BodySmall} {
      color: ${({ theme }) => theme.colors.brand.sex};
    }
  }

  input[type="checkbox"]:checked
    + ${AnswerLabel},
    input[type="radio"]:checked
    + ${AnswerLabel} {
    ${CheckmarkSpan}:before, ${RadioSpan}:before {
      border-color: ${({ theme }) => theme.colors.brand.sex};
    }

    ${CheckmarkSpan}:before {
      background-color: ${({ theme }) => theme.colors.brand.sex};
    }

    ${RadioSpan}:before {
      border-width: 2px;
    }

    ${CheckmarkSpan}:after {
      border-color: #fff;
    }

    ${RadioSpan}:after {
      background-color: ${({ theme }) => theme.colors.brand.sex};
      border-color: ${({ theme }) => theme.colors.brand.sex};
    }
  }
`;
