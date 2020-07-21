import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import styled from "styled-components";

import { CartProduct } from "./cart-product.component";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;

storiesOf("Domains|Checkout/Cart", module).add("Cart Product", () => {
  const title = text("Product Title", "Sweatshirt");
  const description = text("Product description", "Dark grey L");
  const price = text("Product Price", "$54.00");
  const productId = text("Product Image (Product ID)", "DWraq9FV");
  const showImage = boolean("Show Image", true);

  const isInContainer = boolean("Show in container");
  const isSubscription = boolean("Auto-renewable");
  const errorMessage = text("Error message", "");
  return (
    <Preview>
      <PreviewContainer constrained={isInContainer}>
        <CartProduct
          id={productId}
          productId={productId}
          title={title}
          description={description}
          price={price}
          quantity={1}
          isSubscription={isSubscription}
          showImage={showImage}
          errorMessage={errorMessage}
        />
      </PreviewContainer>
    </Preview>
  );
});
