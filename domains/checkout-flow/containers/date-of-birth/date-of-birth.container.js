import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";

import { ACCOUNT } from "../../state/actions";
import { DateOfBirth } from "../../components/date-of-birth";

const actions = {
  dateOfBirth: ACCOUNT.dateOfBirth
};

export const DateOfBirthContainer = compose(
  connect(
    null,
    actions
  ),
  withHandlers({
    handleDateOfBirthSubmit: props => () =>
      new Promise((resolve, reject) => {
        props.dateOfBirth(resolve, reject);
      })
  })
)(DateOfBirth);
