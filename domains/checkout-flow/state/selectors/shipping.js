import R from "ramda";
import { createStructuredSelector, createSelector } from "reselect";

import { addressToLines } from "../../../../utils/address";
import { selectMe } from "./account";
import {
  SHIPPING_FORMS,
  SHIPPING_VIEWS
} from "../../../shipping/shipping.constants";

import { hasValue, renameKeys } from "../../../../utils";

export const selectCheckoutShippingState = R.path(["checkoutTemp", "shipping"]);

export const selectAccountAddresses = createSelector(
  selectMe,
  R.pathOr([], ["addresses"])
);

export const selectHasCompleteProfileData = createSelector(
  selectMe,
  R.pipe(
    R.pick(["firstName", "lastName", "phone"]),
    R.values,
    R.any(R.complement(hasValue)),
    R.not
  )
);

export const selectHasAddresses = createSelector(
  selectAccountAddresses,
  R.compose(
    R.gt(R.__, 0),
    R.length
  )
);

export const selectCurrentCheckoutShippingView = createSelector(
  selectCheckoutShippingState,
  R.propOr(SHIPPING_VIEWS.NEW, "activeView")
);

export const selectShippingAddressFormValues = R.pathOr({}, [
  "form",
  "shipping-address",
  "values"
]);

export const selectShippingValidationFormValues = R.pathOr({}, [
  "form",
  "shipping-address-validate",
  "values"
]);

export const selectSelectedValidationOption = createSelector(
  selectShippingValidationFormValues,
  R.prop("shipping-choice")
);

export const selectProfileShippingAddressFormValues = R.pathOr({}, [
  "form",
  SHIPPING_FORMS.PROFILE,
  "values"
]);

// TODO: Match this to what is required by the validation API, or format it in another selector
export const selectAddressFromNewShippingAddressForm = createSelector(
  selectShippingAddressFormValues,
  R.pick(["line1", "line2", "city", "state", "zip", "country"])
);

export const selectAddressFromEditShippingAddressForm = createSelector(
  selectProfileShippingAddressFormValues,
  R.pick(["line1", "line2", "city", "state", "zip", "country"])
);

export const selectProfileFromShippingAddressForm = createSelector(
  selectShippingAddressFormValues,
  R.pick(["firstName", "lastName", "phone", "sms"])
);

export const selectStates = createSelector(
  R.pathOr([], ["states", "data"]),
  R.map(
    R.compose(
      renameKeys({ state: "value", name: "label" }),
      R.pick(["state", "name"])
    )
  )
);

export const selectPlaceholderFormOptions = createSelector(
  selectStates,
  stateOptions => ({ stateOptions })
);

// ==== ADDRESS VALIDATION ====
export const selectAddressValidationState = createSelector(
  selectCheckoutShippingState,
  R.prop("validation")
);

export const selectOriginalAddress = createSelector(
  selectAddressValidationState,
  R.prop("original")
);

const selectFormattedOriginalAddress = createSelector(
  selectOriginalAddress,
  R.pipe(
    addressToLines,
    R.merge({ id: "original" })
  )
);

const selectSuggestedAddress = createSelector(
  selectAddressValidationState,
  R.prop("suggested")
);

const selectFormattedSuggestedAddress = createSelector(
  selectSuggestedAddress,
  R.pipe(
    addressToLines,
    R.merge({ id: "suggested" })
  )
);

const selectValidationOptions = createSelector(
  selectFormattedOriginalAddress,
  selectFormattedSuggestedAddress,
  (original, suggested) => ({ original, suggested })
);

const selectFormattedAddresses = createSelector(
  selectAccountAddresses,
  R.map(
    R.pipe(
      R.pick(["id", "line1", "line2", "city", "state", "country"]),
      ({ id, ...address }) => R.merge({ id }, addressToLines(address))
    )
  )
);

export const selectSession = R.path(["me"]);

export const selectShippingAddressId = R.pathOr({}, [
  "form",
  "shipping-address-list",
  "values"
]);

export const selectEditingAddressId = createSelector(
  selectCheckoutShippingState,
  R.propOr(null, "editingAddressId")
);

export const selectSavedAddressForEditing = createSelector(
  selectAccountAddresses,
  selectEditingAddressId,
  (addresses, addressId) => R.find(R.propEq("id", addressId), addresses)
);

export const selectEditedSavedAddress = createSelector(
  selectSavedAddressForEditing,
  selectOriginalAddress,
  (savedAddress, originalAddress) => ({
    ...savedAddress,
    ...originalAddress
  })
);

// Connected Components

export const newShippingAddressConnector = createStructuredSelector({
  formProps: selectPlaceholderFormOptions,
  hasAddresses: selectHasAddresses,
  hasCompleteProfileData: selectHasCompleteProfileData
});

export const checkoutShippingStepsConnector = createStructuredSelector({
  activeView: selectCurrentCheckoutShippingView
});

export const validateShippingAddressConnector = createStructuredSelector({
  options: selectValidationOptions,
  addressId: selectEditingAddressId
});

export const checkoutShippingAddressesConnector = createStructuredSelector({
  addresses: selectFormattedAddresses
});
