import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import { Grid } from "../../layout/grid";

const isFirst = equals(0);

// A grid of three centered items on md, lg displays
// __[------]_[------]_[------]__
// Falls back to full width for xs, sm sizes

export const ThreeUpGrid = ({ items }) => (
  <Grid container>
    {items.map((item, index) => (
      <Grid
        smOffset={1}
        sm={14}
        md={6}
        mdOffset={isFirst(index) ? 2 : 1}
        key={`three-up-${index}-wrapper`}
        item
      >
        {item}
      </Grid>
    ))}
  </Grid>
);
ThreeUpGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element)
};
