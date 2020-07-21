import { css } from "styled-components";
import { rem } from "polished";

export const boxShadows = {
  small: css`0 ${rem(2)} ${rem(16)} ${({ theme }) => theme.colors.ui.shadow}`,
  medium: css`0 ${rem(12)} ${rem(24)} ${({ theme }) => theme.colors.ui.shadow}`,
  large: css`0 ${rem(16)} ${rem(40)} ${({ theme }) => theme.colors.ui.shadow}`
};
