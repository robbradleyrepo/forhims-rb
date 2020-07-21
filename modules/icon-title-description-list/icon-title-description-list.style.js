import styled from "styled-components";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";

// TODO: Replace with reusable module wrapper component
export const ModuleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: 5rem 0;
`;

export const ListItemStyle = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.divider};
  margin-bottom: ${({ theme }) => theme.spacing.four};
  padding-bottom: ${({ theme }) => theme.spacing.four};
  width: 100%;

  ${createMinWidthMediaQuery("medium")} {
    border-bottom: none;
    border-left: ${({ showBorder, theme }) =>
      showBorder && `1px solid ${theme.colors.ui.divider}`};
    margin-bottom: 0;
    padding: 0 ${({ theme }) => theme.spacing.four};
  }
`;
