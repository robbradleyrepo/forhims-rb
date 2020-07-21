import styled from "styled-components";
import { ButtonReset } from "../elements";

export const ActionListItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.small};
  cursor: pointer;
  text-align: center;
`;

export const ActionListItemButton = styled(ButtonReset)`
  padding: ${({ theme }) => theme.spacing.three};
  width: 100%;
  height: 100%;
  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  }
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.button.disabled : theme.colors.text.primary};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: background;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  cursor: ${({ disabled }) => (disabled ? "default" : "cursor")};
`;
