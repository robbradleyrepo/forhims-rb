"use strict";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import api from "./api";
import config from "../config";
import R from "ramda";
import utils from "../utils";
import { takeEvery, call, fork, put, select } from "redux-saga/effects";
import { getters } from "./helpers";
import { PRODUCTS } from "../constants";
import { delay } from "redux-saga";

// Constants
// ---

const { url, env, paths } = config.api;

const indexById = R.indexBy(R.prop("id"));

// Functions
// ---

function* getConfig() {
  const { response, error } = yield call(api.get, {
    url: `${url}/${env}/${paths.config}`,
    authorize: false
  });
  if (error) {
    throw error;
  }

  return R.compose(
    R.prop("config"),
    R.head
  )(response);
}

function* findAll() {
  const { response, error } = yield call(api.get, {
    authorize: false,
    url: `${url}/${env}/${paths.products}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* findStates() {
  const { response, error } = yield call(api.get, {
    authorize: false,
    url: `${url}/${env}/${paths.states}?order=name.asc`
  });
  if (error) {
    throw error;
  }
  return response;
}

// Fetch all
// ---

function* watchPollConfig() {
  yield takeEvery(types.POLL_CONFIG, pollConfig);
}

function* pollConfig() {
  try {
    while (true) {
      yield delay(10000);
      let config = yield call(getConfig);
      yield put(actions.global.updateConfig(config));
    }
  } catch (error) {
    console.log(error);
  }
}

// Fetch all
// ---

function* watchFetchAll() {
  yield takeEvery(types.FETCH_ALL, fetchAll);
}

function* fetchAll() {
  yield call(fetchProducts);
}

// Fetch States
// ---

function* watchFetchStates() {
  yield takeEvery(actions.global.findStates.TRIGGER, findStatesRun);
}

function* findStatesRun() {
  try {
    yield put(actions.global.findStates.request());
    const states = yield call(findStates);
    yield put(actions.global.findStates.success(utils.sortStates(states)));
    yield put(
      actions.global.findLicenses.success({
        cold_sore_recurrent: utils.getStatesWithColdSoreLicense(states),
        ed: utils.getStatesWithEdLicense(states),
        hair_loss: utils.getStatesWithHairLicense(states),
        skincare_acne: utils.getStatesWithSkinCareAcneLicense(states),
        skincare_aging: utils.getStatesWithSkinCareAgingLicense(states)
      })
    );
  } catch (error) {
    yield put(actions.global.findStates.failure(error.message));
  } finally {
    yield put(actions.global.findStates.fulfill());
  }
}

// Fetch products
// ---

const getTags = R.reduce(
  (r, x) =>
    R.compose(
      R.uniq,
      R.concat(r)
    )(x.tags),
  []
);

const productsByTag = (tags, products) =>
  R.reduce(
    (r, tag) => {
      if (!r[tag]) r[tag] = [];
      r[tag] = R.filter(x => R.contains(tag, x.tags), products);
      return r;
    },
    {},
    tags
  );

function* watchFetchProducts() {
  yield takeEvery(types.FETCH_PRODUCTS, fetchProducts);
}

function* fetchProducts() {
  try {
    let loaded = yield call(isLoaded); // See if we have products
    if (!loaded) {
      let products = yield call(findAll);
      let merged = mergeProductsWithContent(products);
      let tags = getTags(merged);
      yield put(
        actions.fetch.fetchProductsResp({
          byId: indexById(merged),
          byTag: productsByTag(tags, merged),
          tags
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* isLoaded() {
  let products = yield select(getters.products);
  return R.compose(
    R.gt(R.__, 0),
    R.length,
    R.values,
    R.prop("byId")
  )(products);
}

function mergeProductsWithContent(response) {
  const responseById = indexById(response);
  const productsById = indexById(PRODUCTS);
  return R.compose(
    R.values,
    R.reduce((result, id) => {
      result[id] = R.merge(responseById[id] || {}, productsById[id]);
      return result;
    }, {}),
    R.keys
  )(responseById);
}

export default function*() {
  yield fork(watchFetchStates);
  yield fork(watchFetchAll);
  yield fork(watchFetchProducts);
  yield fork(watchPollConfig);
}
