import R from "ramda";
import promiseApi from "./api";
import { capitalizeAllWordsInString, renameKeys } from "../utils";

const MILITARY_STATES = ["AE", "AP", "AA"];
const ATTRS_UPDATABLE = ["line1", "line2", "city", "state", "zip"];
const SHIPPO_FIELDS_TO_NORMALIZE = ["line1", "line2", "city"];
const BAD_ADDR =
  "Looks like we cannot ship to this address. Please make sure the address is entered correctly.";

const normalizeShippoFields = R.curry((fieldsToNormalize, address) => {
  const addressClone = R.clone(address);
  R.map(fieldName => {
    addressClone[fieldName] = capitalizeAllWordsInString(address[fieldName]);
  }, fieldsToNormalize);
  return addressClone;
});

/**
 * converts app specific address to shippo address
 * @param {Object} address
 */
const shippoAddress = address => {
  return R.compose(
    R.merge({ validate: true }),
    renameKeys({
      line1: "street1",
      line2: "street2"
    }),
    R.pick(["line1", "line2", "city", "state", "country", "zip"])
  )(address);
};

/**
 * converts shippo response address to app specific address
 * @param {Object} address
 */
const appAddress = address => {
  return R.compose(
    normalizeShippoFields(SHIPPO_FIELDS_TO_NORMALIZE),
    renameKeys({
      street1: "line1",
      street2: "line2"
    }),
    R.pick(["street1", "street2", "city", "state", "zip"])
  )(address);
};
/**
 * promise based address validation using the shippo api.
 * IF recommendedAddressTrigger is sent, this will trigger the function being sent with the reject and resolve functions
 * trigger, success and failure hooks can be sent to fire respectively
 * @param {Object} formValues
 * @param {Function} recommendedAddressTrigger
 * @param {Object of Functions} validateAddressHooks
 * @param {Boolean} addressValidationEnabled
 */
const validateAddress = ({
  formValues,
  recommendedAddressTrigger,
  validateAddressHooks = {},
  addressValidationEnabled
}) => {
  return new Promise((resolve, reject) => {
    const formattedAppAddress = R.pick(ATTRS_UPDATABLE, formValues);
    // if the address is a military state or the state config addressValidationEnabled flag is false, do not validate and return the user entered address

    if (
      !addressValidationEnabled ||
      R.contains(formValues.state, MILITARY_STATES)
    ) {
      return resolve(formattedAppAddress);
    }
    validateAddressHooks.trigger && validateAddressHooks.trigger();
    // if request takes longer that 5 seconds resolve with user entered address
    const timeout = setTimeout(() => {
      resolve(formattedAppAddress);
    }, 5000);
    promiseApi.address
      .validate(shippoAddress(formValues))
      .then(response => {
        clearTimeout(timeout);
        // if validation returns a false isValid flag, send the warnings to the user
        if (!response.validationResults.isValid) {
          let error = R.head(response.validationResults.messages).text;
          validateAddressHooks.trigger &&
            validateAddressHooks.failure({ error, formValues, response });
          return reject(new Error(error));
        }
        const formattedShippoAddress = appAddress(response);
        /**
         * if recommendedAddressTrigger is sent, trigger the function sending it the resolve and reject functions
         * along with the original and shippo address to prompt the user with
         */
        if (
          recommendedAddressTrigger &&
          !R.equals(formattedShippoAddress, formattedAppAddress)
        ) {
          return recommendedAddressTrigger({
            resolve,
            reject,
            originalAddress: formValues,
            shippoAddress: R.merge(formValues, formattedShippoAddress)
          });
        }
        validateAddressHooks.trigger && validateAddressHooks.success();
        // if recommendedAddressTrigger is not sent return the valid user entered address, or the shippo address
        return resolve(
          recommendedAddressTrigger
            ? formattedShippoAddress
            : formattedAppAddress
        );
      })
      .catch(() => {
        clearTimeout(timeout);
        reject(new Error(BAD_ADDR));
      });
  });
};

module.exports = {
  appAddress,
  shippoAddress,
  validateAddress
};
