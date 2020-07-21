import styled from "styled-components";

// Note: Caption styles can be reused as a label or figcaption element
// For better semantic markup of the content being captioned
export const Caption = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: ${20 / 12};
  margin: 0;
`;
