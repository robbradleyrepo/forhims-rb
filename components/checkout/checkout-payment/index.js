import React from "react";
import { Block } from "../../block";
import { CheckoutDescription, CheckoutTitle } from "../checkout.style";

export const CheckoutAddPaymentDescription = () => (
  <Block
    display="flex"
    flexDirection="column"
    textAlign="center"
    alignItems="center"
  >
    <CheckoutDescription>
      You will have a chance to review the order before your card is charged.
    </CheckoutDescription>
  </Block>
);

export const CheckoutAddPaymentHeader = () => (
  <Block textAlign="center">
    <CheckoutTitle>Payment Information</CheckoutTitle>
    <CheckoutDescription>
      Please enter your payment information
    </CheckoutDescription>
  </Block>
);
