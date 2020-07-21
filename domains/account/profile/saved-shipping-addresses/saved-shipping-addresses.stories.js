import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { reduxForm } from "redux-form";

import { withRedux } from "../../../../utils/storybook";

import { SavedShippingAddressesDisplay } from "./saved-shipping-addresses.component";
const addresses = [
  {
    id: 123,
    line1: "20060 Ventura Blvd",
    line2: "Woodland Hills, CA",
    line3: "91364-2637",
    line4: "USa"
  },
  {
    id: 124,
    line1: "329 S Bonnie Brae St",
    line2: "Los Angeles, CA",
    line3: "90057-3018",
    line4: "USa"
  }
];

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  max-width: 50vw;
`;

const WithForm = () => (
  <form>
    <SavedShippingAddressesDisplay addresses={addresses} />
  </form>
);
const Form = reduxForm({ form: "select-shipping-address" })(WithForm);

storiesOf("Domains|Account/Profile/Shipping", module)
  .addDecorator(withRedux)
  .add("Saved Shipping Addresses", () => (
    <PreviewContainer>
      <Form />
    </PreviewContainer>
  ));
