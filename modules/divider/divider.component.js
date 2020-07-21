import React from "react";

import { ModuleDivider } from "./divider.style";

import { Grid, CenteredGridItem } from "../../components/layout";

export const Divider = () => (
  <Grid container>
    <CenteredGridItem xs={13} sm={14} md={20} lg={20}>
      <ModuleDivider />
    </CenteredGridItem>
  </Grid>
);
