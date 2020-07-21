import styled from "styled-components";

import { combineRems } from "../../../utils/rem";
import { StyledRadio } from "../radio-field-list-item.style";

const MEDIUM_GREY = "#ccc";
const LIGHT_GREY = "#eee";

export const FieldWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) =>
    combineRems(theme.spacing.one, theme.spacing.three)};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  & input + label:hover ${StyledRadio}, & input:focus + label ${StyledRadio} {
    border-color: ${({ disabled }) => (disabled ? LIGHT_GREY : MEDIUM_GREY)};
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
  & input:checked + label ${StyledRadio} {
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  & input:checked + label:hover ${StyledRadio} {
    border-color: ${({ theme }) => theme.colors.brand.sex};
  }
  input:checked + label ${StyledRadio}:before {
    background: ${({ theme }) => theme.colors.brand.sex};
  }
  &:last-child {
    padding-bottom: 0;
  }
`;

export const PlainLabel = styled.label`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const TextWrapper = styled.div`
  margin-left: ${({ theme }) => theme.spacing.four};
`;
