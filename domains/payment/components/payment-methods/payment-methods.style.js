import styled from "styled-components";

export const PaymentMethod = styled.div`
  border: ${({ theme }) => theme.borders.highlightedDivider};
  padding: ${({ theme }) => theme.spacing.three};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PaymentMethodDetail = styled.div`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  color: ${({ theme }) => theme.colors.text.primary};
`;
