import styled from "styled-components";
import { combineRems } from "../../utils/rem";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const IngredientsWrapper = styled.div`
  padding: 6.5rem 0;
  ${createMinWidthMediaQuery("small")} {
    padding: 7.5rem ${({ theme: { grid } }) => grid.column};
  }
  height: 100%;
  overflow-y: scroll;
`;

export const IngredientsTitleWrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.two)};
`;

export const IngredientsSummaryWrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.two)};
  & h4 {
    color: ${({ theme, category }) => theme.colors.brand[category]};
  }
`;

export const IngredientsListWrapper = styled.div`
  & p {
    line-height: 1.75rem;
  }
`;
