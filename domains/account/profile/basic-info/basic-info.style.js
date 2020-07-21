import styled from "styled-components";
import { combineRems } from "../../../../utils/rem";

export const BasicInfoLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  width: ${({ theme: { spacing } }) =>
    combineRems(spacing.five, spacing.three)};
`;
export const BasicInfoValue = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: ${({ theme }) => theme.spacing.two};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const BasicInfoItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.three};
  display: flex;
  text-align: left;
`;
