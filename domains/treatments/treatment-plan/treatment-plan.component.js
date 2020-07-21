import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../components/block";
import { Markdown } from "../../../components/markdown";
import { Subheadline } from "../../../components/fonts";

import { TreatmentsPageLayout } from "../treatments-page-layout";
import {
  TreatmentPlanContent,
  DefaultBold,
  TreatmentPlanTitle
} from "./treatment-plan.style";

const DefaultBoldRenderer = props => <DefaultBold {...props} />;
const markdownRenderers = {
  strong: DefaultBoldRenderer
};

export const TreatmentPlan = ({ content, description, title }) => (
  <TreatmentsPageLayout>
    <Block mb={3}>
      <TreatmentPlanTitle>{title}</TreatmentPlanTitle>
    </Block>
    <Block mb={4}>
      <Subheadline>{description}</Subheadline>
    </Block>
    <TreatmentPlanContent>
      <Markdown content={content} renderers={markdownRenderers} />
    </TreatmentPlanContent>
  </TreatmentsPageLayout>
);
TreatmentPlan.propTypes = {
  content: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
