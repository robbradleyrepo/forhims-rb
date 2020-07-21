import { takeEvery, fork, put } from "redux-saga/effects";
import { TOASTR_ACTIONS, TOASTR_TYPES } from "./toastr.constants";
import { toastr } from "./toastr.actions";

// ============================================================
// Show Toast
// ============================================================

function* watchShowToast() {
  yield takeEvery(TOASTR_ACTIONS.SHOW, handleShowToast);
}

function* handleShowToast(payload) {
  const { title = "", message, type = TOASTR_TYPES.WARNING } = payload;
  yield put(toastr.show({ title, message, type }));
}

// ============================================================
// Hide Toast
// ============================================================

function* watchHideToast() {
  yield takeEvery(TOASTR_ACTIONS.HIDE, handleHideToast);
}

function* handleHideToast() {
  yield put(toastr.hide());
}

// ============================================================
// FORK
// ============================================================

export default function*() {
  yield fork(watchShowToast);
  yield fork(watchHideToast);
}
