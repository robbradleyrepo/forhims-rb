import styled from "styled-components";

export const LegalTextLine = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.text.legal};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  line-height: 1.6;
`;
