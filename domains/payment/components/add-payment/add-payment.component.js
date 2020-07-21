import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";

import { CheckoutFooter } from "../../../../components/checkout/checkout.style";
import { Button } from "../../../../components/button";
import { Block } from "../../../../components/block";
import { StripePayment } from "../stripe-payment";
import { CloseIcon } from "../../../../components/icons/close-icon";
import { ToggleEditButton } from "../../../account/profile/profile.style";
import {
  CheckoutAddPaymentDescription,
  CheckoutAddPaymentHeader
} from "../../../../components/checkout/checkout-payment";

export const AddPayment = ({
  handleSubmit,
  handleSelectExistingMethod,
  paymentMethod,
  isInCheckout
}) => (
  <form onSubmit={handleSubmit}>
    <Block display="flex" flexDirection="column" alignItems="center" pt={5}>
      {isInCheckout && <CheckoutAddPaymentHeader />}

      <Block minWidth="80%">
        <StripePayment />
      </Block>

      {isInCheckout && <CheckoutAddPaymentDescription />}

      <CheckoutFooter>
        <Button
          label="Next"
          fullWidth
          type="submit"
          testId="CheckoutPaymentSavePaymentButton"
        />
      </CheckoutFooter>

      {!isEmpty(paymentMethod) && (
        <Block
          display="flex"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          pt={4}
        >
          <ToggleEditButton type="button" onClick={handleSelectExistingMethod}>
            <CloseIcon height={14} />Cancel
          </ToggleEditButton>
        </Block>
      )}
    </Block>
  </form>
);

AddPayment.propTypes = {
  handleSubmit: PropTypes.func,
  handleSelectExistingMethod: PropTypes.func,
  paymentMethod: PropTypes.any,
  isInCheckout: PropTypes.bool
};
