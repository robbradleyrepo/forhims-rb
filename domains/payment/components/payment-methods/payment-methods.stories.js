import React from "react";
import { compose } from "recompose";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { reduxForm } from "redux-form";
import { boolean } from "@storybook/addon-knobs";
import { Checkout } from "../../../../components/checkout/checkout.component";

import { withRedux } from "../../../../utils/storybook";
import { PaymentMethods } from "./payment-methods.component";

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  position: relative;
  width: 50vw;
`;

storiesOf("Domains|Checkout/Payment", module)
  .addDecorator(withRedux)
  .addWithJSX("Payment Methods", () => {
    const isInCheckout = boolean("Is in checkout", false);
    const InLayout = () => (
      <PreviewContainer>
        <Checkout
          enabledSteps={["payment"]}
          activeStep={"payment"}
          goToStep={() => {}}
          stepTitle="Payment"
        >
          <PaymentMethods
            cardName="Visa"
            cardNumberDisplay="•••• •••• •••• 2222"
            handleAddPaymentMethod={action("add payment click")}
            isInCheckout={isInCheckout}
            nextStep={action("checkout next step click")}
          />
        </Checkout>
      </PreviewContainer>
    );

    const Form = compose(reduxForm({ form: "select-payment" }))(InLayout);
    return <Form />;
  });
