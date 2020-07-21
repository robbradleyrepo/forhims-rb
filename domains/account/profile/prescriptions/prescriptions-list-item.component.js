import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../../components/block";
import { RouterLink } from "../../../../components/fonts";
import { EyeIcon } from "../../../../components/icons/eye-icon";

import { PrescriptionsTitle } from "./prescriptions.style";

export const PrescriptionsListItem = ({ title, treatmentPlan }) => (
  <Block display="flex">
    <PrescriptionsTitle>{title}</PrescriptionsTitle>
    {treatmentPlan && (
      <Block display="flex" alignItems="center" ml="auto">
        <EyeIcon height={16} />
        <Block ml={2}>
          <RouterLink to={treatmentPlan}>VIEW PLAN</RouterLink>
        </Block>
      </Block>
    )}
  </Block>
);

PrescriptionsListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  treatmentPlan: PropTypes.string
};
