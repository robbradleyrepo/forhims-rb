import styled from "styled-components";

import {
  Headline2,
  Headline4,
  P,
  BodySmall
} from "../../../../components/fonts";
import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";
import { combineRems } from "../../../../utils/rem";
import { Grid } from "../../../../components/layout";

export const BrandsListWrapper = styled.div`
  padding: ${({ theme: { spacing } }) =>
    `${spacing.six} 0 ${combineRems(spacing.three, spacing.five)}`};
`;

export const Headline2OnPrimary = styled(Headline2)`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;

export const Headline4OnPrimary = styled(Headline4)`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;

export const BodyLargeOnPrimary = styled(P)`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;
export const BodySmallOnPrimary = styled(BodySmall)`
  color: ${({ theme }) => theme.colors.text.onPrimary};
`;

export const DescriptionWrapper = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    max-width: 70%;
  }
  ${BodyLargeOnPrimary} {
    margin: 0;
  }
`;
export const BrandsTableRow = styled(Grid)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.highlight};
`;

export const BrandsProductRow = styled(BrandsTableRow)`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.four} 0;
`;
