import styled from "styled-components";

import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { Grid } from "../grid";
import { GRID_CONTAINER_COLUMNS } from "../grid/grid.constants";
import { calculateWidthFromGridSpan } from "../grid/grid.utils";

export const CenteredGridLayoutItem = styled(Grid)`
  margin-right: ${({ xsOffset }) =>
    calculateWidthFromGridSpan(xsOffset, GRID_CONTAINER_COLUMNS.XS)};

  ${createMinWidthMediaQuery("small")} {
    margin-right: ${({ smOffset }) =>
      calculateWidthFromGridSpan(smOffset, GRID_CONTAINER_COLUMNS.SM)};
  }

  ${createMinWidthMediaQuery("medium")} {
    margin-right: ${({ mdOffset }) =>
      calculateWidthFromGridSpan(mdOffset, GRID_CONTAINER_COLUMNS.MD)};
  }

  ${createMinWidthMediaQuery("large")} {
    margin-right: ${({ lgOffset }) =>
      calculateWidthFromGridSpan(lgOffset, GRID_CONTAINER_COLUMNS.LG)};
  }
`;
