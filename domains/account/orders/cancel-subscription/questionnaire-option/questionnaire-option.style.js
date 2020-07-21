import styled from "styled-components";
import { Link } from "react-router";

export const OptionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  margin: 0;
`;

export const OptionLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.brand.hair};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  &:visited {
    color: inherit;
  }
  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.brand.sex};
  }
`;
