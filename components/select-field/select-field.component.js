import React from "react";
import PropTypes from "prop-types";
import {
  SelectFieldStyle,
  SelectFieldWrapper,
  SelectTriangle
} from "./select-field.style";
import { BarStyle, LabelStyle } from "../text-field/text-field.style";
import { ErrorMessage } from "../form/form.style";
export const SelectField = ({
  label,
  options,
  input,
  meta,
  ...moreInputProps
}) => (
  <SelectFieldWrapper>
    <LabelStyle htmlFor={moreInputProps.id} raised={input.value}>
      {label}
    </LabelStyle>
    <SelectFieldStyle
      autoComplete={input.name}
      hasError={meta.error && meta.touched}
      {...input}
      {...moreInputProps}
    >
      <option value="" disabled />
      {options.map(({ value, label }) => (
        <option key={`${moreInputProps.id}-option-${value}`} value={value}>
          {label}
        </option>
      ))}
    </SelectFieldStyle>
    <BarStyle />
    <SelectTriangle />
    <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
  </SelectFieldWrapper>
);

SelectField.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ).isRequired
};
