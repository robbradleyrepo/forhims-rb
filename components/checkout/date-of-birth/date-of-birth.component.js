import React from "react";
import PropTypes from "prop-types";
import { Field, Form } from "redux-form";

import {
  CheckoutFooter,
  CheckoutTitle,
  CheckoutDescription
} from "../checkout.style";
import { Button } from "../../button";
import { Block } from "../../block";

import { CenteredTextField } from "./date-of-birth.style";
import { validateDate, validateYear } from "./date-of-birth.validation";
import { FormError } from "../../form-error";

export const DateOfBirth = ({
  handleSubmit,
  handleDateOfBirthSubmit,
  submitting
}) => (
  <Form onSubmit={handleSubmit(handleDateOfBirthSubmit)}>
    <Block display="flex" flexDirection="column" alignItems="center" pt={5}>
      <Block textAlign="center" pb={3} mb={3}>
        <CheckoutTitle>Date of Birth</CheckoutTitle>
        <CheckoutDescription>What is your date of birth?</CheckoutDescription>
      </Block>
      <Block display="flex" justifyContent="center" mb={2}>
        <Block mx={2}>
          <Field
            component={CenteredTextField}
            label="DD"
            name="day"
            type="text"
            maxLength={2}
            validate={validateDate}
          />
        </Block>
        <Block mx={2}>
          <Field
            component={CenteredTextField}
            label="MM"
            name="month"
            type="text"
            maxLength={2}
            validate={validateDate}
          />
        </Block>
        <Block mx={2}>
          <Field
            component={CenteredTextField}
            label="YYYY"
            name="year"
            type="text"
            maxLength={4}
            validate={validateYear}
          />
        </Block>
      </Block>
      <Block display="flex" justifyContent="center" mb={3}>
        <Field
          component={({ meta }) =>
            meta.error ? (
              <FormError>{meta.error}</FormError>
            ) : (
              <React.Fragment />
            )
          }
          name="invalidDate"
        />
      </Block>
      <CheckoutFooter>
        <Button
          label="NEXT"
          type="submit"
          disabled={submitting}
          testId="CheckoutDateOfBirthButton"
          fullWidth
        />
      </CheckoutFooter>
    </Block>
  </Form>
);
DateOfBirth.propTypes = {
  invalid: PropTypes.bool,
  handleDateOfBirthSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool
};
