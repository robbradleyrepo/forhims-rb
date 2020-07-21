"use strict";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import api from "./api";
import config from "../config";
import R from "ramda";
import { takeEvery, call, fork, put } from "redux-saga/effects";
import { toastrHandler } from "../modules/toastr/toastr.actions";

// Constants
// ---

const { url, env, paths } = config.api;

// Fn's
// ====

function* findAllMessages() {
  let { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.messages}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* updateById(messageId, payload) {
  let { response, error } = yield call(api.patch, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.messages}?id=eq.${messageId}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

const indexByMessageId = R.indexBy(R.prop("id"));

const unreadCount = R.reduce((result, message) => {
  return message.read ? result : ++result;
}, 0);

const sortInReverse = R.compose(
  xs => xs.reverse(),
  R.sortBy(R.prop("createdAt"))
);

// Find Messages
// ====

function* watchFindMessages() {
  yield takeEvery(actions.messages.findMessages.TRIGGER, findMessagesRun);
}

export function* findMessagesRun() {
  try {
    yield put(actions.messages.findMessages.request());
    let messages = yield call(findAllMessages);
    yield put(
      actions.messages.findMessages.success({
        byId: indexByMessageId(messages),
        unreadCount: unreadCount(messages),
        sorted: sortInReverse(messages)
      })
    );
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
    yield put(actions.messages.findMessages.failure({ error: error.message }));
  } finally {
    yield put(actions.messages.findMessages.fulfill());
  }
}

// ====
// Mark a message as read
// ====

function* watchMarkMessageAsRead() {
  yield takeEvery(types.MARK_MESSAGE_AS_READ, markMessageAsRead);
}

function* markMessageAsRead({ payload: message }) {
  try {
    let payload = { read: true };
    yield call(updateById, message.id, payload);
    yield put(
      actions.messages.markMessageAsReadResp(R.merge(message, payload))
    );
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield fork(watchFindMessages);
  yield fork(watchMarkMessageAsRead);
}
