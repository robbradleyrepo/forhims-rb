import { map } from "ramda";

import {
  createMaxWidthMediaQuery,
  createMinWidthMediaQuery,
  createRangeMediaQuery
} from "../../utils/breakpoints";

import { convertMediaQueryToAttribute } from "./picture.utils";

const imageQueries = {
  xs: createMaxWidthMediaQuery("small"),
  sm: createRangeMediaQuery("small", "medium"),
  md: createRangeMediaQuery("medium", "large"),
  lg: createMinWidthMediaQuery("large")
};

export const imageBreakpoints = map(convertMediaQueryToAttribute)(imageQueries);
