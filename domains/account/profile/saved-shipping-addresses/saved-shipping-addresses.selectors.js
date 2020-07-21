import { createSelector, createStructuredSelector } from "reselect";
import { propOr } from "ramda";

import { getMe } from "../../../../selectors/me";
import { selectStates } from "../../../checkout-flow/state/selectors/shipping";

const selectShippingAddresses = createSelector(getMe, propOr([], "addresses"));

export const savedShippingAddressesConnector = createStructuredSelector({
  addresses: selectShippingAddresses,
  stateOptions: selectStates
});
