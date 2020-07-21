import styled from "styled-components";

export const Instructions = styled.div`
  text-align: center;
`;

export const InstructionsHeaderLarge = styled.div`
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-size: ${({ theme }) => theme.fontSizes.headingLarge};
`;

export const InstructionsHeaderMedium = styled(InstructionsHeaderLarge)`
  font-size: ${({ theme }) => theme.fontSizes.headingMedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Emphasis = styled.span`
  font-style: italic;
`;
