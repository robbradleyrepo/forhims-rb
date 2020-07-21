import {
  format as dateFormat,
  parse as dateParse,
  differenceInYears,
  differenceInDays,
  isValid,
  addDays,
  addHours,
  getTime,
  isAfter
} from "date-fns";
import { pipe, max } from "ramda";

import miscUtils from "./misc";
const { hasValue } = miscUtils;

export const isDateValid = date => (hasValue(date) ? isValid(date) : false);

export const formatDate = (formatStr = "") => date =>
  hasValue(date) ? dateFormat(date, formatStr) : "";

export const addDaysToDate = (amount = 0) => date => addDays(date, amount);

export const addHoursToDate = (amount = 0) => date => addHours(date, amount);

const isParsedDateValid = d => d instanceof Date && !isNaN(d);

// Eg. April 34th is not a "real" date. If format is unknown, assume it's okay.
// Mainly to fix overflow in date-fns 1.30 https://github.com/date-fns/date-fns/issues/549
export const isDateInCalendarRange = (
  originalDate,
  parsedDate,
  originalFormat
) =>
  !hasValue(originalFormat) ||
  dateFormat(parsedDate, originalFormat) === originalDate;

export const parseDate = (date, format) => {
  if (hasValue(date)) {
    const parsedDate = dateParse(date);
    const dateIsValid = isParsedDateValid(parsedDate);
    const dateIsCalendarDate = isDateInCalendarRange(date, parsedDate, format);

    return dateIsValid && dateIsCalendarDate ? parsedDate : null;
  }
  return null;
};

export const getDifferenceInYears = (dateLeft, dateRight) =>
  differenceInYears(dateLeft, dateRight);

export const getDifferenceInDays = (dateLeft, dateRight) =>
  differenceInDays(dateLeft, dateRight);

export const getTimeInMs = date => (isDateValid(date) ? getTime(date) : null);

export const isDateAfter = dateToCompare => date =>
  isAfter(date, dateToCompare);

export const convertUkToYearMonthDayFormat = dob => {
  if (!dob) {
    return "";
  }
  const parts = dob.match(/(\d+)/g);
  const val = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return val;
};

export const convertUkToUsDateFormat = dob => {
  if (!dob) {
    return "";
  }
  const parts = dob.match(/(\d+)/g);
  return `${parts[1]}-${parts[0]}-${parts[2]}`;
};

export const convertDateOfBirthToAge = dateString =>
  hasValue(dateString)
    ? pipe(
        parseDate,
        jsDate => getDifferenceInYears(Date.now(), jsDate),
        max(0)
      )(dateString)
    : 0;
