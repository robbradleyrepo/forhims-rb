import { takeEvery, fork, select, put } from "redux-saga/effects";

import actions from "../actions";
import selectors from "../selectors";
import * as types from "../constants/ActionTypes";
import { UI } from "../domains/checkout-flow/state/actions";

// ============================================================
// Start the renewal process
//
// User has logged in to their account, has a pending renewal,
// and starts that process from the orders section within their account.
// ============================================================
function* watchStartRenewal() {
  yield takeEvery(types.START_RENEWAL_EMR_VISIT, startRenewalEmrVisit);
}

function* startRenewalEmrVisit({ payload }) {
  const { subscriptionId } = payload;
  try {
    // From the subscription retrieve the renewal order
    const renewalOrder = yield select(
      selectors.order.getRenewalOrderBySubscriptionId(subscriptionId)
    );
    // From the renewal retrieve the visit
    const visit = yield select(
      selectors.emr.getVisitByOrderId(renewalOrder.id)
    );
    // Set the active order
    yield put(actions.order.updateOrderResp(renewalOrder));
    // Set the active visit
    yield put(actions.emr.findVisitById(visit.id));
    // Open the EMR UI
    yield put(UI.showEmr());
  } catch (error) {
    console.log(error);
    // yield put(actions.order.setCartToOrderById.failure(error.message));
  } finally {
    // yield put(actions.order.setCartToOrderById.fulfill());
  }
}

export default function*() {
  yield fork(watchStartRenewal);
}
