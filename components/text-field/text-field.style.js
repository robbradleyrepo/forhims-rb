import styled, { css } from "styled-components";

import { combineRems } from "../../utils/rem";

export const TextFieldWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;

export const BarStyle = styled.div`
  position: relative;
  width: 100%;

  &:before,
  &:after {
    content: "";
    height: ${({ theme }) => theme.spacing.half};
    width: 0;
    bottom: 0;
    position: absolute;
    background: ${({ theme }) => theme.colors.text.primary};
    transition: ${({ theme }) => theme.transitions.speed.medium}
      ${({ theme }) => theme.transitions.easing.spring} all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  /**
   * Active state
   */
  input:focus + &:before,
  input:focus + &:after,
  select:focus + &:before,
  select:focus + &:after {
    width: 50%;
  }
`;

export const raisedLabel = css`
  transform: translateY(
      -${({ theme }) => combineRems(theme.spacing.two, theme.spacing.three)}
    )
    scale(0.75);
`;

export const LabelStyle = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  position: absolute;
  top: ${({ theme }) => theme.spacing.two};
  line-height: 1;
  width: 100%;
  pointer-events: none;
  transform-origin: 0% 0%;
  transition: all ${({ theme }) => theme.transitions.speed.fast}
    ${({ theme }) => theme.transitions.easing.exit};

  ${props => props.raised && raisedLabel};
`;

export const TextFieldStyle = styled.input`
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  padding: ${({ theme }) => theme.spacing.two} 0;
  display: block;
  width: 100%;
  border: none;
  border-bottom: ${({ theme }) => theme.borders.greyDivider};
  border-radius: 0;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1;

  &:focus {
    outline: none;
  }

  &:disabled {
    border: none;
    border-bottom: ${({ theme }) => theme.borders.greyDottedDivider};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  ${({ theme, hasError }) =>
    hasError && `border-color: ${theme.colors.form.error};`};
`;
