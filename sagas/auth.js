"use strict";

import { browserHistory } from "react-router";
import { delay } from "redux-saga";
import {
  takeLatest,
  takeEvery,
  call,
  fork,
  put,
  select
} from "redux-saga/effects";
import Cookies from "js-cookie";
import R from "ramda";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import api from "./api";
import config from "../config";
import selectors from "../selectors";
import { $checkIfUserSessionExpired } from "../utils";
import { getters } from "./helpers";
import { toastrHandler } from "../modules/toastr/toastr.actions";
import { addHoursToDate, getTimeInMs } from "../utils/date";
import { selectMe } from "../domains/checkout-flow/state/selectors/account";

const TOKEN_KEY = "token";

const ME_KEY = "me";

const TIMESTAMP_KEY = "timestamp";

const { url, env, paths } = config.api;

let $userSessionTimer = null;

const normalizeUser = me => {
  return me
    ? R.compose(
        x => R.assoc("prescriptions", R.defaultTo([], x.prescriptions), x),
        x => R.assoc("addresses", R.defaultTo([], x.addresses), x),
        x => R.assoc("cardDetails", R.defaultTo([], x.cardDetails), x)
      )(me)
    : null;
};

export const getExpirationTimestamp = date =>
  R.pipe(
    addHoursToDate(12),
    getTimeInMs
  )(date);

function* findUser() {
  const { response, error } = yield call(api.get, {
    authorize: true,
    url: `${url}/${env}/${paths.me}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* verifyAccount(payload) {
  const { error } = yield call(api.post, {
    authorize: false,
    payload: payload,
    url: `${url}/${env}/${paths.verify}`
  });
  if (error) {
    throw error;
  }
}

function* login(payload) {
  const { response, error } = yield call(api.post, {
    authorize: false,
    payload: payload,
    url: `${url}/${env}/${paths.login}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

// Verify Account
// ---

function* watchVerifyAccount() {
  yield takeLatest(types.VERIFY_ACCOUNT, handleVerifyAccount);
}

function* handleVerifyAccount(action) {
  try {
    yield call(verifyAccount, action.payload);
    yield call(browserHistory.push, { pathname: "/login" });
  } catch (error) {
    console.log(error);
  }
}

// Login
// ---
function* watchSignIn() {
  yield takeLatest(types.SIGN_IN, handleSignIn);
}

function* handleSignIn({ payload }) {
  try {
    // Read JWT cookie
    const token = Cookies.get(TOKEN_KEY);
    // Read auto-login token from URL
    const authToken = yield select(selectors.url.queryParam("auth"));
    // No JWT cookie? No payload? bail!
    if (!token && !payload && !authToken) {
      return;
    } else if (!token && (payload || authToken)) {
      // No JWT cookie but has payload? Fresh login!
      yield call(freshLogin, payload || { key: authToken });
    } else if (token && !payload) {
      // Boot up from token cookie
      yield call(bootstrapLogin, token);
    }

    const me = yield select(selectMe);

    // start interval to check user validity
    $userSessionTimer = $checkIfUserSessionExpired(me, actions.auth.logout);

    // fetch user data
    yield [
      put(actions.auth.fetchMe()),
      // fetch subscriptions
      put(actions.subscriptions.fetchSubscriptions()),
      // fetch orders
      put(actions.order.fetchOrders()),
      // fetch visits
      put(actions.emr.fetchVisits()),
      // fetch user messages
      put(actions.messages.findMessages())
    ];
    // redirect param? redirect then!
    const route = yield select(getters.route);
    if (route.query.redirect) {
      browserHistory.push({ pathname: route.query.redirect });
    }
    // Google tag manager!
    $GTM.identify.trigger();
  } catch (error) {
    const { message } = error;
    console.log(error);
    if (R.contains(message, ["JWT invalid", "JWT expired"])) {
      // TODO: Define a constant/common place for error messages
      // OLD: return $N.error($N.MESSAGES.JWT_INVALID);
      yield put(
        toastrHandler.error({
          message:
            "Due to an extended time away, you have been logged out. Please log in again"
        })
      );
    } else {
      yield put(toastrHandler.error({ message }));
    }
  }
}

function* freshLogin(payload) {
  try {
    const timestamp = getExpirationTimestamp(new Date());

    let { token, user } = yield call(
      login,
      payload.form ? payload.form : payload
    );
    let response = { token, me: normalizeUser(user) };
    yield put(actions.auth.signInResp(response)); // Update state

    yield put(actions.localStorage.setCookie({ key: TOKEN_KEY, value: token })); // Store token in Cookies
    yield put(
      actions.localStorage.setCookie({ key: TIMESTAMP_KEY, value: timestamp })
    ); // Store timestamp in Cookies

    // Analytics
    $GTM.signIn.trigger();

    // Open drawer and show account details
    let drawers = yield select(getters.drawers);
    if (drawers.right.visible && drawers.right.component === "Authenticate") {
      yield put(actions.global.setSecondaryNav("Account"));
      // Lots of JS is being parsed.. makes for a choppy animation
      yield delay(1500);

      yield put(
        actions.drawers.renderDrawer({ drawer: "RIGHT", content: "MenuRight" })
      );
    }
    // Invoke callback
    payload.onSuccess && payload.onSuccess(response);
  } catch (error) {
    payload.onError && payload.onError(error); // Used for redux-form state mgmt; see checkout/login
    throw error; // re-throw error!
  }
}

function* bootstrapLogin(token) {
  yield put(actions.auth.setToken(token));
  // if error thrown from findUser, it will be caught in handleSignIn
  yield call(findUser);
}

// Fetch Me
// ---

function* watchFetchMe() {
  yield takeLatest(actions.auth.fetchMe.TRIGGER, fetchMe);
}

const sanitizeAddress = address =>
  R.assoc("state", R.toUpper(address.state || ""), address);

function* fetchMe() {
  try {
    yield put(actions.auth.fetchMe.request());
    const me = yield call(findUser);
    const addresses = R.propOr([], "addresses", me);
    const profileWithSanitizedAddresses = R.assoc(
      "addresses",
      R.map(sanitizeAddress, addresses),
      me
    );
    yield put(
      actions.auth.fetchMe.success(normalizeUser(profileWithSanitizedAddresses))
    );
  } catch (error) {
    yield put(actions.auth.fetchMe.failure(error.message));
  } finally {
    yield put(actions.auth.fetchMe.fulfill());
  }
}

// Delete session
// ---

function* watchSignout() {
  yield takeEvery(types.LOGOUT, signOut);
}

function* signOut() {
  $GTM.signOut.trigger();
  Cookies.remove(TOKEN_KEY, { path: "/" }); // Delete session and me keys
  Cookies.remove(TIMESTAMP_KEY, { path: "/" }); // Delete session and me keys
  localStorage.removeItem(ME_KEY);
  clearInterval($userSessionTimer);
  yield put(actions.ui.hideDrawer());
}

// Fork
// ---

export default function*() {
  yield fork(watchFetchMe);
  yield fork(watchSignIn);
  yield fork(watchSignout);
  yield fork(watchVerifyAccount);
}
