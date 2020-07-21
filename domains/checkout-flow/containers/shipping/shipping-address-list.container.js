import PropTypes from "prop-types";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ShippingAddressSelect } from "../../components/shipping-address-list";
import { checkoutShippingAddressesConnector } from "../../state/selectors/shipping";

import { SHIPPING } from "../../state/actions";

const dispatchers = {
  selectCartAddress: SHIPPING.selectCartAddress,
  gotoAddNewAddress: SHIPPING.gotoAddNewAddress
};

const ShippingAddressSelectReduxForm = reduxForm({
  form: "shipping-address-list"
})(ShippingAddressSelect);

export const ShippingAddressListContainer = compose(
  connect(
    checkoutShippingAddressesConnector,
    dispatchers
  ),
  withHandlers({
    handleSelectAddress: props => () => {
      new Promise((resolve, reject) => {
        props.selectCartAddress(resolve, reject);
      });
    }
  })
)(ShippingAddressSelectReduxForm);

ShippingAddressListContainer.propTypes = {
  context: PropTypes.string
};
