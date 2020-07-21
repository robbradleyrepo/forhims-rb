import { connect } from "react-redux";

import { passwordChangeConnector } from "./password-change.selectors";
import { PasswordChange } from "./password-change.component";
import { reduxForm } from "redux-form";
import { FORM_NAME } from "./password-change.constants";
import { handleSubmit } from "./password-change.submission-handler";

export const PasswordChangeContainer = connect(
  passwordChangeConnector,
  null
)(reduxForm({ form: FORM_NAME, onSubmit: handleSubmit })(PasswordChange));
