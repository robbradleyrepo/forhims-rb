import PropTypes from "prop-types";
import { propTypes as formPropTypes } from "redux-form";

export const PasswordChangeTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  ...formPropTypes
};
