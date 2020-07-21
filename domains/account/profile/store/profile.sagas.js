import { takeEvery, put, fork, select } from "redux-saga/effects";

import { LOCATION_CHANGE } from "../../../../constants/ActionTypes";
import { selectHasAddresses } from "../../../checkout-flow/state/selectors/shipping";
import { SHIPPING } from "../../../checkout-flow/state/actions";
import { SHIPPING_VIEWS } from "../../../shipping/shipping.constants";

function* watchLocationChange() {
  yield takeEvery(LOCATION_CHANGE, handleLocationChange);
}

function* handleLocationChange({ payload }) {
  const { pathname } = payload;
  if (pathname === "/profile") {
    const hasAddress = yield select(selectHasAddresses);
    yield put(
      SHIPPING.changeView(hasAddress ? SHIPPING_VIEWS.LIST : SHIPPING_VIEWS.NEW)
    );
  }
}

export default function*() {
  yield fork(watchLocationChange);
}
