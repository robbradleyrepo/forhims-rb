"use strict";

import R from "ramda";

import { EmailValidator } from "commons-validator-js";

import {
  getDifferenceInDays,
  isDateValid,
  parseDate,
  convertUkToYearMonthDayFormat
} from "./date";

const validator = new EmailValidator();

const checked = message => value => (value === true ? undefined : message);

const required = value =>
  value && R.trim(value) ? undefined : "Required field.";

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const number = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) && isNaN(Number(value))
    ? "Must be a number"
    : undefined;

const minValue = R.curry((min, value) => {
  return value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;
});

const fieldValuesMatchEachOther = (
  errorMessage,
  firstFieldName,
  ...otherFieldNames
) => (value, allValues) =>
  otherFieldNames.every(
    fieldName => allValues[fieldName] === allValues[firstFieldName]
  )
    ? undefined
    : errorMessage;

const maxValue = R.curry((max, value) => {
  return value && value.length > max
    ? `Must be less than ${max} characters`
    : undefined;
});

const email = value =>
  value && !validator.isValid(value) ? "Invalid email address" : undefined;

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

const phoneNumber = value => {
  // our tests include spaces, input from the UI will not have spaces
  const valueWithoutSpaces = value && value.replace(/\s/g, "");

  const isValid =
    /^0[12357-9]\d{8,9}$/.test(valueWithoutSpaces) &&
    !/.*(\d)\1{6,}/.test(valueWithoutSpaces);
  return !isValid ? "Invalid phone number" : undefined;
};

const minLength = R.curry((min, value) => {
  return value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined;
});

const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums.slice(0, 11);
};

const normalizeAge = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(
    4,
    8
  )}`;
};

const numbersOnly = value => value.replace(/[^\d]/g, "");

const postcode = x =>
  x && !/^[A-Z][A-HJ-Y]?\d[A-Z\d]? \d[A-Z]{2}|GIR 0AA$/.test(x)
    ? "Invalid postcode"
    : undefined;

const age = dob => {
  const age = R.pipe(
    convertUkToYearMonthDayFormat,
    R.curry(parseDate)(R.__, "YYYY-MM-DD")
  )(dob);

  return (dob && getDifferenceInDays(new Date(), age) < 0) || !isDateValid(age)
    ? "Enter valid date of birth"
    : undefined;
};

module.exports = {
  alphaNumeric,
  checked,
  email,
  fieldValuesMatchEachOther,
  maxLength,
  maxValue,
  minLength,
  minValue,
  normalizeAge,
  normalizePhone,
  number,
  numbersOnly,
  phoneNumber,
  required,
  postcode,
  age
};
