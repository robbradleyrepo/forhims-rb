import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { reduxForm } from "redux-form";

import { withRedux } from "../../../../utils/storybook";

import { ShippingAddressList } from "./shipping-address-list.component";
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;
storiesOf("Domains|Checkout/Shipping Address", module)
  .addDecorator(withRedux)
  .addWithJSX("List", () => {
    const isInContainer = boolean("Show in container");
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
    const WithForm = () => (
      <form>
        <ShippingAddressList options={addresses} />
      </form>
    );
    const Form = reduxForm({ form: "select-shipping-address" })(WithForm);
    return (
      <PreviewContainer constrained={isInContainer}>
        <Form />
      </PreviewContainer>
    );
  });
