import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Field, reduxForm } from "redux-form";

import { withRedux } from "../../../../utils/storybook";

import { ShippingAddressListItem } from "./shipping-address-list-item.component";
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;
storiesOf("Domains|Checkout/Shipping Address", module)
  .addDecorator(withRedux)
  .addWithJSX("ListItem", () => {
    const isInContainer = boolean("Show in container");
    const isEditable = boolean("Is editable");
    const address = {
      addressLine1: "20060 Ventura Blvd",
      addressLine2: "Woodland Hills, CA",
      addressLine3: "91364-2637",
      addressLine4: "USA",
      addressLabel: "Home"
    };
    const ShippingContent = () => (
      <form>
        <Field
          component={ShippingAddressListItem}
          name="address"
          id="address1"
          value="address1"
          type="radio"
          isEditable={isEditable}
          onEdit={action("shipping-address-onEdit")}
          onSelect={action("shipping-address-onSelect")}
          address={address}
        />
      </form>
    );
    const Form = reduxForm({ form: "select-shipping-address" })(
      ShippingContent
    );
    return (
      <PreviewContainer constrained={isInContainer}>
        <Form />
      </PreviewContainer>
    );
  });
