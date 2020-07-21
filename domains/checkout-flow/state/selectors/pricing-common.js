import { currency } from "../../../../utils";
import R from "ramda";

export const addTotalsToLineItems = (totals, lineItems) =>
  R.compose(
    R.values,
    R.reduce((acc, key) => {
      const item = lineItems[key];

      // include items with an value (positive or negative), exclude null, undefined, 0
      return totals[key] > 0 || totals[key] < 0
        ? {
            ...acc,
            [key]: R.assoc("value", currency(totals[key]), item)
          }
        : acc;
    }, {}),
    R.keys
  )(lineItems);
