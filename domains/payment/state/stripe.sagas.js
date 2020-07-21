import { delay } from "redux-saga";
import { fork, put } from "redux-saga/effects";
import { STRIPE } from "./payment.actions";

function* watchStripeIsLoaded() {
  let stripeLoaded = false;
  let stripe = null;

  while (!stripeLoaded) {
    yield delay(500);
    stripe = window.Stripe;
    stripeLoaded = !!stripe;
  }
  yield put(STRIPE.setStripeIsReady());
}

export default function*() {
  yield fork(watchStripeIsLoaded);
}
