import styled, { css } from "styled-components";
import { rem } from "polished";

import { BaseballCard } from "../../../components/baseball-card";
import {
  createMinWidthMediaQuery,
  createFluidCssValueByBreakpoint
} from "../../../utils/breakpoints";
import { combineRems } from "../../../utils/rem";

const cardWidthMin = rem(312);
const cardWidthMax = rem(448);

const fluidCardWidthCalculation = createFluidCssValueByBreakpoint({
  min: cardWidthMin,
  max: cardWidthMax,
  breakpointMin: "minimum",
  breakpointMax: "large"
});

const fluidGridGapCalculation = createFluidCssValueByBreakpoint({
  min: rem(16),
  max: rem(80),
  breakpointMin: "small",
  breakpointMax: "large"
});

export const FullWidthBaseballCard = styled(BaseballCard)``;

export const ProductBaseballCardWrapper = styled.div`
  max-width: calc(${fluidCardWidthCalculation});
  width: 100%;

  ${FullWidthBaseballCard} {
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

const lessThanThreeProductsCss = css`
  display: flex;
  justify-content: center;
`;

const threeOrMoreProductsCss = css`
  grid-template-columns: 1fr 1fr;
  grid-column-gap: calc(${fluidGridGapCalculation});
  grid-row-gap: calc(${fluidGridGapCalculation});
  justify-items: unset;

  ${ProductBaseballCardWrapper} {
    &:nth-child(odd) {
      justify-self: end;
    }
  }
`;

export const ProductBaseballCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: ${({ theme: { spacing } }) =>
    combineRems(spacing.two, spacing.three)};
  justify-items: center;

  ${createMinWidthMediaQuery("small")} {
    ${({ numProducts }) =>
      numProducts >= 3 ? threeOrMoreProductsCss : lessThanThreeProductsCss};
  }
`;
