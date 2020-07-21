import styled from "styled-components";
import { Grid } from "../layout/grid";

export const VisitBackground = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  height: 100%;
`;

export const VisitGridContainer = styled(Grid).attrs({ container: true })`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;
