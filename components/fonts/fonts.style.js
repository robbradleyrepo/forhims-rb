import { css } from "styled-components";

export const HeadlineReset = css`
  color: ${({ onPrimary, theme }) =>
    onPrimary ? theme.colors.text.onPrimary : theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-weight: ${({ theme }) => theme.fontWeights.headingSmall};
  margin: 0;
`;
