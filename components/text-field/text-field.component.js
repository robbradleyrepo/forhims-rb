import React from "react";
import PropTypes from "prop-types";
import { assocPath } from "ramda";

import {
  BarStyle,
  LabelStyle,
  TextFieldStyle,
  TextFieldWrapper
} from "./text-field.style";
import { ErrorMessage } from "../form/form.style";
import { hasValue } from "../../utils";

export const TextFieldComponent = React.forwardRef(
  ({ label, input, meta, className, context, ...moreInputProps }, ref) => {
    const autoComplete = context ? `${context} ${input.name}` : input.name;
    return (
      <TextFieldWrapper className={className}>
        <LabelStyle htmlFor={input.id} raised={input.value || meta.touched}>
          {label}
        </LabelStyle>
        <TextFieldStyle
          ref={ref}
          autoComplete={autoComplete}
          hasError={meta.error && meta.touched}
          {...input}
          {...moreInputProps}
        />
        <BarStyle />
        <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
      </TextFieldWrapper>
    );
  }
);

TextFieldComponent.propTypes = {
  context: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

// Add autocomplete lifecycle hooks
// Based on Material UI fix
// https://github.com/mui-org/material-ui/pull/3372/files#diff-c36625bdd9426b83a8a0ae77d0ab1492
const AUTOFILL_POLL_MS = 100;

// Manually 'touch' input when autofill is detected
const addDirtyStateAfterAutoFill = inputProps =>
  assocPath(["meta", "touched"], true, inputProps);

export class TextField extends React.Component {
  state = {
    hasInputValue: false
  };

  autofillTimer = null;
  input = React.createRef();

  componentDidMount() {
    this.startAutofillObserver();
  }
  componentWillReceiveProps(nextProps) {
    const hasInputValue = hasValue(nextProps.input.value);

    if (hasInputValue && !this.state.hasInputValue) {
      this.setState({ hasInputValue });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.hasInputValue && !prevState.hasInputValue) {
      this.stopAutofillObserver();
    }
  }
  checkForAutofilledValue = () => {
    const input = this.input.current;
    if (this.state.hasInputValue) {
      // could have been switched to true during the timer
      return;
    }

    let hasInputValue;
    try {
      hasInputValue = input.matches(":autofill");
    } catch (err) {
      try {
        hasInputValue = input.matches(":-webkit-autofill");
      } catch (err) {
        hasInputValue = false;
      }
    }
    this.setState({
      hasInputValue
    });
  };
  startAutofillObserver = () => {
    this.autofillTimer = setInterval(
      this.checkForAutofilledValue,
      AUTOFILL_POLL_MS
    );
  };
  stopAutofillObserver = () => {
    clearInterval(this.autofillTimer);
  };

  componentWillUnmount() {
    this.stopAutofillObserver();
  }
  render() {
    const nextInputProps = this.state.hasInputValue
      ? addDirtyStateAfterAutoFill(this.props)
      : this.props;
    return <TextFieldComponent ref={this.input} {...nextInputProps} />;
  }
}
