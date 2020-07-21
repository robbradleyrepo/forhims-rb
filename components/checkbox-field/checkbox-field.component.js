import React from "react";
import PropTypes from "prop-types";

import {
  CheckboxFieldWrapper,
  CheckboxFieldStyle,
  CheckboxStyleWrapper,
  CheckmarkSpan,
  CheckboxFieldLabel
} from "./checkbox-field.style";
import { ErrorMessage } from "../form/form.style";
import { Block } from "../block";
import ReactMarkdown from "react-markdown";

export const CheckboxField = React.forwardRef(
  ({ testId, label, input, meta, ...moreInputProps }, ref) => {
    return (
      <Block>
        <CheckboxFieldWrapper>
          <CheckboxStyleWrapper>
            <CheckboxFieldStyle
              autoComplete={input.name}
              hasError={meta.error && meta.touched}
              type="checkbox"
              {...input}
              {...moreInputProps}
              ref={ref}
            />
            <CheckmarkSpan />
          </CheckboxStyleWrapper>
          <Block>
            <CheckboxFieldLabel
              htmlFor={moreInputProps.id}
              data-testid={testId}
            >
              <ReactMarkdown source={label} linkTarget="_blank" />
            </CheckboxFieldLabel>
          </Block>
        </CheckboxFieldWrapper>
        <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
      </Block>
    );
  }
);

CheckboxField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};
