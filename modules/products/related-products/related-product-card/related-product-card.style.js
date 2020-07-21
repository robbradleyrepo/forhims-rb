import styled, { css } from "styled-components";
import { Link } from "react-router";

import { Headline4, P } from "../../../../components/fonts";

const ProductTransitionStyles = css`
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
`;

// TODO: Consolidate with Blog Post Preview styles
// TODO: Get final box shadow styles from design, add to theme
export const ProductImageWrapper = styled.div`
  ${ProductTransitionStyles};
  background-color: transparent;
  min-height: ${({ theme }) => theme.spacing.six};
  position: relative;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
  }

  &::after {
    content: "";
    ${ProductTransitionStyles};
    box-shadow: ${({ theme }) => theme.boxShadows.large};
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    width: 100%;
  }
`;

const ProductCardLinkActiveStyles = css`
  ${Headline4}, ${P} {
    ${ProductTransitionStyles};
  }

  button {
    transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  }

  &:hover,
  &:focus {
    ${ProductImageWrapper} {
      background-color: ${({ theme }) => theme.colors.canvas.brand};
    }

    ${ProductImageWrapper}::after {
      opacity: 1;
    }
    ${Headline4}, ${P} {
      color: ${({ theme }) => theme.colors.text.active};
    }
    button {
      ${({ theme }) => theme.buttons.secondary.hover};
    }
  }
`;

const ProductCardLinkDisabledStyles = css`
  pointer-events: none;
`;

export const ProductCardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ disabled }) =>
    disabled ? ProductCardLinkDisabledStyles : ProductCardLinkActiveStyles};
`;
