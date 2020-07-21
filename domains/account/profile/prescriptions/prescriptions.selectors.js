import { createSelector, createStructuredSelector } from "reselect";
import { assoc, map, propOr } from "ramda";

import { getPrescriptions } from "../../../../selectors/me";
import { selectTreatmentPlansById } from "../../../treatments/store";

const addTreatmentPlanToPrescriptionById = treatmentPlans => prescription =>
  assoc("treatmentPlan", propOr("", prescription.id)(treatmentPlans))(
    prescription
  );

const selectPrescriptions = createSelector(
  getPrescriptions,
  selectTreatmentPlansById,
  (prescriptions, treatmentPlans) =>
    prescriptions
      ? map(addTreatmentPlanToPrescriptionById(treatmentPlans))(prescriptions)
      : []
);

export const prescriptionsConnector = createStructuredSelector({
  prescriptions: selectPrescriptions
});
