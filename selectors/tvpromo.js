"use strict";

import R from "ramda";
import { route } from "./url";

const TAGS = {
  UTM_MEDIUM: "utm_medium",
  UTM_SOURCE: "utm_source"
};

const WHITELIST = [
  (x, _) => x[TAGS.UTM_MEDIUM] === "organic",
  (x, _) => x[TAGS.UTM_MEDIUM] === "referral",
  (x, _) => x[TAGS.UTM_SOURCE] === "bing",
  (x, _) => x[TAGS.UTM_SOURCE] === "direct",
  (x, _) => x[TAGS.UTM_SOURCE] === "adwords" && x[TAGS.UTM_MEDIUM] === "cpc",
  (x, _) => x[TAGS.UTM_SOURCE] === "google" && x[TAGS.UTM_MEDIUM] === "cpc",
  (x, _) => x[TAGS.UTM_SOURCE] === "tv" && x[TAGS.UTM_MEDIUM] === "im",
  (x, p) =>
    p === "/" &&
    R.compose(
      R.equals(0),
      R.length,
      R.keys
    )(x)
];

const stateToQueryParams = R.compose(
  R.mapObjIndexed(value => (value ? R.toLower(value) : null)),
  R.prop("query"),
  route
);

const stateToPathname = R.compose(
  R.prop("pathname"),
  route
);

module.exports = state => {
  let queryParams = stateToQueryParams(state);
  let pathname = stateToPathname(state);

  return R.any(fn => fn(queryParams, pathname), WHITELIST);
};
