import { css } from "styled-components";
import { stripUnit } from "polished";
import { pipe, multiply } from "ramda";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { breakpoints } from "../../theme/breakpoints";
import { BASE_FONT_SIZE } from "../../theme/typography";
import { combineRems, invertRem } from "../../utils/rem";

// Find difference between two rem values in px
// Ex. 1rem, 3rem => 2rem
// Passed to calc(), which cannot perform scaling operations on rem units
const convertRemRangeToPx = ({ min, max }) =>
  pipe(
    maxRems => combineRems(invertRem(min), maxRems),
    stripUnit,
    multiply(BASE_FONT_SIZE)
  )(max);

export const createFluidFontSizingByBreakpoint = ({
  breakpointMin,
  breakpointMax,
  min,
  max
}) => {
  const minWidth = breakpoints[breakpointMin] + 1;
  const maxWidth = breakpoints[breakpointMax];
  const sizeRange = convertRemRangeToPx({ min, max });

  const fontScaleCalculation = `${min} + (${sizeRange} * (100vw - ${minWidth}px) / ${maxWidth -
    minWidth})`;
  return css`
    ${createMinWidthMediaQuery(breakpointMin)} {
      font-size: calc(${fontScaleCalculation});
    }
  `;
};
