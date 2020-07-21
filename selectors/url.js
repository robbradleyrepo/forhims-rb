import R from "ramda";

const route = R.path(["routing", "locationBeforeTransitions"]);

const pathName = R.path(["routing", "locationBeforeTransitions", "pathname"]);

const queryParam = x => state =>
  R.compose(
    R.path(["query", x]),
    route
  )(state);

module.exports = {
  queryParam,
  route,
  pathName
};
