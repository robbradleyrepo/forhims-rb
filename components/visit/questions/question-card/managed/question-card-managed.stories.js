import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  questionCheckbox,
  questionRadio,
  questionTextArea,
  visitCheckbox,
  visitRadio
} from "../base/stories/fixture";

import { ManagedCheckboxQuestion } from "./question-card-managed-checkbox.component";
import { ManagedRadioQuestion } from "./question-card-managed-radio.component";
import { ManagedTextArea } from "./question-card-managed-textarea.component";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

const exampleCheckbox = () => (
  <ManagedCheckboxQuestion
    answer={[]}
    index={null} // todo : what is this actually used for ?
    me={{ firstName: "CurrentUsersFirstName", lastName: "AndLastName" }}
    step={0}
    tuples={[1, 2, 3, 4, 5, 6, 7]}
    provider={{ name: "Dr. Health Professional" }}
    removeAnswer={action("checkbox-card-managed-remove")}
    setAnswer={action("checkbox-card-managed-set")}
    {...{ question: questionCheckbox, visit: visitCheckbox }}
  />
);

storiesOf("Components|EMR/Questionnaire/Checkbox", module).add(
  "Simple, Managed",
  () => {
    return <Container>{exampleCheckbox()}</Container>;
  }
);

const exampleRadiobutton = () => (
  <ManagedRadioQuestion
    answer={[]}
    index={null} // todo : what is this actually used for ?
    me={{ firstName: "CurrentUsersFirstName", lastName: "AndLastName" }}
    step={0}
    tuples={[1, 2, 3, 4, 5, 6, 7]}
    provider={{ name: "Dr. Health Professional" }}
    removeAnswer={action("radio-card-managed-remove")}
    setAnswer={action("radio-card-managed-set")}
    {...{ question: questionRadio, visit: visitRadio }}
  />
);

storiesOf("Components|EMR/Questionnaire/Radiobutton", module).add(
  "Simple, Managed",
  () => {
    return <Container>{exampleRadiobutton()}</Container>;
  }
);

const exampleTextArea = withPlaceholder => (
  <ManagedTextArea
    answer={null}
    me={{ firstName: "CurrentUsersFirstName", lastName: "AndLastName" }}
    step={0}
    tuples={[1, 2, 3, 4, 5, 6, 7]}
    provider={{ name: "Dr. Health Professional" }}
    removeAnswer={action("text-card-managed-remove")}
    setAnswer={action("text-card-managed-set")}
    {...{
      question: {
        ...questionTextArea,
        placeholder: withPlaceholder || questionTextArea.placeholder
      },
      visit: {}
    }}
  />
);

storiesOf("Components|EMR/Questionnaire/Textarea", module).add(
  "Simple, Managed",
  () => {
    return <Container>{exampleTextArea()}</Container>;
  }
);

storiesOf("Components|EMR/Questionnaire/Combined", module).add(
  "Multiple Questions, Stacked atop Each Other",
  () => {
    return (
      <Container>
        {exampleCheckbox()}
        {exampleTextArea()}
        {exampleTextArea("This one has a custom placeholder !")}
        {exampleRadiobutton()}
      </Container>
    );
  }
);
