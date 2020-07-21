import { multiply, pipe } from "ramda";
import { stripUnit } from "polished";

import { breakpoints } from "../theme/breakpoints";

const BASE_FONT_SIZE = 16;

// Mobile first media queries
export const createMinWidthMediaQuery = size =>
  `@media (min-width: ${breakpoints[size] + 1}px)`;

// Media queries for device specific overrides

export const createMaxWidthMediaQuery = size =>
  `@media (max-width: ${breakpoints[size]}px)`;

export const createRangeMediaQuery = (min, max) =>
  `@media (min-width: ${breakpoints[min] + 1}px) and (max-width: ${
    breakpoints[max]
  }px)`;

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

export const convertRemToPx = remValue =>
  pipe(
    stripUnit,
    multiply(BASE_FONT_SIZE)
  )(remValue);

const convertRemRangeToPx = ({ min, max }) =>
  pipe(
    maxRems => combineRems(invertRem(min), maxRems),
    stripUnit,
    multiply(BASE_FONT_SIZE)
  )(max);

export const createFluidCssValueByBreakpoint = ({
  breakpointMin,
  breakpointMax,
  min,
  max
}) => {
  const minWidth = breakpoints[breakpointMin] + 1;
  const maxWidth = breakpoints[breakpointMax];
  const sizeRange = convertRemRangeToPx({ min, max });

  return `${min} + (${sizeRange} * (100vw - ${minWidth}px) / ${maxWidth -
    minWidth})`;
};
