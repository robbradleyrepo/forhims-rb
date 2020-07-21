import PropTypes from "prop-types";
import React from "react";
import { Field, Form, propTypes as formPropTypes } from "redux-form";

import { TextField } from "../../../text-field";
import { Button, BUTTON_VARIANTS } from "../../../button";
import { Block } from "../../../block";
import { createBootstrapColumnWidth } from "../../checkout.utils";

export const CartPromo = ({ handleSubmit, handleCalculateCartTotal }) => (
  <Form onSubmit={handleSubmit(handleCalculateCartTotal)}>
    <Block display="flex">
      <Block width={createBootstrapColumnWidth(8)}>
        <Field
          component={TextField}
          id="promo-code"
          label="Promo Code"
          name="discount"
        />
      </Block>
      <Block width={createBootstrapColumnWidth(4)} pl={3}>
        <Button
          fullWidth
          label="Apply"
          type="submit"
          variant={BUTTON_VARIANTS.FLAT}
        />
      </Block>
    </Block>
  </Form>
);

CartPromo.propTypes = {
  handleCalculateCartTotal: PropTypes.func,
  handleSubmit: PropTypes.func,
  ...formPropTypes
};
