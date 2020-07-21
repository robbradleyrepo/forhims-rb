import React from "react";
import PropTypes from "prop-types";

import { Block } from "../../../components/block";
import { Grid, CenteredGridItem } from "../../../components/layout";
import { TreatmentsHeader } from "../treatments-header";

import { TreatmentsPageWrapper } from "./treatments-page-layout.style";

export const TreatmentsPageLayout = ({ children }) => (
  <TreatmentsPageWrapper>
    <Grid container>
      <CenteredGridItem xs={13} sm={14} md={16} lg={12}>
        <Block width="100%">
          <Block pb={3} mb={4}>
            <TreatmentsHeader />
          </Block>
          <Block>{children}</Block>
        </Block>
      </CenteredGridItem>
    </Grid>
  </TreatmentsPageWrapper>
);
TreatmentsPageLayout.propTypes = {
  children: PropTypes.node
};
