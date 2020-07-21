import styled from "styled-components";
import { BodyTextLinkStyles } from "../fonts/link";
// Material UI styles based off hims
export const CheckboxFieldStyle = styled.input`
  appearance: none;
  position: absolute;
  z-index: 0;
  left: -15px;
  top: -15px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  outline: none;
  opacity: 0;
  transform: scale(1);
  -ms-transform: scale(0); /* Graceful degradation for IE */
  transition: opacity 0.5s, transform 0.5s;

  &:checked {
    background-color: ${({ theme }) => theme.colors.brand.sex};
  }
  &:disabled {
    opacity: 0;
  }
`;

export const CheckmarkSpan = styled.span`
  z-index: 1;
  position: relative;
  &:before {
    z-index: 1;
    content: "";
    display: inline-block;
    margin-right: 15px;
    border: solid 2px ${({ theme }) => theme.colors.text.secondary};
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: -4px;
    transition: border-color 0.5s, background-color 0.5s;
  }
  &:after {
    z-index: 1;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 12px;
    border: solid 2px transparent;
    border-left: none;
    border-top: none;
    transform: translate(5.5px, 1px) rotate(45deg);
    -ms-transform: translate(5.5px, 2px) rotate(45deg);
  }
`;

export const CheckboxStyleWrapper = styled.label`
  position: relative;
  display: inline-block;
  z-index: 1;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  font-family: sans-serif;
  margin-top: -3px;

  &:active input {
    opacity: 1;
    transform: scale(0);
    transition: opacity 0s, transform 0s;
  }
  & input:disabled + span {
    color: rgba(0, 0, 0, 0.38);
    cursor: initial;
  }

  & input:checked + span:before {
    border-color: ${({ theme }) => theme.colors.brand.sex};
    background-color: ${({ theme }) => theme.colors.brand.sex};
  }
  & input:active + span:before {
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  & input:checked:active + span:before {
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.black};
  }
  & input:disabled + span:before {
    border-color: rgba(0, 0, 0, 0.26);
  }
  & input:checked:disabled + span:before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.26);
  }
  & input:checked + span:after {
    border-color: #fff;
  }
`;

export const CheckboxFieldWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
`;

export const CheckboxFieldLabel = styled.label`
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  a {
    ${BodyTextLinkStyles};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.forms.errorHighlight};
  margin-top: ${({ theme }) => theme.spacing.two};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 1;
  min-height: 1em;
`;
