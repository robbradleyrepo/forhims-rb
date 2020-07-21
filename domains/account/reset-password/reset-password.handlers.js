import queryString from "query-string";
import { SubmissionError } from "redux-form";
import { clone } from "ramda";

import { post as httpPost } from "../../../utils/http";
import config from "../../../config";

const { env, paths, url } = config.api;

/**
 * rpc/reset_password_forgot requires 2 paramaters to reset a password:
 *  - The new password
 *  - The action ID that Braze (email ESP) passes via URL paramater
 *
 * The action ID is a UUID generated in the database and lets us authenticate
 * reset requests against a user, without having to auth a user (which we can't obviously)
 * or pass an email via the URL.
 *
 * @author Max <mbarry@forhims.com>
 * @param {*} values Values from the form
 */
export const onSubmit = (values, dispatch, props) => {
  return new Promise((resolve, reject) => {
    // Throw err if new password and new password confirmation don't match
    if (values.newPassword !== values.newPasswordCopy) {
      throw new SubmissionError({
        newPassword: "Password values do not match.",
        _error: "Registration failed!"
      });
    }
    // Fetch URL params
    const qs = queryString.parse(location.search);
    // Merge the form values with the action ID in the URL
    const payload = {
      newPassword: values.newPassword,
      actionId: qs.action_id
    };
    // Ensure that we have truthy values for each key in our form
    const requiredPayloadFields = ["actionId", "newPassword"];
    const payloadIsValid = requiredPayloadFields.every(
      field => field in payload
    );
    // if payload is missing any required fields, we are going to throw and record an error
    if (!payloadIsValid) {
      const payloadClone = clone(payload);
      // change payload values to true for when a value is present and false for when that field is empty
      requiredPayloadFields.forEach(
        field => (payloadClone[field] = !!payload[field])
      );
      $GTM.resetPassword.failure({
        error: "Trying to submit without all required fields",
        data: payloadClone
      });
      throw new SubmissionError({
        _error:
          "We're having trouble resetting your password! Please contact support@forhims.com"
      });
    }

    httpPost({
      payload,
      url: `${url}/${env}/${paths.forgotPasswordReset}`
    })
      .then(resolve)
      .catch(error => reject(new SubmissionError({ _error: error.message })));
  });
};
