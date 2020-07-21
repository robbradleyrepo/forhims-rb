import React from "react";
import PropTypes from "prop-types";
import { Form, propTypes as formPropTypes } from "redux-form";

import { ShippingAddressList } from "../../../../components/checkout/shipping-address";
import { Block } from "../../../../components/block";
import { Button } from "../../../../components/button";
import { FormError } from "../../../../components/form-error";
import { spacing } from "../../../../theme/spacing";
import { combineRems } from "../../../../utils/rem";
import {
  CheckoutFooter,
  CheckoutHeader,
  CheckoutDescription
} from "../../../../components/checkout/checkout.style";
import { ButtonLink } from "../../../../components/fonts";
import { transformAddresses } from "./shipping-address-validate.utils";
import { SHIPPING_CONTEXTS } from "../../../shipping/shipping.constants";

export const ShippingAddressValidate = ({
  handleSaveAddress,
  handleSubmit,
  options,
  editOriginalAddress,
  handleReturnToSavedAddress,
  context,
  submitting,
  submitFailed,
  error
}) => {
  const transformedOptions = transformAddresses(options);
  const isSavedAddress = context === SHIPPING_CONTEXTS.PROFILE;
  return (
    <Form onSubmit={handleSubmit(handleSaveAddress)}>
      <CheckoutHeader>
        <CheckoutDescription>Please Select an Option</CheckoutDescription>
      </CheckoutHeader>
      <ShippingAddressList
        isEditable={false}
        name="address-choice"
        options={transformedOptions}
      />
      <Block display="flex" justifyContent="center" alignItems="center" mb={2}>
        {isSavedAddress ? (
          <ButtonLink type="button" onClick={handleReturnToSavedAddress}>
            Edit Saved Address
          </ButtonLink>
        ) : (
          <ButtonLink type="button" onClick={editOriginalAddress}>
            Edit Original Address
          </ButtonLink>
        )}
      </Block>
      {!submitting &&
        submitFailed &&
        error && (
          <Block mb={4}>
            <FormError>{error}</FormError>
          </Block>
        )}
      <Block mb={combineRems(spacing.two, spacing.four)} />
      <CheckoutFooter>
        <Button
          type="submit"
          label={isSavedAddress ? "Save" : "Next"}
          disabled={submitting}
          fullWidth
          testId="CheckoutShippingSelectAddressButton"
        />
      </CheckoutFooter>
    </Form>
  );
};

ShippingAddressValidate.propTypes = {
  handleSaveAddress: PropTypes.func,
  editOriginalAddress: PropTypes.func,
  options: PropTypes.shape({
    original: PropTypes.object,
    suggested: PropTypes.object
  }),
  ...formPropTypes
};
