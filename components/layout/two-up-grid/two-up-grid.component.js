import React from "react";
import PropTypes from "prop-types";

import { Grid } from "../../../components/layout";

export const TwoUpGrid = ({ items }) => (
  <Grid container>
    {items.map((item, index) => (
      <Grid
        key={`two-up-${index}`}
        xs={13}
        smOffset={1}
        sm={6}
        mdOffset={2}
        md={9}
        lgOffset={2}
        lg={9}
        item
      >
        {item}
      </Grid>
    ))}
  </Grid>
);

TwoUpGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element)
};
