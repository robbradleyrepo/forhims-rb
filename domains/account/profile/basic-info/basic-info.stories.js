import { reduxForm } from "redux-form";
import { BasicInfoComponent } from "./basic-info.component";
import { withRedux } from "../../../../utils/storybook";
import { storiesOf } from "@storybook/react";
import { withProps, compose } from "recompose";
import { action } from "@storybook/addon-actions";
import React from "react";
import styled from "styled-components";
import { CardCollapsible } from "../../../../components/card";
import { AccountTitle, AccountPageContainer } from "../../account.style";
import { Block } from "../../../../components/block";
import { withEditingState } from "../profile.utils";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
`;

storiesOf("Domains|Account/Profile/Basic Info", module)
  .addDecorator(withRedux)
  .addWithJSX("Just the component", () => {
    const WithForm = compose(
      withEditingState,
      withProps({
        handleSubmit: action("submit"),
        userProfile: {
          dob: "1989-01-27",
          firstName: "Nima",
          lastName: "Test!",
          fullName: "Nima Test!",
          phone: "416-111-1111",
          email: "test+222@domain.com"
        }
      }),
      reduxForm({ form: "basic-info" })
    )(BasicInfoComponent);
    return <WithForm />;
  })
  .addWithJSX("Inside collapsable card", () => {
    const WithForm = compose(
      withEditingState,
      withProps({
        handleSubmit: action("submit"),
        userProfile: {
          firstName: "Nima",
          lastName: "Test!",
          fullName: "Nima Test!",
          phone: "416-111-1111",
          email: "test+222@domain.com",
          dob: "1989-01-27"
        }
      }),
      reduxForm({ form: "basic-info" })
    )(BasicInfoComponent);
    return (
      <AccountPageContainer>
        <Block width={"20rem"}>
          <CardCollapsible title={<AccountTitle>Profile</AccountTitle>}>
            <WithForm />
          </CardCollapsible>
        </Block>
      </AccountPageContainer>
    );
  });
