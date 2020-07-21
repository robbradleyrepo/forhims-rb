import React from "react";

import PropTypes from "prop-types";
import { Field, Form } from "redux-form";

import { required } from "../../../utils/form-validation";
import { Block } from "../../block";
import { Button, BUTTON_VARIANTS } from "../../button";
import { FormError } from "../../form-error";
import { TextField } from "../../text-field";
import {
  CheckoutFooter,
  CheckoutTitle,
  CheckoutDescription,
  CheckoutPageWrapper,
  CheckoutContent
} from "../checkout.style";
import { SignInLink, FieldsWrapper } from "./forgot-password.style";

export function ForgotPasswordComponent(props) {
  let {
    submitting,
    handleSubmit,
    handleForgotSubmit,
    submitSucceeded,
    onShowLoginView,
    error,
    submitFailed
  } = props;

  return (
    <CheckoutContent>
      <CheckoutPageWrapper>
        {!submitting &&
          !submitFailed &&
          submitSucceeded && (
            <Block mb={4} textAlign="center">
              <CheckoutTitle>Reset Password Email Sent!</CheckoutTitle>
              <CheckoutDescription>
                Check your email for next steps.
              </CheckoutDescription>
            </Block>
          )}

        {!submitSucceeded && (
          <Form onSubmit={handleSubmit(handleForgotSubmit)}>
            <Block mb={3} pb={3} textAlign="center">
              <CheckoutTitle>Forgot Your Password?</CheckoutTitle>
              <CheckoutDescription>
                Enter your email to reset your password
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
            </FieldsWrapper>
            {!submitting &&
              submitFailed &&
              error && (
                <Block mb={4}>
                  <FormError testId="InvalidForgotCredentialsError">
                    {error}
                  </FormError>
                </Block>
              )}

            <CheckoutFooter>
              <Button
                label="Reset Password"
                isLoading={submitting}
                fullWidth
                type="submit"
                variant={BUTTON_VARIANTS.ACCENT}
              />
            </CheckoutFooter>
            <Block display="flex" textAlign="center" mt={4}>
              <CheckoutDescription>
                Back to{" "}
                <SignInLink type="button" onClick={onShowLoginView}>
                  Login
                </SignInLink>
              </CheckoutDescription>
            </Block>
          </Form>
        )}
      </CheckoutPageWrapper>
    </CheckoutContent>
  );
}

ForgotPasswordComponent.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleForgotSubmit: PropTypes.func,
  submitSucceeded: PropTypes.bool,
  onShowLoginView: PropTypes.func,
  error: PropTypes.string,
  submitFailed: PropTypes.bool
};
