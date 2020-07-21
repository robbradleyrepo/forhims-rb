import styled, { css } from "styled-components";
import { Link } from "react-router";

import { ButtonLink, BaseLinkStyles, ExtendedLinkStyles } from "../../../fonts";

const NavigationActiveStyles = css`
  border-color: ${({ theme }) => theme.colors.text.primary};
`;

const NavigationAlertStyles = css`
  position: relative;
  color: ${({ theme }) => theme.colors.canvas.secondary};

  &::before,
  &::after {
    height: 16px;
    width: 16px;
    vertical-align: middle;
  }

  &::before {
    content: "!";
    margin-right: ${({ theme }) => theme.spacing.two};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translate3d(0.5px, 0.5px, 0);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid currentColor;
    border-radius: 50%;
  }
`;

const notificationDotSize = 7;

const NavigationNotificationStyles = css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 50%;

    width: ${notificationDotSize}px;
    height: ${notificationDotSize}px;
    transform: translate3d(
      ${notificationDotSize + notificationDotSize * 0.25}px,
      ${-1 * (notificationDotSize + notificationDotSize * 0.25)}px,
      0
    );

    background-color: ${({ theme }) => theme.colors.form.error};
  }
`;

const NavigationItemStatesStyles = css`
  ${({ isActive }) => isActive && NavigationActiveStyles};
  ${({ isAlert }) => isAlert && NavigationAlertStyles};
  ${({ isNotification }) => isNotification && NavigationNotificationStyles};
`;

export const GlobalNavigationNotificationDot = styled.i`
  ${NavigationNotificationStyles};

  position: absolute;
  top: 0;
  right: 0;
  width: ${notificationDotSize}px;
  height: ${notificationDotSize}px;

  &::after {
    transform: translate3d(
      ${notificationDotSize * 0.25}px,
      ${-1 * notificationDotSize * 0.25}px,
      0
    );
  }
`;

export const GlobalNavigationListItem = styled.li`
  display: inline-block;
  position: relative;
  margin-right: ${({ theme }) => theme.spacing.five};

  &:last-child {
    margin-right: 0;
  }
`;

export const GlobalNavigationItemButton = styled(ButtonLink)`
  ${NavigationItemStatesStyles};
`;

export const GlobalNavigationItemLink = styled(Link)`
  ${BaseLinkStyles};
  ${ExtendedLinkStyles};
  ${NavigationItemStatesStyles};

  display: inline-block;
`;
