import React from "react";
import PropTypes from "prop-types";

import { numberInRange } from "../../../utils/custom-prop-types";
import { GridDiv } from "./grid.style";
import { GRID_CONTAINER_COLUMNS } from "./grid.constants";

// When specifying xs, sm, md, lg to a grid item:
// the grid container used for the entire page layout will have
// (xs) 0-767px --> 13 fluid columns with 24px outer gutters
// (sm) 768-1024px --> 16 columns
// (md) 1025 and up --> 24 columns
// (lg) 1440 and up --> 24 columns, allows for layout and spacing tweaks
// This is to follow the design spec.
// So a grid item with xs={4} sm={4} md={4} will take up 1/3, 1/4,
// and 1/6 of the row, respectively, at the above breakpoint sizes

export const Grid = ({
  children,
  className,
  id,
  container = false,
  showColumns = false,
  showBorder = false,
  item = false,
  lg,
  lgOffset,
  md,
  mdOffset,
  sm,
  smOffset,
  xs,
  xsOffset,
  fullWidth,
  centered
}) => (
  <GridDiv
    id={id}
    item={item}
    container={container}
    xs={xs}
    xsOffset={xsOffset}
    sm={sm}
    smOffset={smOffset}
    md={md}
    mdOffset={mdOffset}
    lg={lg}
    lgOffset={lgOffset}
    className={className}
    showBorder={showBorder}
    showColumns={showColumns}
    fullWidth={fullWidth && xs === GRID_CONTAINER_COLUMNS.XS}
    centered={container && centered}
  >
    {children}
  </GridDiv>
);

Grid.defaultProps = {
  xsOffset: 0,
  smOffset: 0,
  mdOffset: 0,
  lgOffset: 0
};

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  centered: PropTypes.bool,
  container: PropTypes.bool,
  id: PropTypes.string,
  showBorder: PropTypes.bool,
  showColumns: PropTypes.bool,
  item: PropTypes.bool,
  fullWidth: PropTypes.bool,
  lg: numberInRange(1, 25), // up to 24
  lgOffset: numberInRange(0, 25), // up to 24
  md: numberInRange(1, 25), // up to 24
  mdOffset: numberInRange(0, 25), // up to 24
  sm: numberInRange(1, 17), // up to 16
  smOffset: numberInRange(0, 17), // up to 16
  xs: numberInRange(1, 14), // up to 13
  xsOffset: numberInRange(0, 14) // up to 13
};
