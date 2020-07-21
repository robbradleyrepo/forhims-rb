"use strict";

import R from "ramda";
import { createSelector } from "reselect";

const selectStatesData = R.path(["states", "data"]);

const getListOfStates = createSelector(
  selectStatesData,
  R.compose(
    R.join(", "),
    R.values,
    R.map(R.prop("legalEntity")),
    R.filter(x => (x.license.hair || x.license.ed) && !!x.legalEntity) // operates for either hairloss or ed
  )
);

module.exports = {
  getListOfStates
};
