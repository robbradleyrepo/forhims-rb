import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ShippingAddressValidate } from "../../components/shipping-address-validate";
import { validateShippingAddressConnector } from "../../state/selectors/shipping";
import { SHIPPING } from "../../state/actions";

const dispatchers = {
  saveSelectedAddress: SHIPPING.saveSelectedValidatedAddress,
  editOriginalAddress: SHIPPING.editOriginalAddress,
  editSavedAddress: SHIPPING.editSavedAddress
};

const ShippingAddressValidateReduxForm = reduxForm({
  form: "shipping-address-validate"
})(ShippingAddressValidate);

export const ShippingAddressValidateContainer = compose(
  connect(
    validateShippingAddressConnector,
    dispatchers
  ),
  withHandlers({
    handleSaveAddress: props => () =>
      new Promise((resolve, reject) => {
        props.saveSelectedAddress(resolve, reject, props.context);
      }),
    handleReturnToSavedAddress: ({
      editSavedAddress,
      addressId,
      context
    }) => () => {
      const isEditing = true;
      editSavedAddress(addressId, context, isEditing);
    }
  })
)(ShippingAddressValidateReduxForm);
