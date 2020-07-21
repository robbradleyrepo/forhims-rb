import styled from "styled-components";
import { ListResetStyles } from "../elements";
import { combineRems } from "../../utils/rem";
const LIGHT_GREY = "#eee";
const MEDIUM_GREY = "#ccc";

export const RadioItem = styled.div`
  display: block;
  border: 2px solid ${LIGHT_GREY};
  border-radius: 50%;
  height: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.three)};
  width: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.three)};
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  &:before {
    display: block;
    position: relative;
    content: "";
    border-radius: 50%;
    height: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.two)};
    width: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.two)};
    top: 2px;
    left: 2px;
    transition-duration: ${({ theme }) => theme.transitions.speed.fast};
    transition-property: all;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }
`;

export const StyledRadio = styled.div`
  display: block;
  border: 2px solid ${LIGHT_GREY};
  border-radius: 50%;
  height: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.three)};
  width: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.three)};
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  &:before {
    display: block;
    position: relative;
    content: "";
    border-radius: 50%;
    height: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.two)};
    width: ${({ theme }) => combineRems(theme.spacing.one, theme.spacing.two)};
    top: 2px;
    left: 2px;
    transition-duration: ${({ theme }) => theme.transitions.speed.fast};
    transition-property: all;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }
`;

export const RadioItemRadioInput = styled.input`
  visibility: hidden;
`;

export const RadioItemLabel = styled.label`
  cursor: pointer;
  position: relative;
  border: 2px solid ${LIGHT_GREY};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.three};
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
  &:hover button {
    visibility: visible;
  }
`;

export const RadioItemWrapper = styled.li`
  ${ListResetStyles};
  position: relative;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall}px;
  & input:checked + label {
    border-color: ${({ theme }) => theme.colors.brand.sex};
    color: ${({ theme }) => theme.colors.black};
  }
  & input + label:hover {
    background-color: ${LIGHT_GREY};
    border-color: ${MEDIUM_GREY};
    color: ${({ theme }) => theme.colors.black};
  }
  & input:checked + label:hover {
    background-color: ${LIGHT_GREY};
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  & input:checked + label ${StyledRadio} {
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  & input + label:hover ${StyledRadio} {
    border-color: ${MEDIUM_GREY};
  }
  & input:checked + label:hover ${StyledRadio} {
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  input:checked + label ${StyledRadio}:before {
    background: ${({ theme }) => theme.colors.brand.sex};
  }
`;
