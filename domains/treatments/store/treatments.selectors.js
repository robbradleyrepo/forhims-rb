import { createStructuredSelector } from "reselect";
import { always, propOr } from "ramda";

import { PRODUCT_TREATMENT_PLANS } from "./treatments.constants";

// Select entire treatment plans state
export const selectTreatmentPlansById = propOr({}, "treatmentPlanByProductId");

// TODO: Add i18n support to fixture treatment data
const selectProductTreatmentPlans = always(PRODUCT_TREATMENT_PLANS);

export const treatmentPlansConnector = createStructuredSelector({
  plans: selectProductTreatmentPlans
});
