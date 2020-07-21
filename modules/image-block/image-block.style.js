import styled, { css } from "styled-components";

import { CloudinaryPicture } from "../../components/picture";

const HoverTransitionStyles = css`
  transition-duration: ${({ theme }) => theme.transitions.speed.default};
  transition-property: all;
  transition-timing-function: ${({ theme }) => theme.transitions.easing.spring};
`;

export const HoverPicture = styled(CloudinaryPicture)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
  ${HoverTransitionStyles};
  img {
    width: 100%;
    display: block;
  }
`;

const WithHoverStyles = css`
  &:hover,
  &:focus {
    ${HoverPicture} {
      opacity: 1;
    }
  }
`;

export const ImageBlockWrapper = styled.div`
  position: relative;
  width: 100%;
  ${({ hasHoverImage }) => hasHoverImage && WithHoverStyles};
`;

export const FullWidthPicture = styled(CloudinaryPicture)`
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
`;
