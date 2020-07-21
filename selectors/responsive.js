import { equals, filter, head, pipe, prop, toPairs } from "ramda";
import { createSelector } from "reselect";

export const filterPairByValue = ([key, value]) => equals(true)(value);
export const selectKeyFromPair = ([key, value]) => key;

export const selectResponsiveState = prop("responsive");

export const selectResponsiveDeviceType = createSelector(
  selectResponsiveState,
  responsiveState =>
    pipe(
      toPairs,
      filter(filterPairByValue),
      head,
      selectKeyFromPair
    )(responsiveState)
);

export const selectResponsiveFakeWidth = createSelector(
  selectResponsiveState,
  prop("fakeWidth")
);

export const selectIsMobile = createSelector(
  selectResponsiveState,
  prop("mobile")
);
