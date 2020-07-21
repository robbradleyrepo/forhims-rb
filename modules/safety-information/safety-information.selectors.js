import { createSelector, createStructuredSelector } from "reselect";
import { pathName as selectPathname } from "../../selectors/url";
import * as R from "ramda";
import safetyConstants from "./safety-information.constants";

import {
  getPdpPageSafetyInformationClosedState,
  getPdpPageScrollToSafetyInformationRequestTimestamp
} from "../../selectors/ui";
import { routesByProductId } from "../../content";

const mapRoutesToId = ([productId, routes]) =>
  routes.map(route => ({ productId, route }));

const productIdsRoutesDictionary = R.pipe(
  R.toPairs,
  R.reduce((acc, entry) => R.concat(acc, mapRoutesToId(entry)), [])
)(routesByProductId);

const getCurrentProductIdFromPathname = R.pipe(
  pathname => R.find(R.propEq("route", pathname))(productIdsRoutesDictionary),
  R.propOr(null, "productId")
);

const getCurrentProductSafetyInformation = productId =>
  safetyConstants[productId];

const selectProductSafetyInformation = createSelector(
  selectPathname,
  R.pipe(
    getCurrentProductIdFromPathname,
    getCurrentProductSafetyInformation
  )
);

export const safetyInformationConnector = createStructuredSelector({
  content: selectProductSafetyInformation,
  pdpPageScrollToSafetyInformationRequestTimestamp: getPdpPageScrollToSafetyInformationRequestTimestamp,
  isClosed: getPdpPageSafetyInformationClosedState
});
