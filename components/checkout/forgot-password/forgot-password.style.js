import styled from "styled-components";

import { ButtonReset } from "../../elements";

export const SignInLink = styled(ButtonReset)`
  border-bottom: ${({ theme }) => theme.spacing.half} solid transparent;
  color: ${({ theme }) => theme.colors.text.callout};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.four};
  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.text.callout};
    opacity: ${({ theme }) => theme.colors.opacity.hover};
  }
`;

export const FieldsWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.three};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;
