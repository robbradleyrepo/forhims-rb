import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { reduxForm } from "redux-form";
import { storiesOf } from "@storybook/react";
import { withProps, compose } from "recompose";

import { ShippingAddressForm } from "./shipping-address-form.component";
import { withRedux } from "../../utils/storybook";

export const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  height: 100vh;
`;

storiesOf("Modules|Shipping Address Form", module)
  .addDecorator(withRedux)
  .addWithJSX("Shipping Address Form", () => {
    const Form = compose(
      withProps({
        onSubmit: action("submit"),
        stateOptions: [{ label: "Vermont", value: "VT" }],
        submitButtonLabel: text("Submit button label", "Save"),
        showCancelButton: boolean("Show Cancel Button", true),
        initialValues: {
          country: "United Kingdom"
        }
      }),
      reduxForm({ form: "shipping-address-form" })
    )(ShippingAddressForm);

    return <Form />;
  });
