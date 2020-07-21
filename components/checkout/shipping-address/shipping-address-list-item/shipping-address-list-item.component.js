import React from "react";
import PropTypes from "prop-types";
import { EditIcon } from "../../../icons/edit-icon";
import {
  AddressLine,
  EditAddressButton,
  AddressLabel,
  AddressBlock
} from "./shipping-address-list-item.style";
import { RadioFieldListItem } from "../../../radio-field-list-item";

export const ShippingAddressListItem = ({
  input,
  meta,
  address,
  ...moreInputProps
}) => {
  const {
    addressLabel,
    addressLine1,
    addressLine2,
    addressLine3,
    addressLine4
  } = address;

  const { onEdit, isEditable, id, name, value } = moreInputProps;

  return (
    <RadioFieldListItem
      input={input}
      meta={meta}
      name={name}
      value={value}
      id={`${id}-${value}`}
      testId={id}
    >
      <AddressBlock>
        {addressLabel && <AddressLabel>{addressLabel}</AddressLabel>}
        <AddressLine>{addressLine1}</AddressLine>
        <AddressLine>{addressLine2}</AddressLine>
        <AddressLine>{addressLine3}</AddressLine>
        <AddressLine>{addressLine4}</AddressLine>
      </AddressBlock>
      {isEditable && (
        <EditAddressButton type="button" onClick={onEdit}>
          <EditIcon height={14} />
        </EditAddressButton>
      )}
    </RadioFieldListItem>
  );
};

ShippingAddressListItem.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onEdit: PropTypes.func,
  isEditable: PropTypes.bool,
  address: PropTypes.object
};
