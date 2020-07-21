import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../components/block";

import { TreatmentsPageLayout } from "../treatments-page-layout";
import { TreatmentsList } from "../treatments-list";
import { TreatmentsListTitle } from "./treatment-plans.style";

export const TreatmentPlans = ({ plans }) => (
  <TreatmentsPageLayout>
    <Block>
      <Block mb={4}>
        <TreatmentsListTitle as="h1">Treatment Plans</TreatmentsListTitle>
      </Block>
      <TreatmentsList items={plans} />
    </Block>
  </TreatmentsPageLayout>
);
TreatmentPlans.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  )
};
