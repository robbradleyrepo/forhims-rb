import styled from "styled-components";

export const DescriptionStyle = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing.three};
  vertical-align: middle;
  text-decoration: none;
  color: ${props => props.theme.modules.navigation.primary.color};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.spacing.three};

  @media screen and (max-width: ${props => props.theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.spacing.two};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.small}) {
    font-size: ${({ theme }) => theme.spacing.one};
  }
`;

DescriptionStyle.displayName = "DescriptionStyle";
