import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import { treatmentPlansConnector } from "../store";
import { TreatmentPlans } from "./treatment-plans.component";
import { Page } from "../../../components/page";

const dispatchers = null;

const withHelmet = PageComponent => props => {
  const title = "Treatment Plans";
  const description =
    "This treatment plan reviews the risks and benefits of the treatment we are recommending. Please make sure to read it and the manufacturer's pamphlet that comes with the medicine. The manufacturer's pamphlet contains the full information on interactions, side effects, and other important information you should know about the medicine before you start.";
  const TreatmentPlansPage = (
    <Page
      sections={[<PageComponent key="treatment-plans-page" {...props} />]}
      title={title}
      description={description}
      withSiteName
    />
  );
  return TreatmentPlansPage;
};

export const TreatmentPlansContainer = compose(
  connect(
    treatmentPlansConnector,
    dispatchers
  ),
  withHelmet
)(TreatmentPlans);
