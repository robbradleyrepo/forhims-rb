import styled, { css, createGlobalStyle } from "styled-components";

import { CONTENT_MAX_WIDTH } from "../../../theme/breakpoints";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../../utils/breakpoints";
import { GRID_CONTAINER_COLUMNS, GRID_GUTTERS } from "./grid.constants";
import { calculateWidthFromGridSpan } from "./grid.utils";

export const GridGlobalStyle = createGlobalStyle`
  :root {
    --gridColumn: calc(
      (100vw - (${GRID_GUTTERS.XS} * 2)) / ${GRID_CONTAINER_COLUMNS.XS}
    );
    --gridGutter: ${GRID_GUTTERS.XS};

    ${createMinWidthMediaQuery("small")} {
      --gridColumn: calc(100vw / ${GRID_CONTAINER_COLUMNS.SM});
      --gridGutter: 0rem;
    }
    ${createMinWidthMediaQuery("medium")} {
      --gridColumn: calc(100vw / ${GRID_CONTAINER_COLUMNS.MD});
    }
    ${createMinWidthMediaQuery("large")} {
      --gridColumn: calc(100vw / ${GRID_CONTAINER_COLUMNS.LG});
    }
  }
`;

// GRID CONTAINER

const GridContainerStyles = css`
  display: flex;
  flex-wrap: wrap;
  height: initial;
  justify-content: ${({ centered }) => (centered ? "center" : "flex-start")};
  max-width: ${CONTENT_MAX_WIDTH};
  padding-left: ${GRID_GUTTERS.XS};
  padding-right: ${GRID_GUTTERS.XS};
  width: 100%;

  & & {
    ${createMaxWidthMediaQuery("small")} {
      padding-left: 0;
      padding-right: 0;
    }
  }

  ${createMinWidthMediaQuery("small")} {
    padding-left: 0;
    padding-right: 0;
  }
`;
// GRID ITEM Utils

const createGridItemStyles = ({ span, offset, columns, gutters }) => css`
  margin-left: ${calculateWidthFromGridSpan(offset, columns)};
  width: ${calculateWidthFromGridSpan(span, columns)};
`;

const createGridItemStylesByBreakpoint = ({
  span,
  offset,
  columns,
  breakpoint
}) => css`
  ${createMinWidthMediaQuery(breakpoint)} {
    ${createGridItemStyles({ span, offset, columns })};
  }
`;

// GRID ITEM Styles

const xsmallItemStyles = ({ xs, xsOffset }) =>
  createGridItemStyles({
    span: xs,
    columns: GRID_CONTAINER_COLUMNS.XS,
    offset: xsOffset,
    gutters: GRID_GUTTERS.XS
  });

const smallItemStyles = ({ sm, smOffset }) =>
  createGridItemStylesByBreakpoint({
    span: sm,
    columns: GRID_CONTAINER_COLUMNS.SM,
    offset: smOffset,
    breakpoint: "small"
  });

const mediumItemStyles = ({ md, mdOffset }) =>
  createGridItemStylesByBreakpoint({
    span: md,
    columns: GRID_CONTAINER_COLUMNS.MD,
    offset: mdOffset,
    breakpoint: "medium"
  });

const largeItemStyles = ({ lg, lgOffset }) =>
  createGridItemStylesByBreakpoint({
    span: lg,
    columns: GRID_CONTAINER_COLUMNS.LG,
    offset: lgOffset,
    breakpoint: "large"
  });

const fullWidthItemStyles = css`
  ${createMaxWidthMediaQuery("small")} {
    margin: 0 -${GRID_GUTTERS.XS};
    max-width: none;
    width: 100vw;
  }
`;

const GridItemStyles = css`
  display: flex;
  width: 100%;
  min-height: initial;
  ${({ xs }) => xs && xsmallItemStyles};
  ${({ sm }) => sm && smallItemStyles};
  ${({ md }) => md && mediumItemStyles};
  ${({ lg }) => lg && largeItemStyles};
  ${({ fullWidth }) => fullWidth && fullWidthItemStyles};
`;

export const GridDiv = styled.div`
  ${({ item }) => item && GridItemStyles};
  ${({ container }) => container && GridContainerStyles};
  ${({ showColumns }) => showColumns && GridContainerDebugStyles};
  ${({ showBorder }) => showBorder && GridItemDebugStyles};
`;

// Debugging styles
const GridContainerDebugStyles = css`
  background: repeating-linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.ui.divider},
    transparent 2%,
    transparent 98%,
    ${({ theme }) => theme.colors.ui.divider} 100%
  );

  background-size: calc(
    (100% - (${GRID_GUTTERS.XS} * 2)) / ${GRID_CONTAINER_COLUMNS.XS}
  );

  &::after {
    content: "grid: xs, 13 + gutters";
  }

  ${createMinWidthMediaQuery("small")} {
    background-size: 6.25%;

    &::after {
      content: "grid: sm,  > small, 16";
    }
  }

  ${createMinWidthMediaQuery("medium")} {
    background-size: 4.16%;

    &::after {
      content: "grid: md, > medium, 24";
    }
  }

  ${createMinWidthMediaQuery("large")} {
    background-size: 4.16%;

    &::after {
      content: "grid: lg, > medium, 24";
    }
  }
`;

const GridItemDebugStyles = css`
  border: 1px solid #00000044;
`;
