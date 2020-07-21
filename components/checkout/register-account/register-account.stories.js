import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { reduxForm } from "redux-form";

import { withRedux } from "../../../utils/storybook";

import { Checkout } from "../checkout.component";
import { RegisterAccount } from "./register-account.component";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  position: relative;
  width: 50vw;
`;

const FormInLayout = () => (
  <PreviewContainer>
    <Checkout enabledSteps={[]}>
      <RegisterAccount handleSubmit={() => {}} />
    </Checkout>
  </PreviewContainer>
);

storiesOf("Domains|Checkout/Authentication/Register Account", module)
  .addDecorator(withRedux)
  .addWithJSX("In checkout flow", () => {
    const Form = reduxForm({ form: "register-account" })(FormInLayout);
    return <Form />;
  })
  .addWithJSX("Page component", () => {
    const Form = reduxForm({ form: "register-account-component" })(
      RegisterAccount
    );
    return <Form handleSubmit={() => {}} />;
  });
