import PropTypes from "prop-types";
import React from "react";
import { Field, propTypes as formPropTypes, reduxForm } from "redux-form";
import { hasValue } from "../../../../../utils";

import { Block } from "../../../../../components/block";
import { Divider, FormPageTitle } from "../cancel-subscription.style";
import { TextField } from "../../../../../components/text-field";

import { QuestionnaireOption } from "../questionnaire-option";
import { Button, BUTTON_VARIANTS } from "../../../../../components/button";
import { required } from "../../../../../utils/form-validation";
import { ErrorMessage } from "../../../../../components/form/form.style";

const FormPage = ({
  handleSubmit,
  handlePageSubmit,
  handleClickPrevious,
  hasPreviousPage,
  title,
  name,
  options,
  textInputFields,
  invalid
}) => (
  <React.Fragment>
    <Block py={3}>
      <FormPageTitle>{title}</FormPageTitle>
    </Block>
    <Divider />
    <form onSubmit={handleSubmit(handlePageSubmit)}>
      <Block py={4}>
        {hasValue(options) && (
          <Block>
            <Field
              name={name}
              options={options}
              validate={[required]}
              component={({ input, options, meta: { touched, error } }) => (
                <React.Fragment>
                  {options.map(({ label, value, alwaysDisabled }) => (
                    <QuestionnaireOption
                      key={value}
                      id={`${name}-${value}`}
                      name={name}
                      value={value}
                      input={input}
                      label={label}
                      alwaysDisabled={alwaysDisabled}
                    />
                  ))}
                  {touched &&
                    error && (
                      <Block pl={4}>
                        <ErrorMessage>{error}</ErrorMessage>
                      </Block>
                    )}
                </React.Fragment>
              )}
            />
          </Block>
        )}

        {textInputFields.map(
          ({ label: inputLabel, name: inputName, required: inputRequired }) => (
            <Block key={`${name}-${inputName}`} pt={4} px={4}>
              <Field
                component={TextField}
                id={`${name}-${inputName}`}
                label={inputLabel}
                name={`${name}-${inputName}`}
                validate={inputRequired ? [required] : []}
              />
            </Block>
          )
        )}
      </Block>
      <Divider />
      <Block pt={4} pb={3} display="flex" justifyContent="space-between">
        {hasPreviousPage && (
          <Button
            type="button"
            onClick={handleClickPrevious}
            label="← Back"
            variant={BUTTON_VARIANTS.FLAT}
          />
        )}
        <Button
          type="submit"
          disabled={invalid}
          label="Next"
          fullWidth={!hasPreviousPage}
        />
      </Block>
    </form>
  </React.Fragment>
);
FormPage.propTypes = {
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  handlePageSubmit: PropTypes.func,
  withComments: PropTypes.bool,
  commentLabel: PropTypes.string,
  ...formPropTypes
};

export const CancelSubscriptionFormPage = reduxForm({
  form: "cancel-subscription",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(FormPage);
