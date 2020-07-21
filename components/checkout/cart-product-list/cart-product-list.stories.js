import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";
import styled from "styled-components";

import { CartProductList } from "./cart-product-list.component";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;

storiesOf("Domains|Checkout/Cart", module).add("Cart Product List", () => {
  const title = text("Product Title", "Sweatshirt");
  const description = text("Product description", "Dark grey L");
  const price = text("Product Price", "$54.00");
  const productId = text("Product Image (Product ID)", "DWraq9FV");

  const product = {
    title,
    description,
    price,
    productId,
    quantity: 1
  };

  const createRandomProductId = () => Math.floor(Math.random() * 10000);
  const addRandomId = product => ({ ...product, id: createRandomProductId() });

  const products = [
    addRandomId(product),
    addRandomId(product),
    addRandomId(product)
  ];

  const isInContainer = boolean("Show in container");
  return (
    <Preview>
      <PreviewContainer constrained={isInContainer}>
        <CartProductList products={products} />
      </PreviewContainer>
    </Preview>
  );
});
