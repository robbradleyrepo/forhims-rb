import styled, { css } from "styled-components";
import { ListReset } from "../../../elements";
import { combineRems } from "../../../../utils/rem";
import { Grid } from "../../../layout/grid";
import { isLeft, isRight } from "../../../drawer/drawer.utils";

export const GlobalNavigationContainer = styled.div`
  backface-visibility: hidden;
  background-color: ${({ hasScrolled, drawerIsOpen, theme }) =>
    !hasScrolled || drawerIsOpen
      ? theme.modules.navigation.global.backgroundColor
      : theme.modules.navigation.global.stickyBackgroundColor};
  height: ${({ theme }) => theme.sizing.header};
  position: relative;
  transition: background-color ${({ theme }) => theme.transitions.speed.fast}
    ${({ theme }) => theme.transitions.easing.exit};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndexes.navigation};
  will-change: transform;
`;

export const GlobalNavigationWrapper = styled(Grid)`
  position: relative;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const GlobalNavigationList = styled(ListReset)`
  margin-left: ${({ isRightAligned }) => (isRightAligned ? "auto" : "0")};
`;

const GlobalNavDrawerCloseLeftStyles = css`
  left: ${({ theme, isFullWidth }) =>
    `calc(${isFullWidth ? 100 : 50}% - ${theme.sizing.badge} - ${combineRems(
      theme.spacing.two,
      theme.spacing.three
    )})`};
`;

const GlobalNavDrawerCloseRightStyles = css`
  right: ${({ theme, isFullWidth }) =>
    `calc(${isFullWidth ? 100 : 50}% - ${theme.sizing.badge} - ${combineRems(
      theme.spacing.two,
      theme.spacing.three
    )})`};
`;

export const GlobalNavDrawerCloseWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.three};
  ${({ position }) =>
    isLeft(position)
      ? GlobalNavDrawerCloseLeftStyles
      : GlobalNavDrawerCloseRightStyles};
`;

const drawerPositionToLogoTranslate = drawerPosition =>
  isLeft(drawerPosition)
    ? `translate3d(50%, 0, 0)`
    : isRight(drawerPosition)
      ? `translate3d(-150%, 0, 0)`
      : `translate3d(-50%, 0, 0)`;

export const HeaderLogoWrapper = styled.div`
  position: absolute;
  margin-top: -${({ theme }) => theme.spacing.one};
  left: 50%;
  transform: ${({ openDrawerPosition }) =>
    drawerPositionToLogoTranslate(openDrawerPosition)};
  transition-duration: ${({ theme }) => theme.transitions.speed.xslow};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
`;
