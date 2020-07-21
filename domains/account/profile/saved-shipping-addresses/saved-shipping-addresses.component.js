import React from "react";
import PropTypes from "prop-types";
import { Form } from "redux-form";

import { Block } from "../../../../components/block";
import { BodySmall } from "../../../../components/fonts";
import { EditIcon } from "../../../../components/icons/edit-icon";
import { Button } from "../../../../components/button";
import { SavedShippingAddressOption } from "./saved-shipping-addresses.style";

import { ShippingAddressForm } from "../../../../modules/shipping-address-form";
import { ToggleEditButton } from "../profile.style";
import { CloseIcon } from "../../../../components/icons/close-icon";

export const SavedShippingAddressesDisplay = ({
  addresses,
  handleClickEdit
}) => (
  <Block>
    {addresses.map(({ id, line1, line2, city, state, zip, country }, index) => (
      <Block key={id} mb={3}>
        <SavedShippingAddressOption>
          <Block pb={2} mb={3}>
            <BodySmall>{line1}</BodySmall>
            <BodySmall>{line2}</BodySmall>
            <BodySmall>
              {city}, {state}
            </BodySmall>
            <BodySmall>
              {zip} {country}
            </BodySmall>
          </Block>
          <Block>
            <ToggleEditButton type="button" onClick={() => handleClickEdit(id)}>
              <EditIcon height={16} />Edit
            </ToggleEditButton>
          </Block>
        </SavedShippingAddressOption>
      </Block>
    ))}
  </Block>
);
SavedShippingAddressesDisplay.propTypes = {
  addresses: PropTypes.array,
  handleClickEdit: PropTypes.func
};

export const SavedShippingAddressesForm = ({
  handleSubmit,
  handleSaveShipping,
  handleCancel,
  form,
  changeFormField
}) => {
  return (
    <Block>
      <Form onSubmit={handleSubmit(handleSaveShipping)}>
        <Block mb={3}>
          <ShippingAddressForm
            showProfileFields={false}
            formId={form}
            changeFormField={changeFormField}
          />
        </Block>
        <Block>
          <Button label="Save" type="submit" fullWidth />
        </Block>
        <Block display="flex" flexDirection="column" alignItems="center" mt={4}>
          <ToggleEditButton type="button" onClick={handleCancel}>
            <CloseIcon height={14} />Cancel
          </ToggleEditButton>
        </Block>
      </Form>
    </Block>
  );
};
SavedShippingAddressesForm.propTypes = {
  handleSaveShipping: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  changeFormField: PropTypes.func,
  form: PropTypes.string
};
