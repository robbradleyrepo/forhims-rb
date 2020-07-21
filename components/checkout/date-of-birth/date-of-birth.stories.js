import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { reduxForm } from "redux-form";

import { withRedux } from "../../../utils/storybook";

import { Checkout } from "../checkout.component";
import { DateOfBirth } from "./date-of-birth.component";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  position: relative;
  width: 50vw;
  min-width: 320px;
`;

storiesOf("Domains|Checkout/Date of Birth", module)
  .addDecorator(withRedux)
  .addWithJSX("Verify Date of Birth", () => {
    const Form = reduxForm({ form: "add-payment" })(DateOfBirth);
    return (
      <PreviewContainer>
        <Checkout
          enabledSteps={["payment"]}
          activeStep={"payment"}
          goToStep={() => {}}
          stepTitle="Payment"
        >
          <Form handleDateOfBirthSubmit={() => null} />
        </Checkout>
      </PreviewContainer>
    );
  });
