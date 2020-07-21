import React from "react";
import PropTypes from "prop-types";

import { FormErrorLabel } from "./form-error.style";

export const FormError = ({ children, testId = null }) => (
  <FormErrorLabel data-testid={testId}>{children}</FormErrorLabel>
);
FormError.propTypes = {
  children: PropTypes.node,
  testId: PropTypes.string
};
