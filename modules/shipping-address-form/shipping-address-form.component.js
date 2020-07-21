import React, { Component } from "react";
import { Field } from "redux-form";
import { pathOr } from "ramda";

import { Block } from "../../components/block";
import {
  required,
  phoneNumber,
  postcode,
  minLength,
  normalizePhone
} from "../../utils/form-validation";
import { TextField } from "../../components/text-field";
import { ShippingAddressProps } from "./shipping-address-form.types";

const minLength2 = minLength(2);
const AUTOCOMPLETE_CONTEXT = "shipping";

export class ShippingAddressForm extends Component {
  componentDidMount() {
    if (pathOr(false, ["google", "maps", "places"], window)) {
      const { initAutocomplete, handleAddressSelection, handleFocus } = this;
      this.autocompleteInstance = initAutocomplete();
      this.autocompleteInstance.addListener(
        "place_changed",
        handleAddressSelection
      );
      this.getAutocompleteField().addEventListener("focus", handleFocus, false);
    }
  }

  componentWillUnmount() {
    this.getAutocompleteField().removeEventListener(
      "focus",
      this.handleFocus,
      false
    );
  }

  extractAddress = ({ address_components }) =>
    address_components.reduce((acc, { long_name, types }) => {
      const addressComponentsToBeExtracted = [
        "street_number",
        "route", // street name
        "postal_town", // city
        "postal_code"
      ];

      addressComponentsToBeExtracted.forEach(
        component =>
          types.includes(component) ? (acc[component] = long_name) : null
      );

      return acc;
    }, {});

  initAutocomplete = () =>
    new window.google.maps.places.Autocomplete(this.getAutocompleteField(), {
      componentRestrictions: {
        country: "gb"
      }
    });

  getAutocompleteField = () =>
    this.autocomplete.getRenderedComponent().input.current;

  getStreetAddress = (streetNumber, streetName) =>
    streetNumber ? `${streetNumber} ${streetName}` : streetName;

  // Hack to trick google chrome into not showing address autofill menu.
  handleFocus = () =>
    this.getAutocompleteField().setAttribute("autocomplete", "invalid");

  handleAddressSelection = () => {
    const { changeFormField, formId } = this.props;
    const { extractAddress, autocompleteInstance, getStreetAddress } = this;
    const place = autocompleteInstance.getPlace();
    const {
      street_number: streetNumber,
      route: streetName,
      postal_town: city,
      postal_code: postalCode
    } = extractAddress(place);
    changeFormField(
      formId,
      "line1",
      getStreetAddress(streetNumber, streetName)
    );
    changeFormField(formId, "city", city);
    changeFormField(formId, "zip", postalCode);
  };

  render() {
    const { showProfileFields = true } = this.props;

    return (
      <React.Fragment>
        {showProfileFields && (
          <React.Fragment>
            <Block mb={4}>
              <Field
                component={TextField}
                label="First Name"
                name="firstName"
                validate={[required, minLength2]}
                context={AUTOCOMPLETE_CONTEXT}
              />
            </Block>
            <Block mb={4}>
              <Field
                component={TextField}
                label="Last Name"
                name="lastName"
                validate={[required, minLength2]}
                context={AUTOCOMPLETE_CONTEXT}
              />
            </Block>
          </React.Fragment>
        )}
        <Block mb={4}>
          <Field
            component={TextField}
            label="Street Address"
            name="line1"
            validate={[required, minLength2]}
            context={AUTOCOMPLETE_CONTEXT}
            withRef
            ref={ref => (this.autocomplete = ref)}
            placeholder=""
          />
        </Block>
        <Block mb={4}>
          <Field component={TextField} label="Additional info" name="line2" />
        </Block>
        <Block mb={4}>
          <Field
            component={TextField}
            label="City"
            name="city"
            validate={[required, minLength2]}
            context={AUTOCOMPLETE_CONTEXT}
          />
        </Block>
        <Block mb={4}>
          <Field
            component={TextField}
            label="Postcode"
            name="zip"
            normalize={value => value.toUpperCase()}
            validate={[required, postcode]}
            context={AUTOCOMPLETE_CONTEXT}
          />
        </Block>
        <Block mb={4}>
          <Field
            component={TextField}
            disabled={true}
            label="Country"
            name="country"
            context={AUTOCOMPLETE_CONTEXT}
          />
        </Block>
        {showProfileFields && (
          <Block mb={4}>
            <Field
              component={TextField}
              label="Phone"
              name="phone"
              normalize={normalizePhone}
              validate={[required, phoneNumber]}
              context={AUTOCOMPLETE_CONTEXT}
              maxLength={11}
            />
          </Block>
        )}
      </React.Fragment>
    );
  }
}

ShippingAddressForm.propTypes = ShippingAddressProps;
