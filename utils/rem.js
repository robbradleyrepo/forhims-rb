import { multiply, pipe } from "ramda";
import { stripUnit } from "polished";

// Decorate a number with the "rem" unit of measurement
export const addRemUnit = value => `${value}rem`;

// Internal use only - tally a combination of rem values
const combineRemsReducer = (total, value) => total + stripUnit(value);

// Add up a set of rem values and return as an "rem" unit
// Use to combine values from the spacing system for edge cases
export const combineRems = (...values) =>
  addRemUnit(values.reduce(combineRemsReducer, 0));

// Return the inverse of a given rem value
// Useful for creating responsive negative margins
export const invertRem = value => addRemUnit(stripUnit(value) * -1);

export const applyRatioToRem = (value, ratio) =>
  pipe(
    stripUnit,
    multiply(ratio),
    addRemUnit
  )(value);
