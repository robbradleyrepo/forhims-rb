import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";

import { StripeProvider, Elements } from "react-stripe-elements";

import { AddPaymentContainer, PaymentMethodsContainer } from "./containers";

import miscUtils from "../../utils/misc";

const { isClient } = miscUtils;

export const Payment = ({
  stripe,
  toggleIsEditing,
  isEditing,
  paymentMethod,
  isInCheckout = true
}) => {
  const shouldShowAddPayment =
    (isEmpty(paymentMethod) || isEditing) && isClient();
  return shouldShowAddPayment ? (
    <StripeProvider stripe={stripe}>
      <Elements>
        <AddPaymentContainer
          handleSelectExistingMethod={() => toggleIsEditing(false)}
          isInCheckout={isInCheckout}
        />
      </Elements>
    </StripeProvider>
  ) : (
    <PaymentMethodsContainer
      handleAddPaymentMethod={() => toggleIsEditing(true)}
      isInCheckout={isInCheckout}
    />
  );
};

Payment.propTypes = {
  stripe: PropTypes.any,
  toggleIsEditing: PropTypes.func,
  isEditing: PropTypes.bool,
  paymentMethod: PropTypes.any,
  isInCheckout: PropTypes.bool
};
