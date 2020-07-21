import { css } from "styled-components";

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ACCENT: "accent",
  FLAT: "flat"
};

export const buttons = {
  [BUTTON_VARIANTS.PRIMARY]: {
    default: css`
      background-color: ${({ theme }) => theme.colors.button.primary};
      color: ${({ theme }) => theme.colors.button.primaryText};
      border: ${({ theme }) => theme.spacing.half} solid
        ${({ theme }) => theme.colors.button.primary};
    `,
    hover: css`
      background-color: ${({ theme }) => theme.colors.button.primaryHover};
      color: ${({ theme }) => theme.colors.button.primaryHoverText};
    `,
    disabled: css`
      background-color: ${({ theme }) => theme.colors.button.disabled};
      border-color: ${({ theme }) => theme.colors.button.disabled};
      color: ${({ theme }) => theme.colors.button.disabledText};
    `
  },
  [BUTTON_VARIANTS.SECONDARY]: {
    default: css`
      background-color: ${({ theme }) => theme.colors.button.secondary};
      color: ${({ theme }) => theme.colors.button.secondaryText};
      border: ${({ theme }) => theme.spacing.half} solid
        ${({ theme }) => theme.colors.button.secondary};
    `,
    hover: css`
      background-color: ${({ theme }) => theme.colors.button.secondaryHover};
      color: ${({ theme }) => theme.colors.button.secondaryHoverText};
    `,
    disabled: css`
      background-color: ${({ theme }) => theme.colors.button.disabled};
      border-color: ${({ theme }) => theme.colors.button.disabled};
      color: ${({ theme }) => theme.colors.button.disabledText};
    `
  },
  [BUTTON_VARIANTS.ACCENT]: {
    default: css`
      background-color: ${({ theme }) => theme.colors.button.accent};
      color: ${({ theme }) => theme.colors.button.accentText};
      border: none;
    `,
    hover: css`
      background-color: ${({ theme }) => theme.colors.button.accentHover};
      color: ${({ theme }) => theme.colors.button.accentHoverText};
      box-shadow: ${({ theme }) => theme.boxShadows.small};
    `,
    disabled: css`
      background-color: ${({ theme }) => theme.colors.button.disabled};
      border-color: ${({ theme }) => theme.colors.button.disabled};
      color: ${({ theme }) => theme.colors.button.disabledText};
    `
  },
  [BUTTON_VARIANTS.FLAT]: {
    default: css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text.primary};
      border: none;
      min-width: auto;
    `,
    hover: css`
      color: ${({ theme }) => theme.colors.text.active};
    `,
    disabled: css`
      color: ${({ theme }) => theme.colors.button.onDisabled};
    `
  }
};
