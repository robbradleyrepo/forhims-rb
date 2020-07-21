import styled from "styled-components";

import { Grid } from "../../../layout/grid";

export const DrawerNavigationGridContainer = styled(Grid)`
  position: absolute;
  background-color: transparent;
  height: ${({ theme }) => theme.sizing.header};
  align-items: center;
  z-index: ${({ theme }) => theme.zIndexes.navigation};
`;
