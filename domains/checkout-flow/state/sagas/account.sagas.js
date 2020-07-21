import Cookies from "js-cookie";
import { SubmissionError } from "redux-form";
import actions from "../../../../actions";
import api from "../../../../sagas/api";
import config from "../../../../config";
import {
  takeLatest,
  all,
  fork,
  call,
  select,
  put,
  take
} from "redux-saga/effects";
import { showDrawerWithContentId } from "../../../../actions/drawer";
import { ACCOUNT_ACTIONS, ACCOUNT, CHECKOUT } from "../actions";
import {
  selectProducts,
  selectHasRxAgeError,
  selectHasCartProducts
} from "../selectors/cart";
import { selectIsAuthenticated } from "../../../../selectors/me";
import {
  selecDateOfBirthFormValues,
  selectLoginFormValues,
  selectMe,
  selectRegisterFormValues,
  selectForgotFormValues
} from "../selectors/account";
import { findMessagesRun } from "../../../../sagas/messages";
import { fetchVisits } from "../../../../sagas/emr";
import {
  SIGN_IN,
  SHOW_DRAWER,
  HIDE_DRAWER
} from "../../../../constants/ActionTypes";
import { browserHistory } from "react-router";
import R from "ramda";
import { queryParam } from "../../../../selectors/url";
import { selectCookiesAccepted } from "../../../../domains/cookie-preferences/cookie-preferences.selectors";
import { convertUkToUsDateFormat } from "../../../../utils/date";
import { CHECKOUT_STEP_NAMES } from "../../checkout-flow.constants";
import { selectIsCheckoutDrawerOpen } from "../../../../selectors/ui";

const { url, env, paths } = config.api;
const { siteId } = config.braze;

const TOKEN_KEY = "token";

const normalizeUser = me => {
  return me
    ? R.compose(
        x => R.assoc("prescriptions", R.defaultTo([], x.prescriptions), x),
        x => R.assoc("addresses", R.defaultTo([], x.addresses), x),
        x => R.assoc("cardDetails", R.defaultTo([], x.cardDetails), x)
      )(me)
    : null;
};

// Authentication
// ---

function* login(payload) {
  const { response, error } = yield call(api.post, {
    payload: payload,
    url: `${url}/${env}/${paths.login}`
  });

  if (error) {
    throw error;
  }
  return R.head(response);
}

function* watchAccountLogin() {
  yield takeLatest(ACCOUNT_ACTIONS.LOGIN, handleAccountLogin);
}

const redirectWhitelistPattern = /^\/messages|^\/orders$|^\/profile$/;

export function* handleAccountLogin({ payload }) {
  const { resolve, reject } = payload;
  const form = yield select(selectLoginFormValues);
  const products = yield select(selectProducts);
  window.$GTM && $GTM.signIn.trigger();

  const redirectPath = yield select(queryParam("redirect"));

  try {
    const { token, user } = yield call(login, form);
    yield put(actions.auth.signInResp({ token, me: normalizeUser(user) }));

    const cookiesAccepted = yield select(selectCookiesAccepted);
    if (cookiesAccepted) yield call(Cookies.set, TOKEN_KEY, token);

    if (!products.length) {
      // no products & a redirect query param?
      // follow the redirect if it is messages, orders, or that other acceptable page
      if (redirectWhitelistPattern.test(redirectPath)) {
        browserHistory.push(redirectPath);
      }

      // yield [
      //   // fetch subscriptions
      //   call(fetchSubscriptions),
      //   // fetch orders
      //   call(fetchOrders),
      //   // fetch messages
      //   call(findMessagesRun),
      //   // fetch visits
      //   call(fetchVisits)
      // ];

      yield [
        // fetch subscriptions
        put(actions.subscriptions.fetchSubscriptions()),
        // fetch orders
        put(actions.order.fetchOrders()),
        // fetch messages
        call(findMessagesRun),
        // fetch visits
        call(fetchVisits)
      ];

      yield put(showDrawerWithContentId("account"));
    } else {
      yield put(ACCOUNT.loginSuccess());
      yield put(CHECKOUT.nextStep());
    }
    window.$GTM && $GTM.signIn.success();
    yield call(resolve);
  } catch (error) {
    // NOTE: API error messages can differ, normalizing to use the same message
    yield call(
      reject,
      new SubmissionError({ _error: "Invalid username or password." })
    );
    $GTM.signIn.failure(error.message);
  }
}

function* watchLoginSuccess() {
  yield takeLatest(ACCOUNT_ACTIONS.LOGIN_SUCCESS, handleLoginSuccess);
}

function* handleLoginSuccess(payload) {
  const hasItems = yield select(selectHasCartProducts);
  const isCheckoutOpen = yield select(selectIsCheckoutDrawerOpen);

  if (isCheckoutOpen) {
    // Block navigation to next step in checkout
    // If the logged in user cannot purchase rx products
    yield call(validateUserAgeBeforeNavigation, {
      onSuccessNavigationAction: CHECKOUT.goToStep
    });
  } else {
    if (hasItems) {
      yield put(showDrawerWithContentId("cart"));
    }
  }
}

// Forgot password
// @author Max Barry <mbarry@forhims.com>
// ---

function* submitForgot(payload) {
  const { response, error } = yield call(api.post, {
    payload: payload,
    url: `${url}/${env}/${paths.forgotPassword}`
  });

  if (error) {
    return error;
  }
  // Response from API will be true (as bool). Ramda head(true) will return undefined,
  // which the calling function is checking for. It's been let as head(true),
  // purely for consistency with Clubroom/hers
  return R.head(response);
}

function* watchAccountForgot() {
  yield takeLatest(ACCOUNT_ACTIONS.FORGOT, handleAccountForgot);
}

function* handleAccountForgot({ payload }) {
  // todo: Implementation of analytics. calls found on Clubroom/hers
  const { resolve, reject } = payload;
  const form = yield select(selectForgotFormValues);

  const ERROR_MESSAGE =
    "There was an error resetting your password. Please try again.";

  try {
    const result = yield call(submitForgot, form);
    if (!result) {
      yield call(resolve, { success: "Check your email for next steps" });
    } else {
      yield call(reject, new SubmissionError({ _error: ERROR_MESSAGE }));
    }
  } catch (err) {
    yield call(reject, new SubmissionError({ _error: ERROR_MESSAGE }));
  }
}

// Registration
// ---

function* register(payload) {
  const { response, error } = yield call(api.post, {
    payload: payload,
    url: `${url}/${env}/${paths.register}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* watchAccountRegister() {
  yield takeLatest(ACCOUNT_ACTIONS.REGISTER, handleAccountRegistration);
}

function* handleAccountRegistration({ payload }) {
  const { resolve, reject } = payload;
  const registrationForm = yield select(selectRegisterFormValues);
  const form = R.pick(["email", "password"], registrationForm);

  $GTM.signUp.trigger();
  try {
    // TODO: change site id?
    yield call(register, R.merge({ siteId }, form));
    const { token, user } = yield call(login, form);
    const products = yield select(selectProducts);
    if (!products.length) {
      yield put(showDrawerWithContentId("account"));
    }
    yield put(actions.auth.signInResp({ token, me: normalizeUser(user) }));

    const cookiesAccepted = yield select(selectCookiesAccepted);
    if (cookiesAccepted) yield call(Cookies.set, TOKEN_KEY, token);

    yield put(actions.auth.fetchMe());
    yield call(resolve);
    yield put(ACCOUNT.registerSuccess());
    yield put(CHECKOUT.nextStep());
    $GTM.signUp.success();
  } catch (error) {
    // NOTE: API is returning raw key constraint erorrs, can't use the response directly
    yield call(
      reject,
      new SubmissionError({
        _error:
          "Failed to register user. Try a different email or contact support."
      })
    );
    $GTM.signUp.failure(error.message);
  }
}

// Date of birth
// ---

function* updateUserProfile(payload) {
  const { response, error } = yield call(api.patch, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.me}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* watchUpdateUserDateOfBirth() {
  yield takeLatest(ACCOUNT_ACTIONS.DATE_OF_BIRTH, updateUserDateOfBirth);
}

function* updateUserDateOfBirth({ payload }) {
  const { resolve, reject } = payload;
  const dateOfBirthValues = yield select(selecDateOfBirthFormValues);
  const formattedDOBValues = R.compose(
    convertUkToUsDateFormat,
    R.join("-"),
    R.values
  )(dateOfBirthValues);

  try {
    const me = yield select(selectMe);
    const updatedProfile = yield call(updateUserProfile, {
      dob: formattedDOBValues
    });
    yield put(
      actions.user.updateUserResp(R.merge(me, normalizeUser(updatedProfile)))
    );
    yield call(resolve);
    // Block navigation to next step in checkout
    // If the logged in user cannot purchase rx products
    yield call(validateUserAgeBeforeNavigation, {
      onSuccessNavigationAction: () => {
        CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.SHIPPING);
      }
    });
  } catch (error) {
    yield call(reject, error.message);
    console.log(error);
  }
}

// URL account actions
// ---

function* watchUrlForAccountActionSaga() {
  // custom watcher that only listens for an action once. Don't need takeEvery/takeLatest
  // https://github.com/redux-saga/redux-saga/issues/589#issuecomment-259346425
  while (true) {
    // SIGN_IN happens late enough in the loading process that the drawers are ready to work
    // listening to actions earlier in the stream after startup led to the drawer opening without a curtain and with a blue background
    yield take(SIGN_IN);
    yield call(maybeOpenLoginDrawer);
  }
}

export function* maybeOpenLoginDrawer() {
  const action = yield select(queryParam("action"));
  const redirect = yield select(queryParam("redirect"));
  const me = yield select(selectMe);

  // only open for these query params AND if the user is logged out
  if ((action === "login" || redirect) && R.isEmpty(me)) {
    yield put(ACCOUNT.changeView("login"));
    yield put(showDrawerWithContentId("login"));
  }
}

function* watchShowDrawer() {
  yield takeLatest(SHOW_DRAWER, handleShowDrawer);
}

// Default to Register view for non-authenticated users during checkout flow
function* handleShowDrawer({ payload }) {
  if (R.contains(payload.id, R.values(CHECKOUT_STEP_NAMES))) {
    yield put(ACCOUNT.changeView("register"));
  }
}

function* watchHideDrawer() {
  yield takeLatest(HIDE_DRAWER, handleHideDrawer);
}

// Default to Login view for non-authenticated users outside of checkout flow
function* handleHideDrawer({ payload }) {
  const isLoggedIn = yield select(selectIsAuthenticated);
  if (!isLoggedIn) {
    yield put(ACCOUNT.changeView("login"));
  }
}

// Kick users back to the cart error state
// When profile or cart product list changes
// If profile age no longer meets Rx requirements
export function* validateUserAgeBeforeNavigation({
  onSuccessNavigationAction
}) {
  const hasRxAgeError = yield select(selectHasRxAgeError);
  if (hasRxAgeError) {
    // yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART));
  } else {
    if (onSuccessNavigationAction) {
      yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.SHIPPING));
    }
  }
}

export default function*() {
  yield all([
    fork(watchAccountLogin),
    fork(watchAccountForgot),
    fork(watchAccountRegister),
    fork(watchUpdateUserDateOfBirth),
    fork(watchUrlForAccountActionSaga),
    fork(watchShowDrawer),
    fork(watchHideDrawer),
    fork(watchLoginSuccess)
  ]);
}
