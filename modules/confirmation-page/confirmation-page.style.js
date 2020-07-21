import styled from "styled-components";

import { Headline2 } from "../../components/fonts/h2";
import { P } from "../../components/fonts/p";
import { UnderlinedRouterLink } from "../../components/text-link";
import { combineRems } from "../../utils/rem";

export const ConfirmationWrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.canvas.primary};
  padding: ${({ theme: { spacing } }) =>
    `${spacing.six} ${spacing.four} ${combineRems(
      spacing.three,
      spacing.four
    )}`};
  text-align: center;
`;

export const ConfirmationNumber = styled(Headline2)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: ${({ theme }) => theme.spacing.three};
`;
export const ConfirmationText = styled(P)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding-bottom: ${({ theme }) => theme.spacing.three};
`;

export const SupportLink = styled(UnderlinedRouterLink)`
  color: ${({ theme }) => theme.colors.text.callout};
  border-color: currentColor;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.text.active};
    border-color: currentColor;
  }
`;
