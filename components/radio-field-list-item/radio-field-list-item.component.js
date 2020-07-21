import React from "react";
import PropTypes from "prop-types";
import {
  ListItemWrapper,
  ListItemRadioInput,
  ListItemLabel,
  StyledRadio
} from "./radio-field-list-item.style";

export const RadioFieldListItem = ({
  input,
  meta,
  children,
  value,
  testId,
  ...moreInputProps
}) => {
  const { id } = moreInputProps;
  const { onChange } = input;

  return (
    <ListItemWrapper>
      <ListItemRadioInput
        type="radio"
        value={value}
        checked={input.value === value}
        onChange={() => onChange(value)}
        id={id}
      />
      <ListItemLabel
        htmlFor={id}
        onClick={() => onChange(value)}
        data-testid={testId}
      >
        <StyledRadio />
        {children}
      </ListItemLabel>
    </ListItemWrapper>
  );
};

RadioFieldListItem.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onSelect: PropTypes.func,
  children: PropTypes.any,
  testId: PropTypes.string,
  value: PropTypes.any
};
