import styled from "styled-components";

export const CartLineItemStyle = styled.li`
  display: flex;
  border-top: ${({ theme, isSeparated }) =>
    isSeparated
      ? theme.borders.highlightedDivider
      : theme.borders.coloredDivider};
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.three} 0;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? "green" : theme.colors.text.secondary};

  :last-child {
    border-bottom: ${({ withLastItemBottomBorder, theme }) =>
      withLastItemBottomBorder ? theme.borders.coloredDivider : "none"};
  }

  > span {
    color: ${({ isSeparated, theme }) =>
      isSeparated ? theme.colors.text.primary : "inherit"};
  }
`;
