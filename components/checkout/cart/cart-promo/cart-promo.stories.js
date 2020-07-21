import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { reduxForm } from "redux-form";

import { withRedux } from "../../../../utils/storybook";
import { CartPromo } from "./cart-promo.component";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;

storiesOf("Domains|Checkout/Cart", module)
  .addDecorator(withRedux)
  .add("Cart Promo", () => {
    const isInContainer = boolean("Show in container");
    const StoryContent = () => (
      <Preview>
        <PreviewContainer constrained={isInContainer}>
          <CartPromo handleSubmit={() => null} />
        </PreviewContainer>
      </Preview>
    );
    const Form = reduxForm({
      form: "cart-promo"
    })(StoryContent);
    return <Form />;
  });
