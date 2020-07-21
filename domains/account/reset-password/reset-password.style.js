import styled from "styled-components";

import { ButtonReset } from "../../../components/elements";
import { TextField } from "../../../components/text-field";

export const ResetPasswordWrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacing.six} ${theme.spacing.four}`};
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

export const ResetPasswordWrapperInner = styled.div`
  max-width: ${({ theme }) => theme.sizing.productKnowledge.maxWidth};
  margin: 0 auto;
`;

export const ResetPasswordTitle = styled.h1``;
export const ResetPasswordDescription = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ResetPasswordFieldInitial = styled(TextField)``;

export const ResetPasswordFieldConfirm = styled(TextField)``;

export const FieldsWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.three};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;

export const ResetPasswordSubmitButton = styled(ButtonReset)`
  border-bottom: ${({ theme }) => theme.spacing.half} solid transparent;
  color: ${({ drawerTheme, theme }) =>
    theme.modules.drawers[drawerTheme].linkColor};
  margin-bottom: ${({ theme }) => theme.spacing.four};
  &:hover,
  &:active {
    border-color: ${({ drawerTheme, theme }) =>
      theme.modules.drawers[drawerTheme].linkHoverColor};rs
  }
`;
