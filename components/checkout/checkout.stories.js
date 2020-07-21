import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { reduxForm } from "redux-form";

import { withRedux } from "../../utils/storybook";
import { Checkout } from "./checkout.component";
import { Cart } from "./cart";
import { mockProducts, mockLineItems } from "./cart/cart.stories";
import { boolean } from "@storybook/addon-knobs";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  position: relative;
  width: 50vw;
`;

storiesOf("Domains|Checkout", module)
  .addDecorator(withRedux)
  .add("Checkout Layout", () => {
    const StoryContent = () => (
      <PreviewContainer>
        <Checkout
          enabledSteps={["cart"]}
          activeStep={"cart"}
          goToStep={() => {}}
          stepTitle="Cart"
          isVisitStatusPending={boolean("Visit Pending", false)}
        >
          <Cart
            handleCalculateCartTotal={() => null}
            products={mockProducts}
            lineItems={mockLineItems}
          />
        </Checkout>
      </PreviewContainer>
    );
    const Form = reduxForm({
      form: "checkout-layout"
    })(StoryContent);
    return <Form />;
  });
