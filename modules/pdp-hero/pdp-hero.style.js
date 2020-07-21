import styled from "styled-components";

import { combineRems } from "../../utils/rem";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { Grid } from "../../components/layout";
import { CloudinaryPicture } from "../../components/picture";

export const HeroGridContainer = styled(Grid)`
  background-color: ${props => props.theme.colors.canvas.primaryLight};
  min-height: 90vh;
`;

const convertRatioToPercentage = ratio => `${ratio * 100}%`;

export const PhotoContainerGridItem = styled(Grid)`
  background-color: ${props => props.theme.colors.canvas.brand};
  height: 0;
  padding-bottom: ${({ theme }) =>
    convertRatioToPercentage(theme.sizing.pdpHero.xsRatio)};
  position: relative;

  ${createMinWidthMediaQuery("small")} {
    padding-bottom: ${({ theme }) =>
      convertRatioToPercentage(theme.sizing.pdpHero.smRatio)};
  }

  ${createMinWidthMediaQuery("medium")} {
    height: auto;
    padding-bottom: 0;
  }
`;

// TODO: Polyfill object-fit
export const FillPicture = styled(CloudinaryPicture)`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  img {
    height: 100%;
    object-fit: ${({ isCentered }) => (isCentered ? "contain" : "cover")};
    object-position: center center;
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  padding: ${({ theme: { spacing } }) =>
    `${combineRems(spacing.two, spacing.four)} 0 ${combineRems(
      spacing.three,
      spacing.four,
      spacing.four
    )}`};

  ${createMinWidthMediaQuery("medium")} {
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100%;
    padding: ${({ theme }) => theme.spacing.five} 0;
  }
`;

export const ProductTitleWrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.two, spacing.three)};

  ${createMinWidthMediaQuery("small")} {
    margin-bottom: ${({ theme: { spacing } }) =>
      combineRems(spacing.three, spacing.four)};
  }
  ${createMinWidthMediaQuery("medium")} {
    margin-bottom: ${({ theme }) => theme.spacing.four};
  }
`;

export const ProductDetailWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.ui.divider};
  margin-bottom: ${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("small")} {
    border-top: none;
  }
`;
