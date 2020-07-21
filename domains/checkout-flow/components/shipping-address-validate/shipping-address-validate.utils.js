import React from "react";
import { equals } from "ramda";

import { ChangedAddressLine } from "../../../../components/checkout/shipping-address/shipping-address-list/shipping-address-list.style";

const highlightSuggestedLineIfDifferent = (original, suggested) =>
  equals(original, suggested) ? (
    suggested
  ) : (
    <ChangedAddressLine>{suggested}</ChangedAddressLine>
  );

const styleSuggestedAddress = (original, suggested) => ({
  ...suggested,
  addressLine1: highlightSuggestedLineIfDifferent(
    original.addressLine1,
    suggested.addressLine1
  ),
  addressLine2: highlightSuggestedLineIfDifferent(
    original.addressLine2,
    suggested.addressLine2
  ),
  addressLine3: highlightSuggestedLineIfDifferent(
    original.addressLine3,
    suggested.addressLine3
  ),
  addressLine4: highlightSuggestedLineIfDifferent(
    original.addressLine4,
    suggested.addressLine4
  )
});

export const transformAddresses = ({ original, suggested }) => {
  try {
    return [
      { ...original, addressLabel: "Original address:" },
      {
        ...styleSuggestedAddress(original, suggested),
        addressLabel: "Suggested address:"
      }
    ];
  } catch (e) {
    return [];
  }
};
