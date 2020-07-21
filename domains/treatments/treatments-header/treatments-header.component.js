import React from "react";

import {
  TreatmentsHeaderLink,
  TreatmentsHeaderWrapper
} from "./treatments-header.style";

export const TreatmentsHeader = () => (
  <TreatmentsHeaderWrapper>
    <TreatmentsHeaderLink to="/user-terms">User Terms</TreatmentsHeaderLink>
    <TreatmentsHeaderLink to="/service-terms">
      Service Terms
    </TreatmentsHeaderLink>
  </TreatmentsHeaderWrapper>
);
