import React from "react";
import PropTypes from "prop-types";
import {
  ListItemRadioInput,
  StyledRadio
} from "../radio-field-list-item.style";
import {
  FieldWrapper,
  PlainLabel,
  TextWrapper
} from "./plain-radio-field.style";

export const PlainRadioField = ({
  input,
  meta,
  children,
  value,
  ...moreInputProps
}) => {
  const { id, disabled = false } = moreInputProps;
  const { onChange } = input;
  return (
    <FieldWrapper disabled={disabled}>
      <ListItemRadioInput
        type="radio"
        value={value}
        id={id}
        disabled={disabled}
        checked={input.value === value}
        onChange={() => onChange(value)}
      />
      <PlainLabel htmlFor={id} disabled={disabled}>
        <StyledRadio />
        <TextWrapper>{children}</TextWrapper>
      </PlainLabel>
    </FieldWrapper>
  );
};

PlainRadioField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onSelect: PropTypes.func,
  children: PropTypes.any,
  value: PropTypes.any
};
