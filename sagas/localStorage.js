"use strict";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import Cookies from "js-cookie";
import { takeEvery, call, fork, put } from "redux-saga/effects";

// Set local storage
// ---

function* watchSetLocalStorage() {
  yield takeEvery(types.SET_LOCAL_STORAGE, setLocalStorage);
}

function* setLocalStorage(action) {
  let { key, value } = action.payload;
  // update cookie
  yield call(() => localStorage.setItem(key, JSON.stringify(value)));
}

// Update state with local storage
// ---

function lookupFromLocalStorage(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function* watchUpdateStateWithLocalStorage() {
  yield takeEvery(
    types.UPDATE_STATE_WITH_LOCALSTORAGE,
    updateStateWithLocalStorage
  );
}

function* updateStateWithLocalStorage(action) {
  let { key, callback } = action.payload;
  //
  let payload = lookupFromLocalStorage(key) || null;
  // Update state if there's value
  if (payload) {
    yield put(callback(payload));
  }
}

// Set cookie
// ---

function* watchSetCookie() {
  yield takeEvery(types.SET_COOKIE, setCookie);
}

function* setCookie(action) {
  let { key, value, triggerLogin } = action.payload;
  // update cookie
  Cookies.set(key, JSON.stringify(value));
  if (triggerLogin) {
    yield put(actions.auth.signIn());
  }
}

// Update state with cookie
// ---

function getCookie(key) {
  let data = Cookies.get(key);
  return data ? JSON.parse(data) : null;
}

function* watchUpdateStateWithCookie() {
  yield takeEvery(types.UPDATE_STATE_WITH_COOKIE, updateStateWithCookie);
}

function* updateStateWithCookie(action) {
  let { key, callback } = action.payload;
  let payload = getCookie(key) ? getCookie(key) : null;
  // Update state if there's value
  if (payload) {
    yield put(callback(payload));
  }
}

export default function*() {
  yield fork(watchSetCookie);
  yield fork(watchSetLocalStorage);
  yield fork(watchUpdateStateWithCookie);
  yield fork(watchUpdateStateWithLocalStorage);
}
