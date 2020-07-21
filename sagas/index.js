import { fork } from "redux-saga/effects";

import auth from "./auth";
import blog from "./blog";
import emr from "./emr";
import fetch from "./fetch";
import localStorage from "./localStorage";
import messages from "./messages";
import order from "./order";
import renewals from "./renewals";
import subscriptions from "./subscriptions";
import user from "./user";

import tempCart from "../domains/checkout-flow/state/sagas/cart.sagas";
import { tempCheckoutRootSaga } from "../domains/checkout-flow/state/sagas/checkout.sagas";
import tempCheckoutAccount from "../domains/checkout-flow/state/sagas/account.sagas";
import tempShipping from "../domains/checkout-flow/state/sagas/shipping.sagas";
import profile from "../domains/account/profile/store/profile.sagas";
import actionItems from "../domains/account/action-items/store/action-items.sagas";

import toastr from "../modules/toastr/toastr.sagas";

import analytics from "../analytics/analytics.sagas";
import contenful from "../contentful/contentful.sagas";

import stripe from "../domains/payment/state/stripe.sagas";
import cookiePreferences from "../domains/cookie-preferences/cookie-preferences.saga";

export default function*() {
  yield fork(auth);
  yield fork(blog);
  yield fork(emr);
  yield fork(fetch);
  yield fork(localStorage);
  yield fork(messages);
  yield fork(order);
  yield fork(subscriptions);
  yield fork(renewals);
  yield fork(user);
  yield fork(tempCart);
  yield fork(tempCheckoutRootSaga);
  yield fork(tempCheckoutAccount);
  yield fork(tempShipping);
  yield fork(toastr);
  yield fork(profile);
  yield fork(actionItems);
  yield fork(analytics);
  yield fork(stripe);
  yield fork(contenful);
  yield fork(cookiePreferences);
}
