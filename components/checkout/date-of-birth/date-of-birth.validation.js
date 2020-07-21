import {
  age,
  minLength,
  number,
  required
} from "../../../utils/form-validation";

const minLength2 = minLength(2);
const minLength4 = minLength(4);

const CURRENT_YEAR = new Date().getFullYear();
const MAX_YEARS = 100;

const isWithinYearRange = value =>
  (value && value > CURRENT_YEAR) || value < CURRENT_YEAR - MAX_YEARS
    ? `Must be a valid year`
    : undefined;

export const validateDate = [required, number, minLength2];
export const validateYear = [required, number, minLength4, isWithinYearRange];

export const validateEntireDateOfBirth = values => {
  const { day, month, year } = values;

  if (!(day && month && year)) {
    return {};
  }

  const formatDob = num => num.toString().padStart(2, 0);

  const dateOfBirth = `${formatDob(day)}/${formatDob(month)}/${year}`;
  if (age(dateOfBirth)) {
    return { invalidDate: "Please enter a valid date." };
  }

  return {};
};
