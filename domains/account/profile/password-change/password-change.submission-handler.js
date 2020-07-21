import queryString from "query-string";
import config from "../../../../config";
import http from "../../../../utils/http";
import { SubmissionError, reset } from "redux-form";
import { FORM_NAME } from "./password-change.constants";

const { url, env, paths } = config.api;

export const handleSubmit = (values, dispatch, props) => {
  return new Promise((resolve, reject) => {
    // Sync validation
    if (values.newPassword !== values.newPasswordCopy) {
      // passwords must match
      throw new SubmissionError({
        newPassword: "Password values do not match.",
        _error: "Registration failed!"
      });
    }

    const form = R.pick(["oldPassword", "newPassword"], values);
    const qs = queryString.parse(location.search);
    const partial = props.token
      ? { email: props.me.email, actionId: null }
      : { email: null, actionId: props.actionId, oldPassword: qs.token };
    const payload = R.merge(form, partial);
    const requiredPayloadFields = [
      "email",
      "actionId",
      "newPassword",
      "oldPassword"
    ];
    const payloadIsValid = requiredPayloadFields.every(
      field => field in payload
    );
    // if payload is missing any required fields, we are going to throw and record an error
    if (!payloadIsValid) {
      const payloadClone = R.clone(payload);
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
          "We're having trouble resetting your password! Please contact support_uk@forhims.co.uk"
      });
    }
    http
      .post({
        url: `${url}/${env}/${paths.pwdReset}`,
        payload
      })
      .then(_ => dispatch(reset(FORM_NAME)))
      .then(resolve)
      .catch(error => reject(new SubmissionError({ _error: error.message })));
  });
};
