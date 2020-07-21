"use strict";

import R from "ramda";
import { createSelector } from "reselect";

import { formatDate, convertDateOfBirthToAge } from "../utils/date";
import { hasValue } from "../utils";

const getMe = R.compose(
  R.defaultTo({}),
  R.prop("me")
);

const empty = R.defaultTo("");

const fullName = me => R.trim(`${empty(me.firstName)} ${empty(me.lastName)}`);

const getUserProfile = state => {
  let me = getMe(state);
  return me
    ? {
        dob: me.dob ? formatDate("DD/MM/YYYY")(me.dob) : null,
        email: me.email,
        firstName: me.firstName,
        fullName: fullName(me),
        lastName: me.lastName,
        phone: me.phone
      }
    : null;
};

export const selectIsAuthenticated = state => !R.isNil(state.me);

const getPrescriptions = state => {
  const me = getMe(state);
  const prescriptions = R.compose(
    R.defaultTo([]),
    R.prop("prescriptions")
  )(me);

  return state.products && state.products.byId
    ? R.compose(
        R.values,
        R.reduce((acc, product) => {
          if (!R.has(product.title, acc)) {
            const payload = R.pick(["id", "title"], product);
            acc[product.title] = R.assoc(
              "treatment",
              state.treatmentPlanByProductId[product.id],
              payload
            );
          }
          return acc;
        }, {}),
        R.values,
        R.pick(prescriptions)
      )(state.products.byId)
    : [];
};

export const selectDateOfBirthString = createSelector(
  getMe,
  R.propOr(null, "dob")
);

export const selectHasDateOfBirth = createSelector(
  selectDateOfBirthString,
  val => hasValue(val)
);

export const selectAge = createSelector(
  selectDateOfBirthString,
  convertDateOfBirthToAge
);

module.exports = {
  getMe,
  getPrescriptions,
  getUserProfile,
  selectIsAuthenticated,
  selectAge,
  selectHasDateOfBirth
};
