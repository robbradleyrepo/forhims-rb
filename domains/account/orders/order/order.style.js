import styled from "styled-components";
import { Grid } from "../../../../components/layout/grid";

export const OrderWrapper = styled.div`
  background-color: ${({ cancelled, selected, theme }) =>
    selected || cancelled
      ? theme.colors.canvas.cancelled
      : theme.colors.canvas.white};
  color: ${({ theme, cancelled }) =>
    cancelled ? theme.colors.text.secondary : "inherit"};
  padding: ${({ theme }) => theme.spacing.four};
  position: relative;
  cursor: pointer;

  :not(:last-child) {
    border-bottom: ${({ theme }) => theme.borders.coloredDivider};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.canvas.cancelled};
  }
`;

export const OrderDetailsGridItem = styled(Grid)``;
