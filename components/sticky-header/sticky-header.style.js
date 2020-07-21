import styled from "styled-components";

export const SCROLL_YPOS_TRIGGER = 15;

export const StickyHeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  z-index: ${({ theme }) => theme.zIndexes.navigation};
  transform: ${({ stickyHeight, scrollAwayHeight }) =>
    `translate3d(0, -${stickyHeight + scrollAwayHeight}px, 0)`};
`;

export const ScrollAwaySection = styled.div`
  transition: all ${({ theme }) => theme.transitions.speed.fast};
  transform: ${({ isVisible, scrollAwayHeight, stickyHeight }) =>
    isVisible
      ? `translate3d(0, ${stickyHeight + scrollAwayHeight}px, 0)`
      : `translate3d(0, ${stickyHeight}px, 0)`};
`;

export const StickySection = styled.div`
  transition: all ${({ theme }) => theme.transitions.speed.fast}
    ${({ theme }) => theme.transitions.easing.exit};
  transform: ${({ isAtTop, scrollAwayHeight, stickyHeight }) =>
    isAtTop
      ? `translate3d(0, ${stickyHeight}px, 0)`
      : `translate3d(0, ${stickyHeight + scrollAwayHeight}px, 0)`};
`;
