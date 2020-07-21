"use strict";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import api from "./api";
import config from "../config";
import R from "ramda";
import { takeEvery, call, fork, put, select } from "redux-saga/effects";
import { getters } from "./helpers";
import { toastrHandler } from "../modules/toastr/toastr.actions";

const { url, env, paths } = config.api;

const normalizeUser = R.compose(
  x => R.assoc("prescriptions", R.defaultTo([], x.prescriptions), x),
  x => R.assoc("addresses", R.defaultTo([], x.addresses), x),
  x => R.assoc("cardDetails", R.defaultTo([], x.cardDetails), x)
);

function* findAddresses() {
  const { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.address}`
  });
  // Handle error
  if (error) {
    throw error;
  }
  return response;
}

function* update(payload) {
  const { response, error } = yield call(api.patch, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.me}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

// Fetch addresses
// ---

function* watchFindAddresses() {
  yield takeEvery(actions.user.findAddresses.TRIGGER, findAddressesRun);
}

function* findAddressesRun() {
  try {
    yield put(actions.user.findAddresses.request());
    let me = yield select(getters.me);
    let addresses = yield call(findAddresses);
    let updatedMe = R.assoc("addresses", addresses, me);
    yield put(actions.user.findAddresses.success(updatedMe));
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
    yield put(actions.user.findAddresses.failure({ error: error.message }));
  } finally {
    yield put(actions.user.findAddresses.fulfill());
  }
}

// Update user resource
// ---

function* watchUpdateUser() {
  yield takeEvery(types.UPDATE_USER, updateUser);
}

function* updateUser({ payload }) {
  try {
    let me = yield select(getters.me);
    let partial = yield call(update, payload);
    yield put(actions.user.updateUserResp(R.merge(me, normalizeUser(partial))));
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
  }
}

// Fork

export default function*() {
  yield fork(watchFindAddresses);
  yield fork(watchUpdateUser);
}
