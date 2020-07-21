import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import { CartEmpty } from "./cart-empty.component";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;

storiesOf("Domains|Checkout/Cart", module).add("Cart Empty", () => {
  const isInContainer = boolean("Show in container");
  return (
    <Preview>
      <PreviewContainer constrained={isInContainer}>
        <CartEmpty />
      </PreviewContainer>
    </Preview>
  );
});
