import React from "react";
import PropTypes from "prop-types";

import { Field, Form, propTypes as formPropTypes } from "redux-form";
import { TextField } from "../../text-field";
import {
  CheckoutFooter,
  CheckoutTitle,
  CheckoutDescription,
  CheckoutPageWrapper,
  CheckoutContent
} from "../checkout.style";
import { FormError } from "../../form-error";
import { SignInLink, FieldsWrapper } from "../login/login.style";
import { Button } from "../../button";
import { Block } from "../../block";
import { CheckboxField } from "../../checkbox-field";

import { required, checked } from "../../../utils/form-validation";

const termsChecked = checked(
  "You must agree to User Terms, Service Terms and Privacy Policy to continue"
);

export const RegisterAccount = ({
  submitting,
  handleRegisterSubmit,
  handleSubmit,
  onShowLoginView,
  submitFailed,
  error
}) => (
  <CheckoutContent>
    <CheckoutPageWrapper>
      <Form onSubmit={handleSubmit(handleRegisterSubmit)}>
        <Block mb={3} pb={3} textAlign="center">
          <CheckoutTitle>
            Create your account to get started with a free online consultation
          </CheckoutTitle>
          <CheckoutDescription>
            The consultation will ask about your health, medical history, and
            lifestyle to determine the best treatment for you. It takes less
            than 5 minutes and is 100% confidential.
          </CheckoutDescription>
        </Block>
        <FieldsWrapper>
          <Block mb={4}>
            <Field
              component={TextField}
              label="Email Address"
              name="email"
              type="email"
              validate={[required]}
              disabled={submitting}
            />
          </Block>
          <Block mb={3}>
            <Field
              component={TextField}
              label="Create Password"
              name="password"
              type="password"
              validate={[required]}
              disabled={submitting}
            />
          </Block>
          <Field
            testId="termsAndConditionsCheckbox"
            component={CheckboxField}
            label="I agree to the [User Terms](/user-terms), [Service Terms](/service-terms) and [Privacy Policy](/privacy-policy)"
            name="termsAndConditions"
            id="terms-and-conditions"
            validate={[termsChecked]}
            disabled={submitting}
          />
        </FieldsWrapper>
        {!submitting &&
          submitFailed &&
          error && (
            <Block mb={4}>
              <FormError testId="InvalidRegistrationError">{error}</FormError>
            </Block>
          )}
        <Block
          display="flex"
          textAlign="center"
          flexDirection="column"
          alignItems="center"
        >
          <CheckoutDescription>
            Already have an account?{" "}
            <SignInLink onClick={onShowLoginView} type="button">
              Sign in
            </SignInLink>
          </CheckoutDescription>
        </Block>
        <CheckoutFooter>
          <Button
            label="Start my free consultation"
            fullWidth
            type="submit"
            disabled={submitting}
          />
        </CheckoutFooter>
      </Form>
    </CheckoutPageWrapper>
  </CheckoutContent>
);

RegisterAccount.propTypes = {
  handleSubmit: PropTypes.func,
  handleRegisterSubmit: PropTypes.func,
  onShowLoginView: PropTypes.func,
  ...formPropTypes
};
