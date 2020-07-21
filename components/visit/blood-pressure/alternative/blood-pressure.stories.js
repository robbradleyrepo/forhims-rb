import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  questionBloodPressureFollowup,
  questionBloodPressureMain,
  visitBloodPressure
} from "../../questions/question-card/base/stories/fixture";
import { BloodPressureQuestion } from "./blood-pressure-alt";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf(
  "Components|EMR/Questionnaire/Blood Pressure Alternative WIP",
  module
).add("Root", () => {
  return (
    <Container>
      <BloodPressureQuestion
        isActive={action("bloodpressure-isactive")}
        me={{
          name: "Some User",
          firstName: "CurrentUsersFirstName",
          lastName: "AndLastName"
        }}
        answer={[]}
        index={null} // todo : what is this actually used for ?
        step={0}
        tuples={[1, 2, 3, 4, 5, 6, 7]}
        provider={{ name: "Dr. Health Professional" }}
        removeAnswer={action("bloodpressure-managed-remove")}
        setAnswer={action("bloodpressure-managed-set")}
        {...{
          question: questionBloodPressureMain,
          visit: visitBloodPressure
        }}
      />
      <BloodPressureQuestion
        isActive={action("bloodpressure-isactive")}
        me={{
          name: "Some User",
          firstName: "CurrentUsersFirstName",
          lastName: "AndLastName"
        }}
        answer={[]}
        index={null} // todo : what is this actually used for ?
        step={1}
        tuples={[1, 2, 3, 4, 5, 6, 7]}
        provider={{ name: "Dr. Health Professional" }}
        removeAnswer={action("bloodpressure-managed-remove")}
        setAnswer={action("bloodpressure-managed-set")}
        {...{
          question: questionBloodPressureFollowup,
          visit: visitBloodPressure
        }}
      />
    </Container>
  );
});
