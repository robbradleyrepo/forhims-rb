import styled from "styled-components";

import { combineRems } from "../../../utils/rem";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

// TODO: Refactor with shared module wrapper component
export const ProductsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.five)}
    0;
`;

// ${createMinWidthMediaQuery("small")} {
//   padding: ${({ theme: { spacing } }) =>
//       combineRems(spacing.two, spacing.three, spacing.four, spacing.five)}
//     0;
// }

export const PrescriptionTextWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ProductGridWrapper = styled.div`
  width: 100%;

  margin-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.four)};

  ${createMinWidthMediaQuery("small")} {
    margin-bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.four, spacing.five)};
  }

  ${createMinWidthMediaQuery("medium")} {
    margin-bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.four, spacing.five)};
  }
`;
