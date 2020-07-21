import { createSelector, createStructuredSelector } from "reselect";
import { nthArg, propOr } from "ramda";

import { hasFutureShipDate, formatShippingDate } from "./pdp-hero.utils";
import { ADDITIONAL_INFO_LABELS } from "./pdp-hero.constants";

const selectProps = nthArg(1);

const selectShipsOnDate = createSelector(selectProps, propOr(null, "shipsOn"));
const selectAdditionalInfoType = createSelector(
  selectProps,
  propOr(null, "additionalInfoType")
);

const selectHasFutureShipDate = createSelector(
  selectShipsOnDate,
  hasFutureShipDate
);

const selectFormattedShippingDate = createSelector(
  selectShipsOnDate,
  formatShippingDate
);

export const selectAdditionalInfoLabel = createSelector(
  selectAdditionalInfoType,
  infoType => propOr("", infoType)(ADDITIONAL_INFO_LABELS)
);

export const PdpHeroConnector = createStructuredSelector({
  additionalInfoLabel: selectAdditionalInfoLabel,
  delayedShippingDate: selectFormattedShippingDate,
  isShippingDelayed: selectHasFutureShipDate
});
