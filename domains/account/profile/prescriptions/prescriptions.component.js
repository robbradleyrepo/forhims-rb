import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../../components/block";
import { hasValue } from "../../../../utils";

import {
  PrescriptionsList,
  PrescriptionsListItemWrapper
} from "./prescriptions.style";
import { PrescriptionsListItem } from "./prescriptions-list-item.component";

export const Prescriptions = ({ prescriptions = [] }) => (
  <Block>
    <PrescriptionsList>
      {hasValue(prescriptions) ? (
        prescriptions.map(({ id, title, treatmentPlan }) => (
          <PrescriptionsListItemWrapper key={id}>
            <PrescriptionsListItem
              id={id}
              title={title}
              treatmentPlan={treatmentPlan}
            />
          </PrescriptionsListItemWrapper>
        ))
      ) : (
        <PrescriptionsListItemWrapper>
          <PrescriptionsListItem
            id="no-prescriptions"
            title="No prescriptions found"
          />
        </PrescriptionsListItemWrapper>
      )}
    </PrescriptionsList>
  </Block>
);
Prescriptions.propTypes = {
  prescriptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      treatmentPlan: PropTypes.string
    })
  )
};
