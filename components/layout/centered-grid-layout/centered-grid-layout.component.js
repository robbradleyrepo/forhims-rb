import React from "react";
import PropTypes from "prop-types";

import { Grid } from "../grid";
import { calculateCenteredItemSpacing } from "../grid/grid.utils";
import { GRID_CONTAINER_COLUMNS } from "../grid/grid.constants";

import { CenteredGridLayoutItem } from "./centered-grid-layout.style";

export const CenteredGridLayout = ({
  xs,
  sm,
  md,
  lg,
  xsSpacing,
  smSpacing,
  mdSpacing,
  lgSpacing,
  items
}) => {
  return (
    <Grid container centered>
      {items.map((item, index) => {
        const xsOffset = calculateCenteredItemSpacing(
          xsSpacing,
          GRID_CONTAINER_COLUMNS.XS
        );
        const smOffset = calculateCenteredItemSpacing(
          smSpacing,
          GRID_CONTAINER_COLUMNS.SM
        );
        const mdOffset = calculateCenteredItemSpacing(
          mdSpacing,
          GRID_CONTAINER_COLUMNS.MD
        );
        const lgOffset = calculateCenteredItemSpacing(
          lgSpacing,
          GRID_CONTAINER_COLUMNS.LG
        );
        return (
          <CenteredGridLayoutItem
            key={`centered-grid-container-${index}`}
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
            {item}
          </CenteredGridLayoutItem>
        );
      })}
    </Grid>
  );
};

CenteredGridLayout.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsSpacing: PropTypes.number,
  smSpacing: PropTypes.number,
  mdSpacing: PropTypes.number,
  lgSpacing: PropTypes.number
};
