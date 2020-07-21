import styled from "styled-components";

const Step = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 50%;
  line-height: 1.4;
  padding: ${({ theme }) => theme.spacing.one};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  width: 2rem;
  height: 2rem;
`;

export const CompletedStep = styled(Step)`
  background-color: ${({ theme }) => theme.colors.ui.callout};
  color: ${({ theme }) => theme.colors.ui.highlight};
`;

export const ActiveStep = styled(Step)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  color: ${({ theme }) => theme.colors.button.primary};
`;

export const NextStep = styled(Step)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
