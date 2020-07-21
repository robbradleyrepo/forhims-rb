import React from "react";
import PropTypes from "prop-types";

import {
  ShippingAddressFormContainer,
  ShippingAddressValidateContainer,
  ShippingAddressListContainer
} from "../../containers/shipping";
import {
  SavedShippingAddressesFormContainer,
  SavedShippingAddressesListContainer
} from "../../../account/profile/saved-shipping-addresses";
import {
  SHIPPING_CONTEXTS,
  SHIPPING_VIEWS
} from "../../../shipping/shipping.constants";

export const ShippingSteps = ({ activeView, context }) => {
  switch (activeView) {
    case SHIPPING_VIEWS.EDIT:
      return <SavedShippingAddressesFormContainer context={context} />;
    case SHIPPING_VIEWS.NEW:
      return <ShippingAddressFormContainer context={context} />;
    case SHIPPING_VIEWS.VALIDATE:
      return <ShippingAddressValidateContainer context={context} />;
    case SHIPPING_VIEWS.LIST:
      if (context === SHIPPING_CONTEXTS.PROFILE) {
        return <SavedShippingAddressesListContainer context={context} />;
      } else {
        return <ShippingAddressListContainer context={context} />;
      }
    default:
      return null;
  }
};

ShippingSteps.propTypes = {
  activeView: PropTypes.string.isRequired
};
