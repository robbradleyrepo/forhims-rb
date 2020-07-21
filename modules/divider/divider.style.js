import styled from "styled-components";

export const ModuleDivider = styled.hr`
  background-color: ${({ theme }) => theme.colors.ui.separator};
  border: 0;
  height: ${({ theme }) => theme.sizing.divider.height};
  margin: 0;
  width: 100%;
`;
