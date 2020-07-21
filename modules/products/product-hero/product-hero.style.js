import styled, { css } from "styled-components";
import { rem } from "polished";

import { Carousel } from "../../../components/carousel";
import { ButtonReset } from "../../../components/elements";
import { Grid } from "../../../components/layout/grid";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { CloudinaryPicture } from "../../../components/picture";
import { themeGet } from "styled-system";

export const ProductHeroWithScrollWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.brand};
`;

export const ProductHeroRootLayer = styled.div`
  width: 100%;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexes.base};
`;

export const ProductHeroDesktopImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 100%;

  img {
    max-height: 100vh;
    object-fit: scale-down;
  }
`;

export const ProductHeroMobileCarousel = styled(Carousel)`
  width: 100%;
  margin: 0 auto ${({ theme }) => theme.spacing.four};
  padding-top: ${({ theme }) => theme.sizing.header};
  img {
    object-fit: scale-down;
  }
`;

const overlayFixed = css`
  position: fixed;
  top: 0;
  left: 0;
`;

const overlayAbsolute = css`
  position: absolute;
  left: 0;
`;

const handleOverlayPositioning = ({ isFixed, top, bottom }) => {
  if (isFixed) {
    return overlayFixed;
  } else {
    return css`
      ${overlayAbsolute};

      ${top && `top:0`};
      ${bottom && `bottom:0`};
    `;
  }
};

export const ProductHeroOverlay = styled.div`
  width: 100%;
  height: ${({ positioningAttributes: { height } }) => height};
  z-index: ${({ theme }) => theme.zIndexes.foreground};

  ${({ positioningAttributes }) =>
    handleOverlayPositioning(positioningAttributes)};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductHeroOverlayContent = styled(Grid).attrs({
  container: true
})`
  max-height: 80%;
`;

export const ProductHeroThumbnails = styled(Grid).attrs({
  item: true,
  mdOffset: 1,
  md: 1
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductHeroThumbnail = styled(ButtonReset)`
  border: solid ${({ theme }) => theme.spacing.one};
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
  }

  transition: border-color ${({ theme }) => theme.transitions.speed.default};
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  flex-grow: 0;
  flex-shrink: 0;

  width: ${({ theme }) => theme.sizing.badge};
  height: ${({ theme }) => theme.sizing.badge};

  margin: ${({ theme }) => theme.spacing.one};

  :focus {
    outline: 0;
  }

  span,
  picture,
  img {
    width: 100%;
    height: 100%;
  }

  overflow: hidden;
  img {
    object-fit: cover;
  }
`;

export const ProductHeroWrapper = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    themeGet(`colors.brand.${backgroundColor}`, theme.colors.canvas.brand)};
  position: relative;
`;

export const ProductHeroGridContainer = styled(Grid)`
  ${createMinWidthMediaQuery("medium")} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProductHeroContentGridItem = styled(Grid).attrs({
  item: true,
  mdOffset: 12,
  md: 9
})``;

// Sizes adapted from hims US
export const ProductHeroContentCardWrapper = styled.div`
  margin: 0 auto;

  ${createMinWidthMediaQuery("medium")} {
    max-width: ${rem(500)};
  }
  ${createMinWidthMediaQuery("large")} {
    max-width: ${rem(620)};
  }
`;

export const FullWidthCloudinaryPicture = styled(CloudinaryPicture)`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const ProductHeroContentItem = styled(Grid)`
  ${createMinWidthMediaQuery("medium")} {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndexes.foreground};
  }
`;
