import React from "react";

import PropTypes from "prop-types";
import { Field, Form } from "redux-form";

import {
  required,
  minLength,
  fieldValuesMatchEachOther
} from "../../../utils/form-validation";
import { FormError } from "../../../components/form-error";
import { TextField } from "../../../components/text-field";
import { Button, BUTTON_VARIANTS } from "../../../components/button";
import { Block } from "../../../components/block";
import {
  ResetPasswordWrapper,
  ResetPasswordWrapperInner,
  ResetPasswordTitle,
  ResetPasswordDescription,
  FieldsWrapper
} from "./reset-password.style";

const minLength2 = minLength(2);
const newPasswordMatchesConfirmPassword = fieldValuesMatchEachOther(
  "New passwords must match each other",
  "newPassword",
  "newPasswordCopy"
);

export const ResetPasswordComponent = ({
  error,
  handleLoginClick,
  handleSubmit,
  submitSucceeded,
  submitting,
  pristine
}) => (
  <ResetPasswordWrapper>
    <ResetPasswordWrapperInner>
      {submitSucceeded && (
        <Block mb={5} textAlign="center">
          <ResetPasswordTitle>Password Reset!</ResetPasswordTitle>
          <ResetPasswordDescription>
            You can now log into your account using your new password.
          </ResetPasswordDescription>
          <Block mt={4}>
            <Button
              onClick={handleLoginClick}
              label="Login"
              fullWidth
              variant={BUTTON_VARIANTS.ACCENT}
            />
          </Block>
        </Block>
      )}
      {!submitSucceeded && (
        <React.Fragment>
          <Block mb={5} textAlign="center">
            <ResetPasswordTitle>Reset Password</ResetPasswordTitle>
            <ResetPasswordDescription>
              Create a new password below
            </ResetPasswordDescription>
          </Block>
          <Form onSubmit={handleSubmit}>
            <FieldsWrapper>
              <Block mb={4}>
                <Field
                  component={TextField}
                  label="Enter New Password"
                  name="newPassword"
                  type="password"
                  validate={[required, minLength2]}
                />
              </Block>
            </FieldsWrapper>
            <FieldsWrapper>
              <Block mb={4}>
                <Field
                  component={TextField}
                  label="Confirm New Password"
                  name="newPasswordCopy"
                  type="password"
                  validate={[
                    required,
                    minLength2,
                    newPasswordMatchesConfirmPassword
                  ]}
                />
              </Block>
            </FieldsWrapper>
            <Button
              label="Reset Password"
              disabled={pristine}
              isLoading={submitting}
              fullWidth
              type="submit"
              variant={BUTTON_VARIANTS.ACCENT}
            />
            {error && (
              <Block mt={4} mb={4} textAlign="center">
                <FormError>{error}</FormError>
              </Block>
            )}
          </Form>
        </React.Fragment>
      )}
    </ResetPasswordWrapperInner>
  </ResetPasswordWrapper>
);

ResetPasswordComponent.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};
