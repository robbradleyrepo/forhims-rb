import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { reduxForm, change } from "redux-form";

import { SHIPPING } from "../../../checkout-flow/state/actions/shipping.actions";

import { savedShippingAddressesConnector } from "./saved-shipping-addresses.selectors";
import {
  SavedShippingAddressesForm,
  SavedShippingAddressesDisplay
} from "./saved-shipping-addresses.component";
import { SHIPPING_FORMS } from "../../../shipping/shipping.constants";

const dispatchers = {
  changeView: SHIPPING.changeView,
  editAddress: SHIPPING.editSavedAddress,
  preSaveShippingAddress: SHIPPING.preSaveShippingAddress,
  gotoAddressList: SHIPPING.gotoAddressList,
  changeFormField: change
};

export const SavedShippingAddressesFormContainer = compose(
  connect(
    savedShippingAddressesConnector,
    dispatchers
  ),
  withHandlers({
    handleSaveShipping: props => formValues => {
      new Promise((resolve, reject) => {
        const isEditing = true;
        props.preSaveShippingAddress(resolve, reject, props.context, isEditing);
      });
    },
    handleCancel: props => () => {
      props.gotoAddressList();
    }
  }),
  reduxForm({
    form: SHIPPING_FORMS.PROFILE
  })
)(SavedShippingAddressesForm);

export const SavedShippingAddressesListContainer = compose(
  connect(
    savedShippingAddressesConnector,
    dispatchers
  ),
  withHandlers({
    handleClickEdit: ({ context, editAddress }) => addressId => {
      const isValidating = false;
      editAddress(addressId, context, isValidating);
    }
  })
)(SavedShippingAddressesDisplay);
