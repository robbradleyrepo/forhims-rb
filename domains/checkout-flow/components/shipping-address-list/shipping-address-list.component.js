import PropTypes from "prop-types";
import React from "react";
import { Form, propTypes as formPropTypes } from "redux-form";

import { ShippingAddressList } from "../../../../components/checkout/shipping-address";
import { Block } from "../../../../components/block";
import { ButtonLink } from "../../../../components/fonts/link";
import { Button } from "../../../../components/button";

import {
  CheckoutTitle,
  CheckoutDescription,
  CheckoutFooter
} from "../../../../components/checkout/checkout.style";

export const ShippingAddressSelect = ({
  addresses,
  handleSelectAddress,
  handleSubmit,
  gotoAddNewAddress,
  submitting
}) => (
  <Form onSubmit={handleSubmit(handleSelectAddress)}>
    <Block textAlign="center" mb={2}>
      <CheckoutTitle>Home Shipping Address</CheckoutTitle>
      <CheckoutDescription>
        This is the shipping address we will send to
      </CheckoutDescription>
    </Block>
    <Block display="flex" justifyContent="center" alignItems="center" mb={2}>
      <ButtonLink
        onClick={gotoAddNewAddress}
        data-testid="CheckoutShippingCreateNewAddress"
      >
        Create New Address
      </ButtonLink>
    </Block>
    <Block mb={4}>
      <ShippingAddressList name="SavedShippingAddresses" options={addresses} />
    </Block>
    <CheckoutFooter>
      <Button
        label="Next"
        disabled={submitting}
        fullWidth
        type="submit"
        testId="SavedShippingAddressesNextButton"
      />
    </CheckoutFooter>
  </Form>
);

ShippingAddressSelect.propTypes = {
  addresses: PropTypes.array,
  handleSelectAddress: PropTypes.func,
  handleSubmit: PropTypes.func,
  gotoAddNewAddress: PropTypes.func,
  ...formPropTypes
};
