import React from "react";
import PropTypes from "prop-types";
import { Form, propTypes as formPropTypes } from "redux-form";

import {
  ShippingAddressForm,
  ShippingAddressProps
} from "../../../../modules/shipping-address-form";

import { Block } from "../../../../components/block";
import { Button } from "../../../../components/button";
import { spacing } from "../../../../theme/spacing";
import { combineRems } from "../../../../utils/rem";
import {
  CheckoutFooter,
  CheckoutHeader
} from "../../../../components/checkout/checkout.style";
import { ButtonLink } from "../../../../components/fonts";
import { FormError } from "../../../../components/form-error";

export const CheckoutShippingAddressForm = ({
  handleSaveAddress,
  handleSubmit,
  changeFormField,
  formProps,
  hasAddresses,
  gotoAddressList,
  hasCompleteProfileData,
  submitting,
  submitFailed,
  error,
  form
}) => {
  return (
    <Form onSubmit={handleSubmit(handleSaveAddress)}>
      {hasAddresses && (
        <CheckoutHeader>
          <ButtonLink type="button" onClick={gotoAddressList}>
            Use Existing Address
          </ButtonLink>
        </CheckoutHeader>
      )}
      <ShippingAddressForm
        handleSaveAddress={handleSaveAddress}
        changeFormField={changeFormField}
        showProfileFields={!hasCompleteProfileData}
        formId={form}
        {...formProps}
      />
      <Block
        display="flex"
        textAlign="center"
        flexDirection="column"
        alignItems="center"
        pt={3}
      >
        {!submitting &&
          submitFailed &&
          error && (
            <Block mb={4}>
              <FormError>{error}</FormError>
            </Block>
          )}
      </Block>
      <Block mb={combineRems(spacing.two, spacing.four)} />
      <CheckoutFooter>
        <Button
          type="submit"
          label="Save Address"
          fullWidth
          disabled={submitting}
          testId="CheckoutShippingSaveNewAddressButton"
        />
      </CheckoutFooter>
    </Form>
  );
};

CheckoutShippingAddressForm.propTypes = {
  handleSaveAddress: PropTypes.func,
  handleSubmit: PropTypes.func,
  hasAddresses: PropTypes.bool,
  formProps: PropTypes.shape(ShippingAddressProps),
  hasCompleteProfileData: PropTypes.bool,
  ...formPropTypes
};
