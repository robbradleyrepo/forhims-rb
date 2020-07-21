"use strict";

import actions from "../actions";
import api from "./api";
import config from "../config";
import R from "ramda";
import { takeEvery, call, fork, put } from "redux-saga/effects";
import { toastrHandler } from "../modules/toastr/toastr.actions";

// Constants
// ---

const PRODUCT_IDS = ["1DaGLrGX", "65QIdY4y", "ajS0GZWh"];

const { url, env, paths } = config.api;

const normalizeSubscriptions = R.map(
  x => (x.productIds ? x : R.merge(x, { productIds: PRODUCT_IDS }))
);

// Fn's
// ---

function* findAll() {
  const { response: subscriptions, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.subscriptions}`
  });
  // Handle error
  if (error) {
    throw error;
  }

  return normalizeSubscriptions(subscriptions);
}

function* findById(subscriptionId) {
  const { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.subscriptions}?order_id=eq.${subscriptionId}`
  });
  // Handle error
  if (error) {
    throw error;
  }

  return R.compose(
    R.head,
    normalizeSubscriptions
  )(response);
}

function* updateSubscriptionById(payload) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.changeSubscription}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return response;
}

function* reactivateSubscriptionViaLink(payload) {
  const { response, error } = yield call(api.post, {
    authorize: !payload.action_id,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.reactivateSubscription}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return response;
}

// ------------
// Fetch Subscriptions
// ------------

function* watchFindAll() {
  yield takeEvery(
    actions.subscriptions.fetchSubscriptions.TRIGGER,
    findSubscriptions
  );
}

function* findSubscriptions() {
  try {
    yield put(actions.subscriptions.fetchSubscriptions.request());
    const subscriptions = yield call(findAll);
    yield put(actions.subscriptions.fetchSubscriptions.success(subscriptions));
  } catch (error) {
    yield put(actions.subscriptions.fetchSubscriptions.failure(error.message));
  } finally {
    yield put(actions.subscriptions.fetchSubscriptions.fulfill());
  }
}

// ------------
// Update subscription by ID
// ------------

function* watchUpdateSubscription() {
  yield takeEvery(
    actions.subscriptions.updateSubscriptionById.TRIGGER,
    updateSubscription
  );
}

function* updateSubscription({ payload }) {
  try {
    yield put(actions.subscriptions.updateSubscriptionById.request());
    yield call(updateSubscriptionById, payload);
    yield put(
      actions.subscriptions.findSubscriptionById(payload.subscriptionId)
    );
  } catch (error) {
    yield put(
      actions.subscriptions.updateSubscriptionById.failure(error.message)
    );
  } finally {
    yield put(actions.subscriptions.updateSubscriptionById.fulfill());
  }
}

// ------------
// Reactivate subscription by ID
// ------------

function* watchReactivateSubscription() {
  yield takeEvery(
    actions.subscriptions.reactivateSubscription.TRIGGER,
    reactivateSubscription
  );
}

function* reactivateSubscription({ payload }) {
  try {
    yield put(actions.subscriptions.reactivateSubscription.request());
    if (payload) {
      const { subscriptionId, processOnDate, status } = yield call(
        reactivateSubscriptionViaLink,
        payload
      );
      yield put(
        actions.subscriptions.reactivateSubscription.success({
          orderId: subscriptionId,
          processOnDate,
          status
        })
      );
    } else {
      yield call(findSubscriptions);
    }
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
    yield put(
      actions.subscriptions.reactivateSubscription.failure(error.message)
    );
  } finally {
    yield put(actions.subscriptions.reactivateSubscription.fulfill());
  }
}

// Get subscription by id
// ===

function* watchFindById() {
  yield takeEvery(
    actions.subscriptions.findSubscriptionById.TRIGGER,
    findByIdRun
  );
}

function* findByIdRun({ payload }) {
  try {
    yield put(actions.subscriptions.findSubscriptionById.request());
    const subscription = yield call(findById, payload);
    yield put(actions.subscriptions.findSubscriptionById.success(subscription));
  } catch (error) {
    yield put(
      actions.subscriptions.findSubscriptionById.failure(error.message)
    );
  } finally {
    yield put(actions.subscriptions.findSubscriptionById.fulfill());
  }
}

// Fork!

export default function*() {
  yield fork(watchFindById);
  yield fork(watchFindAll);
  yield fork(watchUpdateSubscription);
  yield fork(watchReactivateSubscription);
}
