import { connect } from "react-redux";
import { compose, withProps } from "recompose";
import { reduxForm } from "redux-form";

import { BasicInfoComponent } from "./basic-info.component";
import { profileConnector } from "../profile.selectors";
import { withEditingState } from "../profile.utils";

import { user } from "../../../../actions";
import { convertUkToUsDateFormat } from "../../../../utils/date";

const { updateUser } = user;

const dispatchers = {
  updateUser
};

export const BasicInfoContainer = compose(
  connect(
    profileConnector,
    dispatchers
  ),
  withEditingState,
  withProps(
    ({
      userProfile: { firstName, lastName, phone, dob, email },
      updateUser,
      toggleIsEditing
    }) => ({
      initialValues: { firstName, lastName, phone, dob, email },
      handleSaveBasicInfo: formValues => {
        updateUser({
          ...formValues,
          dob: convertUkToUsDateFormat(formValues.dob)
        });
        toggleIsEditing(false);
      }
    })
  ),
  reduxForm({ form: "profile-basic-info" })
)(BasicInfoComponent);
