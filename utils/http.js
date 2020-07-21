"use strict";

import Actions from "../actions";
import camelize from "camelize";
import Cookies from "js-cookie";
import R from "ramda";
import snakeize from "snakeize";

function getCookie(key) {
  let data = Cookies.get(key);
  try {
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error.message);
  } finally {
    return null;
  }
}

const token = () => $S.getState().token || getCookie("token");

const stampUiid = x => {
  let uiid = Cookies.get("uiid");
  return uiid ? R.assoc("uiid", uiid, x) : x;
};

function composeHeaders(authorize, headers, url) {
  let isNotHimsApiCall =
    url.indexOf("api.forhims.co.uk") === -1 ||
    url.indexOf("api.forhims.co.uk/emr") > -1;

  return R.compose(
    x => new Headers(x),
    R.merge(headers),
    x => (isNotHimsApiCall ? R.identity(x) : stampUiid(x)),
    x => (authorize ? R.assoc("Authorization", `Bearer ${token()}`, x) : x),
    R.assoc("Content-Type", "application/json")
  )({});
}

// Will map the raw error message if there is a match, otherwise, return the message as-is
const mapErrorMessage = R.cond([
  [
    message => message.includes("webuser_phone_key"),
    R.always("This phone number is already registered.")
  ],
  [R.T, R.identity]
]);

const processRawResponse = response => {
  return new Promise((resolve, reject) => {
    if (!response.ok) {
      let errMsg = response.statusText;
      response.json().then(error => {
        try {
          // errMsg = errMsg || (error.text && JSON.parse(error.text).message);
          errMsg =
            (error && error.message && mapErrorMessage(error.message)) ||
            errMsg;
        } catch (_err) {
          errMsg = _err.message;
        } finally {
          if (
            R.contains(errMsg, ["JWT invalid", "JWT expired", "Unauthorized"])
          ) {
            $S.dispatch(Actions.auth.logout());
          }
          reject(Error(errMsg));
        }
      });
    } else {
      // nnasoody: HACK! Our API returns empty body in the
      // response on a 201 (e.g. POST /photos)
      // this trips up response.json()
      response
        .json()
        .then(resolve)
        .catch(() => resolve(null));
    }
  });
};

function post({ url, payload, authorize, headers }) {
  return new Promise((resolve, reject) => {
    // let request = new Request(R.replace("/store", "", url), {
    let request = new Request(url, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(snakeize(payload)),
      headers: composeHeaders(authorize, headers, url)
    });

    fetch(request)
      .then(processRawResponse)
      .then(camelize)
      .then(resolve)
      .catch(reject);
  });
}

function get({ url, authorize, headers }) {
  return new Promise((resolve, reject) => {
    // let request = new Request(R.replace("/store", "", url), {
    let request = new Request(url, {
      mode: "cors",
      method: "GET",
      headers: composeHeaders(authorize, headers, url)
    });

    fetch(request)
      .then(processRawResponse)
      .then(camelize)
      .then(resolve)
      .catch(reject);
  });
}

function patch({ url, payload, authorize, headers }) {
  return new Promise((resolve, reject) => {
    // let request = new Request(R.replace("/store", "", url), {
    let request = new Request(url, {
      mode: "cors",
      method: "PATCH",
      body: JSON.stringify(snakeize(payload)),
      headers: composeHeaders(authorize, headers, url)
    });

    fetch(request)
      .then(processRawResponse)
      .then(camelize)
      .then(resolve)
      .catch(reject);
  });
}

function del({ url, authorize, headers }) {
  return new Promise((resolve, reject) => {
    // let request = new Request(R.replace("/store", "", url), {
    let request = new Request(url, {
      mode: "cors",
      method: "DELETE",
      headers: composeHeaders(authorize, headers, url)
    });

    fetch(request)
      .then(processRawResponse)
      .then(camelize)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = {
  del,
  get,
  patch,
  post
};
