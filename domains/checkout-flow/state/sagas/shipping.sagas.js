import { initialize, SubmissionError } from "redux-form";

import actions from "../../../../actions";
import {
  takeLatest,
  takeEvery,
  fork,
  all,
  call,
  select,
  put,
  race,
  take
} from "redux-saga/effects";
import {
  createAddress,
  validateAddress,
  updateUser,
  updateAddressById
} from "./requests";
import { CHECKOUT, CHECKOUT_ACTIONS } from "../actions";
import { SHIPPING_ACTIONS, SHIPPING } from "../actions/shipping.actions";
import {
  selectAddressFromEditShippingAddressForm,
  selectAddressFromNewShippingAddressForm,
  selectProfileFromShippingAddressForm,
  selectShippingAddressId,
  selectOriginalAddress,
  selectSelectedValidationOption,
  selectAddressValidationState,
  selectHasAddresses,
  selectSavedAddressForEditing,
  selectEditedSavedAddress,
  selectEditingAddressId,
  selectHasCompleteProfileData
} from "../selectors/shipping";
import { selectMe } from "../selectors/account";
import * as addressUtils from "../../../../utils/address-validation";
import {
  SHIPPING_CONTEXTS,
  SHIPPING_VIEWS,
  SHIPPING_FORMS,
  SHIPPING_COUNTRY
} from "../../../shipping/shipping.constants";
import { hasValue } from "../../../../utils";
import { CHECKOUT_STEP_NAMES } from "../../../../components/checkout/checkout-navigation/checkout-navigation.constants";

/**
 * Some of these sagas have a "context" that is passed to them
 *
 * This should allow us to re-use these flows for the profile section
 * and we can lift the profile address handling outside of the checkout
 * flow domain into a shared domain
 */

function* watchPreSaveNewShippingAddress() {
  yield takeLatest(
    SHIPPING_ACTIONS.PRESAVE_SHIPPING_ADDRESS,
    handlePreSaveNewShippingAddress
  );
}

function* handlePreSaveNewShippingAddress({ payload }) {
  const { resolve, reject, context, isEditing } = payload;

  const hasCompleteProfileData = yield select(selectHasCompleteProfileData);

  if (!hasCompleteProfileData) {
    try {
      yield call(updateProfile);
    } catch (error) {
      yield call(reject, new SubmissionError({ _error: error.toString() }));
      // TODO:
      // Don't save shipping address on profile update fail;
      // This approach can be decoupled and cleaned up in the next pass.
      return;
    }
  }

  try {
    yield call(presaveAddress, resolve, reject, context, isEditing);
  } catch (error) {
    yield call(
      reject,
      new SubmissionError({ _error: "Failed to validate address." })
    );
    yield call(reject, error.message);
  }
}

function* watchCheckoutChangeStep() {
  yield takeLatest(CHECKOUT_ACTIONS.CHANGE_STEP, handleCheckoutChangeStep);
}

function* handleCheckoutChangeStep({ payload }) {
  const { step } = payload;
  if (step === "shipping") {
    const hasAddresses = yield select(selectHasAddresses);
    if (hasAddresses) {
      yield put(SHIPPING.changeView(SHIPPING_VIEWS.LIST));
    } else {
      yield put(SHIPPING.changeView(SHIPPING_VIEWS.NEW));
    }
  }
}

function* updateProfile() {
  const payload = yield select(selectProfileFromShippingAddressForm);
  yield call(updateUser, payload);
  yield put(actions.auth.fetchMe());
}

function* presaveAddress(resolve, reject, context, isEditing) {
  const address = isEditing
    ? yield select(selectAddressFromEditShippingAddressForm)
    : yield select(selectAddressFromNewShippingAddressForm);

  yield put(SHIPPING.validateShippingAddress(address));

  const { success } = yield race({
    success: take(SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS_SUCCESS),
    failure: take(SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS_FAILURE)
  });

  if (!R.isNil(success)) {
    yield call(resolve);
    const { payload: successPayload } = success;
    const { original, suggested } = successPayload;
    yield put(SHIPPING.confirmValidatedAddress(original, suggested, context));
  } else {
    // TODO: Show a validation failure on the form
    yield call(reject);
  }
}

function* watchValidateShippingAddress() {
  yield takeLatest(
    SHIPPING_ACTIONS.VALIDATE_SHIPPING_ADDRESS,
    handleValidateShippingAddress
  );
}

function* handleValidateShippingAddress({ payload }) {
  const { address, context } = payload;
  try {
    const shippoFormattedAddress = addressUtils.shippoAddress(address);
    const suggested = yield call(validateAddress, shippoFormattedAddress);
    const appFormattedSuggestedAddress = addressUtils.appAddress(suggested);

    yield put(
      SHIPPING.validateShippingAddressSuccess(
        address,
        // TODO: Everything is assumed to be United Kingdom from here
        R.merge(
          {
            country: SHIPPING_COUNTRY
          },
          appFormattedSuggestedAddress
        ),
        context
      )
    );
  } catch (e) {
    // TODO: Show a failure reason
    yield put(SHIPPING.validateShippingAddressFailure(address, context));
  }
}

function* watchConfirmValidShippingAddress() {
  yield takeLatest(
    SHIPPING_ACTIONS.CONFIRM_VALIDATED_ADDRESS,
    handleConfirmValidShippingAddress
  );
}

function* handleConfirmValidShippingAddress(action) {
  const { context } = action.payload;
  if (
    context === SHIPPING_CONTEXTS.CHECKOUT ||
    context === SHIPPING_CONTEXTS.PROFILE
  ) {
    yield fork(handleConfirmShippingAddressInCheckout, action);
  }
}

function* handleConfirmShippingAddressInCheckout() {
  yield put(SHIPPING.changeView(SHIPPING_VIEWS.VALIDATE));
}

function* watchSaveSelectedValidatedShippingAddress() {
  yield takeEvery(
    SHIPPING_ACTIONS.SAVE_SELECTED_VALIDATED_ADDRESS,
    handleSaveSelectedValidatedShippingAddress
  );
}

function* handleSaveSelectedValidatedShippingAddress(action) {
  const { payload } = action;
  const { context } = payload;
  if (context === SHIPPING_CONTEXTS.CHECKOUT) {
    yield fork(handleSaveSelectedValidatedShippingAddressInCheckout, action);
  } else if (context === SHIPPING_CONTEXTS.PROFILE) {
    yield fork(handleSaveSelectedValidatedShippingAddressInProfile, action);
  }
}

function* handleSaveSelectedValidatedShippingAddressInCheckout({ payload }) {
  const { resolve, reject } = payload;
  const selectedOption = yield select(selectSelectedValidationOption);
  const options = yield select(selectAddressValidationState);
  const address = options[selectedOption];

  function* onCreateAddressSuccess(createdAddress) {
    yield put(SHIPPING.setCartAddress(createdAddress.id));
    yield put(actions.auth.fetchMe());
    yield put(SHIPPING.setCartAddress(createdAddress.id));
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.PAYMENT));
  }

  yield call(createNewAddressFromValidatedShippingAddress, {
    resolve,
    reject,
    address,
    onSuccess: onCreateAddressSuccess
  });
}

function* handleSaveSelectedValidatedShippingAddressInProfile({ payload }) {
  const { resolve, reject } = payload;
  const selectedOption = yield select(selectSelectedValidationOption);
  const options = yield select(selectAddressValidationState);
  const isValidAddress = hasValue(options[selectedOption]);

  const isEditingSavedAddress = yield select(selectHasAddresses);

  if (isValidAddress) {
    const address = options[selectedOption];
    if (isEditingSavedAddress) {
      const addressId = yield select(selectEditingAddressId);
      try {
        // eslint-disable-next-line
        const savedAddress = yield call(updateAddressById, {
          address,
          addressId
        });
        yield call(resolve);
        yield call(handleSaveProfileAddressSuccess);
      } catch (e) {
        // TODO: Show a failure
        yield call(reject);
      }
    } else {
      yield call(createNewAddressFromValidatedShippingAddress, {
        resolve,
        reject,
        address
      });
    }
  } else {
    // TODO: Can we actually get into this state if we can't get to confirming the validated address
    //   after a failed validation call?
    //   Probably want to show an error either way
    yield call(reject);
  }
}

// Create a new address for the active user
// Triggered on the first submission through the User Profile
// Or by choosing to add a new address in the Checkout Flow
function* createNewAddressFromValidatedShippingAddress({
  resolve,
  reject,
  address,
  onSuccess
}) {
  const me = yield select(selectMe);
  const addressPayload = R.merge(address, {
    userId: me.id
  });

  if (hasValue(address)) {
    try {
      const savedAddress = yield call(createAddress, addressPayload);
      yield call(resolve);
      yield call(handleSaveProfileAddressSuccess);
      if (onSuccess) {
        yield call(onSuccess, savedAddress);
      }
    } catch (e) {
      yield call(reject);
    }
  } else {
    yield call(
      reject,
      new SubmissionError({
        _error: "Failed to save address, no option selected."
      })
    );
  }
}

function* handleSaveProfileAddressSuccess() {
  yield put(actions.auth.fetchMe());

  yield put(SHIPPING.changeView(SHIPPING_VIEWS.LIST));
}

function* watchSetShippingAddress() {
  yield takeLatest(
    SHIPPING_ACTIONS.SELECT_SHIPPING_ADDRESS,
    handleSetShippingAddress
  );
}

function* handleSetShippingAddress({ payload }) {
  const { resolve, reject } = payload;

  try {
    const formValues = yield select(selectShippingAddressId);

    const addressId = formValues["shipping-choice"];

    if (!hasValue(addressId)) {
      yield call(
        reject,
        new SubmissionError({ _error: "Failed to set address for order" })
      );
    }
    yield put(SHIPPING.setCartAddress(addressId));
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.PAYMENT));
    yield call(resolve);
  } catch (error) {
    yield call(reject, new SubmissionError({ _error: error.message }));
  }
}

function* watchEditOriginalAddress() {
  yield takeLatest(
    SHIPPING_ACTIONS.EDIT_ORIGINAL_ADDRESS,
    handleEditOriginalAddress
  );
}

function* handleEditOriginalAddress() {
  const original = yield select(selectOriginalAddress);
  // TODO: We lose their name, phone number. Need to retain and merge back.
  yield put(initialize(SHIPPING_FORMS.CHECKOUT, original, false));
  yield put(SHIPPING.changeView(SHIPPING_VIEWS.NEW));
  const me = yield select(selectMe);
  const profileData = R.pick(["firstName", "lastName", "phone"], me);
  const mergedData = R.merge(original, profileData);
  yield put(initialize(SHIPPING_FORMS.CHECKOUT, mergedData, false));
  yield put(SHIPPING.changeView(SHIPPING_VIEWS.NEW));
}

function* watchEditSavedAddress() {
  yield takeLatest(SHIPPING_ACTIONS.EDIT_SAVED_ADDRESS, handleEditSavedAddress);
}

function* handleEditSavedAddress({ payload }) {
  const { context, isValidating } = payload;
  const address = yield select(
    isValidating ? selectEditedSavedAddress : selectSavedAddressForEditing
  );
  if (context === SHIPPING_CONTEXTS.PROFILE) {
    yield put(initialize(SHIPPING_FORMS.PROFILE, address, false));
  }
  yield put(SHIPPING.changeView(SHIPPING_VIEWS.EDIT));
}

export default function*() {
  yield all([
    fork(watchConfirmValidShippingAddress),
    fork(watchPreSaveNewShippingAddress),
    fork(watchSaveSelectedValidatedShippingAddress),
    fork(watchSetShippingAddress),
    fork(watchValidateShippingAddress),
    fork(watchEditOriginalAddress),
    fork(watchCheckoutChangeStep),
    fork(watchEditSavedAddress)
  ]);
}
