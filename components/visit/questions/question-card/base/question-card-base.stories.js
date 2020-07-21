import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { QuestionCardBase } from "./question-card-base.component";
import {
  questionCheckbox,
  questionRadio,
  visitCheckbox,
  visitRadio
} from "./stories/fixture";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Components|EMR/Questionnaire/Checkbox", module).add(
  "Simple, Static",
  () => {
    return (
      <Container>
        <QuestionCardBase
          inputType={"checkbox"}
          atStep={1}
          totalSteps={5}
          me={{ firstName: "CurrentUsersFirstName", lastName: "AndLastName" }}
          providerName={"Dr. Health Professional"}
          selectionChangeHandler={action("checkbox-card-answer-change")}
          locallySelectedAnswerIds={[]}
          {...{ question: questionCheckbox, visit: visitCheckbox }}
        />
      </Container>
    );
  }
);

storiesOf("Components|EMR/Questionnaire/Radiobutton", module).add(
  "Simple, Static",
  () => {
    return (
      <Container>
        <QuestionCardBase
          inputType={"radio"}
          atStep={1}
          totalSteps={5}
          me={{ firstName: "CurrentUsersFirstName", lastName: "AndLastName" }}
          providerName={"Dr. Health Professional"}
          selectionChangeHandler={action("radio-card-answer-change")}
          locallySelectedAnswerIds={[]}
          {...{ question: questionRadio, visit: visitRadio }}
        />
      </Container>
    );
  }
);
