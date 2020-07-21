import PropTypes from "prop-types";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { reduxForm, change } from "redux-form";

import { CheckoutShippingAddressForm } from "../../components/shipping-address-form";
import { newShippingAddressConnector } from "../../state/selectors/shipping";
import { SHIPPING } from "../../state/actions/shipping.actions";
import {
  SHIPPING_FORMS,
  SHIPPING_COUNTRY
} from "../../../shipping/shipping.constants";

const dispatchers = {
  preSaveShippingAddress: SHIPPING.preSaveShippingAddress,
  gotoAddressList: SHIPPING.gotoAddressList,
  changeFormField: change
};

// TODO: Assuming United Kingdom for all addresses
const CheckoutShippingAddressReduxForm = reduxForm({
  form: SHIPPING_FORMS.CHECKOUT,
  initialValues: {
    country: SHIPPING_COUNTRY
  }
})(CheckoutShippingAddressForm);

export const ShippingAddressFormContainer = compose(
  connect(
    newShippingAddressConnector,
    dispatchers
  ),
  withHandlers({
    handleSaveAddress: props => () =>
      new Promise((resolve, reject) => {
        const isEditing = false;
        props.preSaveShippingAddress(resolve, reject, props.context, isEditing);
      })
  })
)(CheckoutShippingAddressReduxForm);

ShippingAddressFormContainer.propTypes = {
  context: PropTypes.string
};
