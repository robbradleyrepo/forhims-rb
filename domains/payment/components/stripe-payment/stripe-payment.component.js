import React from "react";
import { CardElement } from "react-stripe-elements";
import { StripePaymentContainer } from "./stripe-payment.style";

const CARD_STYLE = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: "400",
      fontFamily: "sans-serif",
      fontSize: "14px",
      "::placeholder": {
        color: "#AAA"
      }
    },
    invalid: {
      iconColor: "#e85746",
      color: "#000"
    }
  },
  classes: {
    focus: "is-focused",
    empty: "is-empty"
  }
};

export const StripePayment = () => (
  <StripePaymentContainer>
    <CardElement {...CARD_STYLE} />
  </StripePaymentContainer>
);
