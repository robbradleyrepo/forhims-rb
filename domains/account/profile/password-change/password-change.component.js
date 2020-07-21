import React from "react";
import { Field, Form } from "redux-form";

import { Block } from "../../../../components/block";
import { Button } from "../../../../components/button";
import { P } from "../../../../components/fonts/p";
import { FormError } from "../../../../components/form-error";

import {
  required,
  minLength,
  fieldValuesMatchEachOther
} from "../../../../utils/form-validation";
import { spacing } from "../../../../theme/spacing";
import { TextField } from "../../../../components/text-field";
import { PasswordChangeTypes } from "./password-change.types";

const minLength2 = minLength(2);
const newPasswordMatchesConfirmPassword = fieldValuesMatchEachOther(
  "New passwords must match each other",
  "newPassword",
  "newPasswordCopy"
);

export const PasswordChange = ({
  error,
  handleSubmit,
  submitButtonLabel,
  submitSucceeded,
  submitting,
  pristine
}) => {
  return (
    <div>
      {!submitSucceeded && (
        <Form onSubmit={handleSubmit}>
          <Block textAlign="center" mb={spacing.five} />
          <Block mb={4}>
            <Field
              component={TextField}
              label="Current Password"
              name="oldPassword"
              type="password"
              validate={[required]}
            />
          </Block>
          <Block mb={4}>
            <Field
              component={TextField}
              label="New Password"
              name="newPassword"
              type="password"
              validate={[required, minLength2]}
            />
          </Block>
          <Block mb={4}>
            <Field
              component={TextField}
              label="Confirm Password"
              name="newPasswordCopy"
              type="password"
              validate={[
                required,
                minLength2,
                newPasswordMatchesConfirmPassword
              ]}
            />
          </Block>
          <Button
            fullWidth
            type="submit"
            label={submitButtonLabel}
            disabled={pristine || submitting}
          />
          {error && (
            <Block mt={4} mb={4} textAlign="center">
              <FormError>{error}</FormError>
            </Block>
          )}
        </Form>
      )}
      {submitSucceeded && (
        <Block mt={4} mb={4} textAlign="center">
          <P>Your password was successfully changed.</P>
        </Block>
      )}
    </div>
  );
};

PasswordChange.propTypes = PasswordChangeTypes;
