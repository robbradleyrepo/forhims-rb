import React from "react";
import PropTypes from "prop-types";

import { Grid } from "../grid";
import { GRID_CONTAINER_COLUMNS } from "../grid/grid.constants";
import { calculateCenteredItemOffset } from "../grid/grid.utils";

export const CenteredGridItem = ({ xs, sm, md, lg, children }) => {
  const xsOffset = calculateCenteredItemOffset(xs, GRID_CONTAINER_COLUMNS.XS);
  const smOffset = calculateCenteredItemOffset(sm, GRID_CONTAINER_COLUMNS.SM);
  const mdOffset = calculateCenteredItemOffset(md, GRID_CONTAINER_COLUMNS.MD);
  const lgOffset = calculateCenteredItemOffset(lg, GRID_CONTAINER_COLUMNS.LG);
  return (
    <Grid
      xs={xs}
      xsOffset={xsOffset}
      sm={sm}
      smOffset={smOffset}
      md={md}
      mdOffset={mdOffset}
      lgOffset={lgOffset}
      lg={lg}
      item
    >
      {children}
    </Grid>
  );
};

CenteredGridItem.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};
