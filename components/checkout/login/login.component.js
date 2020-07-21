import React from "react";
import PropTypes from "prop-types";

import { Field, Form, propTypes as formPropTypes } from "redux-form";
import { TextField } from "../../text-field";
import {
  CheckoutFooter,
  CheckoutTitle,
  CheckoutDescription,
  CheckoutContent,
  CheckoutPageWrapper
} from "../checkout.style";
import { FormError } from "../../form-error";
import { required } from "../../../utils/form-validation";
import { Button } from "../../button";
import { Block } from "../../block";

import { SignInLink, FieldsWrapper } from "./login.style";

export const Login = ({
  submitting,
  handleSubmit,
  handleLoginSubmit,
  onShowRegisterView,
  onShowForgotPasswordView,
  error,
  submitFailed
}) => (
  <CheckoutContent>
    <CheckoutPageWrapper>
      <Form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Block mb={3} pb={3} textAlign="center">
          <CheckoutTitle>Welcome Back!</CheckoutTitle>
          <CheckoutDescription>
            Fill in your details to get started on your free online consultation
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
          <Block>
            <Field
              component={TextField}
              label="Password"
              name="password"
              type="password"
              validate={[required]}
              disabled={submitting}
            />
          </Block>
        </FieldsWrapper>
        {!submitting &&
          submitFailed &&
          error && (
            <Block mb={4}>
              <FormError testId="InvalidLoginCredentialsError">
                {error}
              </FormError>
            </Block>
          )}
        <Block
          display="flex"
          flexDirection="column"
          textAlign="center"
          alignItems="center"
        >
          <CheckoutDescription>
            Don't have an account?{" "}
            <SignInLink type="button" onClick={onShowRegisterView}>
              Register
            </SignInLink>
          </CheckoutDescription>
          <CheckoutDescription>
            <SignInLink type="button" onClick={onShowForgotPasswordView}>
              Forgot Password?
            </SignInLink>
          </CheckoutDescription>
        </Block>
        <CheckoutFooter>
          <Button label="Login" disabled={submitting} fullWidth type="submit" />
        </CheckoutFooter>
      </Form>
    </CheckoutPageWrapper>
  </CheckoutContent>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
  handleLoginSubmit: PropTypes.func,
  onShowRegisterView: PropTypes.func,
  onShowForgotPasswordView: PropTypes.func,
  ...formPropTypes
};
