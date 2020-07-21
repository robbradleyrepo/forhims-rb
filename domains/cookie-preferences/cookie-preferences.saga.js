import { takeEvery, fork, put, call, take } from "redux-saga/effects";
import { eventChannel, buffers } from "redux-saga";
import { cookiePreferenceChange } from "./cookie-preferences.actions";

// ============================================================
// Create an event channel to listen for Cookiebot events
// https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Channels.md#using-the-eventchannel-factory-to-connect-to-external-events
// ============================================================

const cookieBotEvents = () => {
  return eventChannel(emit => {
    window.addEventListener("CookiebotOnAccept", () =>
      emit({
        lastCookiebotEvent: "CookiebotOnAccept",
        accepted: window.Cookiebot.consented
      })
    );

    window.addEventListener("CookiebotOnDecline", () =>
      emit({
        lastCookiebotEvent: "CookiebotOnDecline",
        accepted: window.Cookiebot.consented
      })
    );

    return () => {
      // there will be no unsubscribing
    };

    // include a buffer since this channel may be subscribed to after Cookiebot events are dispatched
  }, buffers.fixed());
};

// ============================================================
// When to start listening for Cookiebot events
// ============================================================

function* watchCookiebot() {
  // once FETCH_ALL has run, start paying attention to cookie preference changes.
  // The event channel buffers up to 10 previous events that were emitted, so this should not miss them
  yield takeEvery("FETCH_ALL", handleCookiePreferences);
}

function* handleCookiePreferences() {
  const channel = yield call(cookieBotEvents);
  while (true) {
    const adaptedCookiebotEvent = yield take(channel);
    yield put(cookiePreferenceChange(adaptedCookiebotEvent));
  }
}

// ============================================================
// FORK
// ============================================================

export default function*() {
  yield fork(watchCookiebot);
}
