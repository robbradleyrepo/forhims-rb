import styled from "styled-components";

import { BodySmall } from "../fonts";
import { ButtonResetStyles } from "../elements";

export const InlineBodySmall = styled(BodySmall)`
  color: ${({ theme }) => theme.colors.button.onDisabled};
  display: inline;
`;

export const BodySmallButton = styled(BodySmall)`
  ${ButtonResetStyles};
  color: ${({ theme }) => theme.colors.text.callout};
  display: inline;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: ${({ theme: { transitions } }) =>
    `all ${transitions.speed.xfast} ${transitions.easing.enter}`};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.text.active};
  }
`;
