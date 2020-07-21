import { css } from "styled-components";

import { Headline2Styles } from "../../../fonts";

export const PrimaryNavigationStyle = css`
  ${Headline2Styles};
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.modules.navigation.primary.color};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.modules.navigation.primary.hover};
  }
`;
