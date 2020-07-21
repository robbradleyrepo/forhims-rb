import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { required } from "../../../../utils/form-validation";

import { ListReset } from "../../../elements";
import { ShippingAddressListItem } from "../shipping-address-list-item";
import { ShippingAddressListWrapper } from "./shipping-address-list.style";

export const ShippingAddressList = ({ isEditable, name, options }) => {
  return (
    <ShippingAddressListWrapper>
      <ListReset>
        <Field
          name="shipping-choice"
          options={options}
          validate={[required]}
          component={({ input, options }) =>
            options && options.length > 0
              ? options.map(address => (
                  <ShippingAddressListItem
                    key={address.id}
                    id={`${name}-${address.id}`}
                    name={name}
                    value={address.id}
                    isEditable={isEditable}
                    input={input}
                    address={address}
                  />
                ))
              : null
          }
        />
      </ListReset>
    </ShippingAddressListWrapper>
  );
};

ShippingAddressList.propTypes = {
  isEditable: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.array
};
