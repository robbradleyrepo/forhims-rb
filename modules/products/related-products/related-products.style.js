import styled from "styled-components";

import { combineRems } from "../../../utils/rem";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

// TODO: Refactor with shared module wrapper component
export const RelatedProductsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.five)}
    0;

  ${createMinWidthMediaQuery("small")} {
    padding: ${({ theme: { spacing } }) =>
        combineRems(spacing.two, spacing.three, spacing.four, spacing.five)}
      0;
  }
`;
