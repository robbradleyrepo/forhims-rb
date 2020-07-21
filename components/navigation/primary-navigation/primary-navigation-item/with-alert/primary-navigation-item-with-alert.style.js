import styled from "styled-components";

export const NavigationItemWithAlertContainer = styled.div`
  color: ${({ theme }) => theme.colors.text.callout};
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    opacity: ${({ theme }) => theme.colors.opacity.hover};
  }
  & svg {
    margin-right: ${({ theme: { spacing } }) => spacing.two};
  }
`;
