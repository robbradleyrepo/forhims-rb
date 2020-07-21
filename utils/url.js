"use strict";

import R from "ramda";
import { browserHistory } from "react-router";

const getQueryParams = () =>
  browserHistory &&
  browserHistory.getCurrentLocation &&
  browserHistory.getCurrentLocation().query;

function route(params) {
  browserHistory.replace(params);
}

function addQuery(payload) {
  const location = R.pick(
    ["pathname", "query"],
    browserHistory.getCurrentLocation()
  );
  const query = R.merge(location.query, payload);
  const newLocation = R.merge(location, { query });
  browserHistory.push(newLocation);
}

// const getQuery = x =>
//   R.compose(
//     R.prop(x),
//     getQueryParams
//   )();

function removeQueryParams(queryNames) {
  const location = browserHistory.getCurrentLocation();
  queryNames.forEach(q => delete location.query[q]);
  browserHistory.replace(location);
}

function set(params) {
  browserHistory.replace(params);
}

/**
 * Adds a key/value object of additional params to a location.search
 * string that may or may not already have params.
 *
 * This is probably more efficient using pure browser APIs (like URLSearchParams),
 * but that would break the server side rendering.
 *
 * @author Max Barry <mbarry@forhims.com>
 *
 * @param {string} searchString The location.search value
 * @param {objevt} extraParams key/value object that contains additional params to add
 */
export function addQueryParamToSearchString(searchString, extraParams) {
  // Typesafety check
  if (typeof searchString !== "string") return searchString;
  // If the searchstring starts with a ? (which it should in most browsers) then slice it off
  if (searchString.startsWith("?")) searchString = searchString.slice(1);
  // Reconstitute the query params with the new extra values
  const params = [
    ...searchString.split("&"),
    ...Object.entries(extraParams || {}).map(
      ([key, value]) => `${key}=${value}`
    )
  ].filter(Boolean);

  return params.length ? "?" + params.join("&") : searchString;
}

function redirectWithQueryParams(redirectLocation, queryParamsToKeep) {
  const location = browserHistory.getCurrentLocation();
  const newLocationQuery = {};
  queryParamsToKeep.forEach(q => (newLocationQuery[q] = location.query[q]));
  location.query = newLocationQuery;
  location.pathname = redirectLocation;
  browserHistory.replace(location);
}

export default {
  addQuery,
  getQueryParams,
  removeQueryParams,
  route,
  set,
  redirectWithQueryParams
};

// "use strict";

// import R from "ramda";
// import { browserHistory } from "react-router";

// function route(params) {
//   browserHistory.replace(params);
// }

// const getQueryParams = () =>
//   R.pick(["pathname", "query"], browserHistory.getCurrentLocation());

// function addQuery(payload) {
//   const qp = getQueryParams();
//   const newLocation = R.merge(qp, { query: R.merge(qp, payload) });
//   browserHistory.push(newLocation);
// }

// function getQuery(key) {
//   const qp = getQueryParams();
//   return R.prop(key, qp);
// }

// function removeQueryParams(queryNames) {
//   const qp = getQueryParams();
//   queryNames.forEach(q => delete qp[q]);
//   browserHistory.replace(location);
// }

// function set(params) {
//   browserHistory.replace(params);
// }

// function redirectWithQueryParams(redirectLocation, queryParamsToKeep) {
//   const location = browserHistory.getCurrentLocation();
//   const newLocationQuery = {};
//   queryParamsToKeep.forEach(q => (newLocationQuery[q] = location.query[q]));
//   location.query = newLocationQuery;
//   location.pathname = redirectLocation;
//   browserHistory.replace(location);
// }

// export default {
//   addQuery,
//   getQuery,
//   removeQueryParams,
//   route,
//   set,
//   redirectWithQueryParams
// };
