import React from "react";
import PropTypes from "prop-types";

import { CheckoutFooter } from "../../../../components/checkout/checkout.style";

import { Button } from "../../../../components/button";
import { ButtonLink } from "../../../../components/fonts/link";
import { Block } from "../../../../components/block";
import { PaymentMethod, PaymentMethodDetail } from "./payment-methods.style";

export const PaymentMethods = ({
  cardName,
  cardNumberDisplay,
  handleAddPaymentMethod,
  isInCheckout,
  nextStep
}) => (
  <Block display="flex" flexDirection="column" alignItems="center" pt={3}>
    <PaymentMethod>
      <PaymentMethodDetail>{cardName}</PaymentMethodDetail>
      <PaymentMethodDetail>{cardNumberDisplay}</PaymentMethodDetail>
    </PaymentMethod>
    <Block
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      py={4}
    >
      <ButtonLink onClick={handleAddPaymentMethod}>
        Add New Payment Method
      </ButtonLink>
    </Block>
    {isInCheckout && (
      <CheckoutFooter>
        <Button label="Next" fullWidth onClick={nextStep} />
      </CheckoutFooter>
    )}
  </Block>
);
PaymentMethods.propTypes = {
  cardName: PropTypes.string,
  cardNumberDisplay: PropTypes.string,
  handleAddPaymentMethod: PropTypes.func,
  isInCheckout: PropTypes.bool,
  nextStep: PropTypes.func
};
