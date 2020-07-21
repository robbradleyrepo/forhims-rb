"use strict";

import R from "ramda";
import Cookies from "js-cookie";
import currencyFormatter from "currency-formatter";
import { browserHistory } from "react-router";

function isValidEmail(email) {
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
    email
  );
}

const currency = x => currencyFormatter.format(x / 100, { code: "GBP" });

const log = x => !console.log(x) && x;

const capitalizeAllWordsInString = (sentence = "") => {
  return R.clone(sentence)
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
};

const route = R.curry((params, ev) => {
  ev && ev.preventDefault();
  browserHistory.push(params);
  window.scrollTo(0, 0);
});

const getStatesWithHairLicense = R.compose(
  R.indexBy(R.prop("state")),
  R.filter(x => x.license && x.license.hair)
);

const getStatesWithEdLicense = R.compose(
  R.indexBy(R.prop("state")),
  R.filter(x => x.license && x.license.ed)
);

const getStatesWithColdSoreLicense = R.compose(
  R.indexBy(R.prop("state")),
  R.filter(x => x.license && x.license.coldSore)
);

const getStatesWithSkinCareAcneLicense = R.compose(
  R.indexBy(R.prop("state")),
  R.filter(x => x.license && x.license.skincareAcne)
);

const getStatesWithSkinCareAgingLicense = R.compose(
  R.indexBy(R.prop("state")),
  R.filter(x => x.license && x.license.skincareAging)
);

function sortStates(states) {
  const militaryStateCodes = ["AE", "AP", "AA"];

  // filter out military states from list
  const nonMilitary = R.filter(
    x => !R.contains(x.state, militaryStateCodes),
    states
  );

  return nonMilitary;
}

function isClient() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

function fileSize(bytes) {
  let thresh = 1024;
  return bytes / thresh / thresh;
}

// check for user session validity every x interval
const $checkIfUserSessionExpired = (
  user,
  action,
  interval = 10 // default 10 minutes
) => {
  if (user) {
    return setInterval(() => {
      const timestamp = Cookies.get("timestamp")
        ? parseInt(Cookies.get("timestamp"))
        : null;

      if (timestamp && timestamp < Date.now()) {
        clearInterval($checkIfUserSessionExpired);
        action && $S.dispatch(action());
        // TODO: Handle session expiry events in saga
        // Previously $N.error($N.MESSAGES.JWT_INVALID);
      }
    }, 60000 * interval);
  }
};

// This function is used for A / B testing where Google Optomize dynamically sets a window variable for conditional rendering
const getWindowVariable = (windowObject, variablePath) => {
  const globalVariable = R.path(variablePath, windowObject) || "A";
  return globalVariable;
};

const escape = value => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
};

export const isNotNil = R.pipe(
  R.isNil,
  R.not
);
const isNotEmpty = R.pipe(
  R.isEmpty,
  R.not
);

const hasValue = R.allPass([isNotNil, isNotEmpty]);

const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj)
  )
);

const shuffleArray = arr => {
  let j, x, i;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = arr[i];
    arr[i] = arr[j];
    arr[j] = x;
  }
  return arr;
};

export default {
  $checkIfUserSessionExpired,
  capitalizeAllWordsInString,
  currency,
  fileSize,
  escape,
  getStatesWithColdSoreLicense,
  getStatesWithEdLicense,
  getStatesWithHairLicense,
  getStatesWithSkinCareAcneLicense,
  getStatesWithSkinCareAgingLicense,
  getWindowVariable,
  isClient,
  isValidEmail,
  log,
  route,
  sortStates,
  hasValue,
  renameKeys,
  isNotNil,
  shuffleArray
};
