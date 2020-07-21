import styled from "styled-components";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { ButtonReset } from "../../../components/elements";
import { DrawerClosePoseComponent } from "../../../components/drawer/drawer.pose";
import RequiredActionItem from "./required-action-item";
import { Headline2 } from "../../../components/fonts/h2";
import { BaseRouterLink } from "../../../components/fonts";

export const ActionItemsWrapper = styled(DrawerClosePoseComponent)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.grid.gutter};
  ${createMinWidthMediaQuery("small")} {
    padding: ${({ theme }) => theme.grid.getColumns(2)};
  }
  overflow-y: scroll;
`;

export const ActionItemsHeaderWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  padding: ${({ theme }) => theme.spacing.four} 0;
  z-index: ${({ theme }) => theme.zIndexes.header};
`;

export const ActionItemsBackButton = styled(ButtonReset)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ theme }) => theme.spacing.three};
`;

export const EmrActionWrapper = styled(RequiredActionItem)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.brand.sex};
  cursor: pointer;
  margin: 0.5rem 0;
  padding: 1.25rem 2rem;
  text-align: left;

  :hover {
    background-color: ${({ theme }) => theme.colors.canvas.cancelled};
    border: 2px solid ${({ theme }) => theme.colors.black};
    text-align: left;
  }
`;

export const Header = styled(Headline2)`
  text-align: center;
`;

export const RouterLink = styled(BaseRouterLink)`
  text-transform: initial;
`;
