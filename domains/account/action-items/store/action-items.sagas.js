import { pipe, find, propEq, isNil, not } from "ramda";
import {
  call,
  takeLatest,
  fork,
  select,
  put,
  take,
  race
} from "redux-saga/effects";
import actions from "../../../../actions";
import { delay } from "redux-saga";
import { selectVisit } from "../../../checkout-flow/state/selectors/checkout";
import { UI } from "../../../checkout-flow/state/actions/ui.actions";
import { ACTION_ITEMS_ACTIONS } from "./action-items.actions";
import { getOrders } from "../../../../selectors/order";

const ERROR_FLAGS = {
  TIMEOUT: "Timed out.",
  NOT_FOUND: "Requested resource not found."
};

const FIND_VISIT_TIMEOUT_IN_SECONDS = 20000;

const FETCH_ORDERS_TIMEOUT_IN_SECONDS = 20000;

function* watchRequiredActionOpenVisitRequest() {
  yield takeLatest(
    ACTION_ITEMS_ACTIONS.REQUIRED_ACTION_RESUME_VISIT,
    requiredActionOpenVisitRequest
  );
}

function* fetchAndWaitForActiveVisit(visitId) {
  yield put(actions.emr.findVisitById(visitId));

  const { timeout } = yield race({
    visitFulfilled: take(actions.emr.findVisitById.FULFILL),
    timeout: call(delay, FIND_VISIT_TIMEOUT_IN_SECONDS, true)
  });

  if (timeout) {
    return { error: ERROR_FLAGS.TIMEOUT };
  }

  const visit = yield select(selectVisit);
  const visitLoaded = visit && visit.id && visit.id === visitId;

  if (!visitLoaded) {
    return { error: ERROR_FLAGS.NOT_FOUND };
  } else {
    return visit;
  }
}

function* verifyOrderExists(targetOrderID) {
  const orders = yield select(getOrders);

  return pipe(
    find(propEq("id", targetOrderID)),
    isNil,
    not
  )(orders);
}

function* fetchAndFindOrderAttachedToVisit(visit) {
  const targetOrderID = visit.orderId;

  let orderExists = yield* verifyOrderExists(targetOrderID);

  if (!orderExists) {
    yield put(actions.order.fetchOrders());

    const { timeout } = yield race({
      visitFulfilled: take(actions.order.fetchOrders.FULFILL),
      timeout: call(delay, FETCH_ORDERS_TIMEOUT_IN_SECONDS, true)
    });

    if (timeout) {
      return { error: ERROR_FLAGS.TIMEOUT };
    }

    orderExists = yield* verifyOrderExists(targetOrderID);
  }

  if (!orderExists) {
    return { error: ERROR_FLAGS.NOT_FOUND };
  }

  return true;
}

function* requiredActionOpenVisitRequest({ payload }) {
  const { visitId } = payload;

  const visit = yield* fetchAndWaitForActiveVisit(visitId);
  if (visit.error) {
    console.error(
      `Required action error : Visit #${visitId} cannot 
      be retrieved : ${visit.error}`
    );
    return;
  }

  const order = yield* fetchAndFindOrderAttachedToVisit(visit);
  if (order.error) {
    console.error(
      `Required action error : Orders of visit #${visitId} cannot 
      be retrieved : ${order.error}`
    );
  } else {
    yield put(UI.showEmr());
  }
}

export default function*() {
  yield fork(watchRequiredActionOpenVisitRequest);
}
