import { hasValue } from "../../../utils";

const isValidSpanForBreakpoint = (span, columns) =>
  hasValue(span) && hasValue(columns) && span < columns;

export const calculateCenteredItemOffset = (span, columns) =>
  isValidSpanForBreakpoint(span, columns)
    ? Math.round((columns - span) / 2)
    : 0;

export const calculateCenteredItemSpacing = (span, columns) =>
  isValidSpanForBreakpoint(span, columns) ? span / 2 : 0;

export const calculateWidthFromGridSpan = (span, columns) => {
  const percentageWidth = span && columns ? span / columns : 0;
  return percentageWidth ? `${percentageWidth * 100}%` : "0";
};
