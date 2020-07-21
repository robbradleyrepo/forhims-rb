import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { pipe } from "ramda";

import { withRedux } from "../../../utils/storybook";
import { Cart } from "./cart.component";
import { Checkout } from "../checkout.component";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
  position: relative;
  width: 50vw;
`;

const title = "Sweatshirt";
const description = "Dark grey L";
const price = "$54.00";
const productId = "DWraq9FV";

const product = {
  title,
  description,
  price,
  productId,
  quantity: 1
};

const createRandomProductId = () => Math.floor(Math.random() * 10000);
const addRandomId = product => ({
  ...product,
  id: createRandomProductId()
});

const addError = product => ({
  ...product,
  errorMessage: "Your age does not qualify for erectile dysfunction treatment."
});

export const mockProducts = [
  addRandomId(product),
  addRandomId(product),
  addRandomId(product)
];

export const mockLineItems = [
  { label: "Order Sub-total*", value: "$34.00" },
  {
    label: "Membership",
    value: "$10.00"
  },
  {
    label: "Medical Fee",
    value: "$5.00"
  },
  {
    label: "Promo Discount",
    value: "$0.00"
  },
  {
    label: "Grand Total",
    value: "$49.00",
    isHighlighted: true
  }
];

storiesOf("Domains|Checkout/Cart", module)
  .addDecorator(withRedux)
  .add("Cart Page", () => {
    const emptyCart = boolean("Empty Cart", false);
    const hasError = boolean("has error", false);
    return (
      <Preview>
        <Cart
          products={emptyCart ? [] : mockProducts}
          lineItems={mockLineItems}
          handleCalculateCartTotal={() => {}}
          handleNextStep={() => {}}
          hasError={hasError}
        />
      </Preview>
    );
  })
  .add("Cart Page with error", () => {
    const mockProductsWithError = [
      ...mockProducts,
      ...[
        pipe(
          addRandomId,
          addError
        )(product)
      ]
    ];
    return (
      <Preview>
        <Cart
          products={mockProductsWithError}
          lineItems={mockLineItems}
          handleCalculateCartTotal={() => {}}
          handleNextStep={() => {}}
          hasError
        />
      </Preview>
    );
  });

storiesOf("Domains|Checkout/Cart", module)
  .addDecorator(withRedux)
  .add("Cart Page in Checkout", () => {
    const emptyCart = boolean("Empty Cart", false);
    return (
      <PreviewContainer constrained>
        <Checkout
          enabledSteps={["cart"]}
          activeStep={"cart"}
          goToStep={() => {}}
          stepTitle="Cart"
          isVisitStatusPending={false}
          showEmptyCartBackgroundImage
        >
          <Cart
            products={emptyCart ? [] : mockProducts}
            lineItems={mockLineItems}
            handleCalculateCartTotal={() => {}}
            handleNextStep={() => {}}
          />
        </Checkout>
      </PreviewContainer>
    );
  });
