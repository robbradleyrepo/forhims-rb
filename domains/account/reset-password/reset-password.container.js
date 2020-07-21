import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { reduxForm } from "redux-form";

import { showDrawerWithContentId } from "../../../actions/drawer";
import { onSubmit } from "./reset-password.handlers";
import { ResetPasswordComponent } from "./reset-password.component";

const dispatchers = {
  showDrawer: showDrawerWithContentId
};

const mapStateToProps = state => {
  return {};
};

export default compose(
  connect(
    mapStateToProps,
    dispatchers
  ),
  withHandlers({
    handleLoginClick: ({ showDrawer }) => {
      showDrawer("login");
    }
  }),
  reduxForm({ form: "reset-password", onSubmit })
)(ResetPasswordComponent);
