import styled, { css } from "styled-components";

export const ButtonResetStyles = css`
  appearance: none;
  background: transparent;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;

  &[disabled] {
    pointer-events: none;
  }

  &:focus:active,
  &:focus:hover {
    outline: 0;
  }
`;
export const ButtonReset = styled.button`
  ${ButtonResetStyles};
`;

export const ListResetStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListReset = styled.ul`
  ${ListResetStyles};
`;

export const SelectResetStyles = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
  border: none;
`;
