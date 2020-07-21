import { reduxForm } from "redux-form";
import { PasswordChange } from "./password-change.component";
import { withRedux } from "../../../../utils/storybook";
import { storiesOf } from "@storybook/react";
import { withProps, compose } from "recompose";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import React from "react";
import styled from "styled-components";
import { FORM_NAME } from "./password-change.constants";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
`;

storiesOf("Domains|Account/Profile/Password Change Form", module)
  .addDecorator(withRedux)
  .addWithJSX("Form", () => {
    const Form = compose(
      withProps({
        onSubmit: action("submit"),
        submitButtonLabel: text("Submit button label", "RESET PASSWORD")
      }),
      reduxForm({ form: FORM_NAME })
    )(PasswordChange);

    return <Form />;
  })
  .addWithJSX("Submitting", () => {
    const Form = compose(
      reduxForm({ form: FORM_NAME }),
      withProps({
        onSubmit: action("submit"),
        submitting: true,
        submitButtonLabel: text("Submit button label", "RESET PASSWORD")
      })
    )(PasswordChange);

    return <Form />;
  })
  .addWithJSX("Success", () => {
    const Form = compose(
      reduxForm({ form: FORM_NAME }),
      withProps({
        onSubmit: action("submit"),
        submitButtonLabel: text("Submit button label", "RESET PASSWORD"),
        submitSucceeded: true
      })
    )(PasswordChange);

    return <Form />;
  })
  .addWithJSX("Error Submitting", () => {
    const errorMessage = text(
      "error message",
      "I am a submission error stored in redux"
    );

    const Form = compose(
      reduxForm({ form: FORM_NAME }),
      withProps({
        onSubmit: action("submit"),
        submitButtonLabel: text("Submit button label", "RESET PASSWORD"),
        error: errorMessage,
        submitFailed: true
      })
    )(PasswordChange);

    return <Form />;
  });
