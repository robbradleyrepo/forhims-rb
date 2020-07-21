import styled from "styled-components";

import { Headline4 } from "../../components/fonts";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { combineRems } from "../../utils/rem";

export const AccountPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: ${({ theme: { spacing } }) =>
    `${combineRems(spacing.four, spacing.five)} 0 ${spacing.five}`};
  ${createMinWidthMediaQuery("medium")} {
    padding-left: ${({ theme }) => theme.grid.getColumns(2)};
    padding-right: ${({ theme }) => theme.grid.getColumns(2)};
  }
  min-height: 100vh;
  position: relative;
`;

export const AccountTitle = styled(Headline4)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const AccountEmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  h4 {
    font-family: ${({ theme }) => theme.fonts.brandSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.three};
  }
`;
