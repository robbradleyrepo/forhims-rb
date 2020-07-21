import styled from "styled-components";

import { SelectResetStyles } from "../elements";

export const SelectTriangle = styled.div`
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${({ theme }) => theme.colors.text.secondary};
  position: absolute;
  right: ${({ theme }) => theme.spacing.three};
  top: 0.9rem;
`;

export const SelectFieldWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  select:focus ~ ${SelectTriangle} {
    border-top-color: black;
  }
`;

export const SelectFieldStyle = styled.select`
  ${SelectResetStyles}
  font-size: ${({ theme }) => theme.fontSizes.bodyLarge};
  padding: ${({ theme }) => theme.spacing.two} 0;
  display: block;
  width: 100%;
  /* left padding applied to options in mozilla */
  @-moz-document url-prefix() {
    text-indent:-1.5px;
  }
}

  border: none;
  border-bottom: ${({ theme }) => theme.borders.greyDivider};
  ${({ theme, hasError }) =>
    hasError && `border-color: ${theme.colors.form.error};`};

  font-family: inherit;

  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 0;
  background-color: transparent;
  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    border: none;
    border-bottom: ${({ theme }) => theme.borders.greyDottedDivider};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  & option:not(:checked) {
    color: black;
  }
`;
