import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

import { DateOfBirth as DateOfBirthComponent } from "../../../../components/checkout/date-of-birth";
import { validateEntireDateOfBirth } from "../../../../components/checkout/date-of-birth/date-of-birth.validation";

const DateOfBirthForm = reduxForm({
  form: "date-of-birth",
  validate: validateEntireDateOfBirth
})(DateOfBirthComponent);

export const DateOfBirth = ({ handleDateOfBirthSubmit }) => (
  <DateOfBirthForm handleDateOfBirthSubmit={handleDateOfBirthSubmit} />
);

DateOfBirth.propTypes = {
  handleDateOfBirthSubmit: PropTypes.func
};
