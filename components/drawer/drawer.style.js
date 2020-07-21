import styled, { css, createGlobalStyle } from "styled-components";

import { equals } from "ramda";

import { isLeft } from "./drawer.utils";
import { DrawerPoseComponent, DrawerClosePoseComponent } from "./drawer.pose";
import { combineRems } from "../../utils/rem";
import { Grid } from "../layout";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";

export { DRAWER_THEMES } from "../../theme/modules";

export const DrawerPoser = styled(DrawerPoseComponent)`
  background-color: ${({ drawerTheme, theme }) =>
    theme.modules.drawers[drawerTheme].backgroundColor};
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndexes.cart};

  ${createMinWidthMediaQuery("medium")} {
    z-index: ${({ displayAboveNavigation, theme }) =>
      displayAboveNavigation ? theme.zIndexes.cart : theme.zIndexes.menu};
  }
`;
DrawerPoser.displayName = "DrawerPoser";

export const DrawerContent = styled(Grid)`
  position: relative;
  height: 100%;

  max-width: ${({ isFullWidth }) => (isFullWidth ? "none" : "50%")};
  transform: ${({ isFullWidth, position }) =>
    isLeft(position) && !isFullWidth ? `translateX(50vw)` : ""};
  z-index: ${({ theme }) => theme.zIndexes.base};
`;
DrawerContent.displayName = "DrawerContent";

export const DrawerClosePoser = styled(DrawerClosePoseComponent)``;

const DrawerCloseLeftStyles = css`
  right: ${({ theme: { spacing } }) => combineRems(spacing.two, spacing.three)};
`;

const DrawerCloseRightStyles = css`
  left: ${({ theme: { spacing } }) => combineRems(spacing.two, spacing.three)};
`;

const DrawerLeftListStyles = css`
  padding-left: ${({ theme }) =>
    `calc(${theme.grid.column} + ${theme.grid.gutter})`};
`;

const DrawerRightListStyles = css`
  padding-right: ${({ theme }) =>
    `calc(${theme.grid.column} + ${theme.grid.gutter})`};
  text-align: right;
  align-items: flex-end;
`;

export const DrawerListContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ position }) =>
    equals(position, "right") ? DrawerRightListStyles : DrawerLeftListStyles};
`;

export const DrawerCloseWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.three};
  z-index: ${({ theme }) => theme.zIndexes.foreground};

  ${({ position }) =>
    isLeft(position) ? DrawerCloseLeftStyles : DrawerCloseRightStyles};
`;

export const DrawerContentWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-top: ${({ theme }) => theme.spacing.six};
  position: relative;
  width: 100%;
`;

export const DrawerFooter = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 1rem;

  ${createMinWidthMediaQuery("medium")} {
    padding: ${({ theme: { spacing } }) =>
      `${combineRems(spacing.four, spacing.three)} ${spacing.four}`};
  }

  div {
    margin-right: 0.75rem;
  }

  a {
    -webkit-appearance: none;
    box-shadow: none;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    height: 2.75rem;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2.75rem;
    background: transparent;
    margin: 0px;
    padding: 0px;
    border-width: 0.1rem;
    border-style: solid;
    border-image: initial;
    border-radius: 50%;
    border-color: rgb(238, 226, 215);

    &:hover {
      outline: none;
      border-style: solid;
      border-image: initial;
      border-radius: 50%;
      border-color: rgba(0, 0, 0, 0.88);
    }
  }
`;

// iOS Safari underscroll hack fix
// Prevents fixed drawer content from scrolling content underneath
// By hiding it temporarilty from the DOM when drawer is open full width
// Other methods such as limiting height / width / overflow cause obvious repaints
// TODO: Refactor this scorched earth approach after initial launch

const preventAllPossibleMobileUnderScrollStyles = css`
  ${createMaxWidthMediaQuery("medium")} {
    .content {
      display: none;
    }
  }
`;

export const DrawerGlobalStyle = createGlobalStyle`
  ${({ isExpanded, isFullWidth }) =>
    isExpanded && isFullWidth && preventAllPossibleMobileUnderScrollStyles}`;
