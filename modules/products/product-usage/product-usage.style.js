import styled from "styled-components";

import { Grid } from "../../../components/layout";
import { combineRems } from "../../../utils/rem";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { Headline2, P } from "../../../components/fonts";
import { ImageSlider } from "../../../components/slider";

const aspectRatioToHeight = ratio => `${ratio * 100}vw`;

// TODO: replace padding with standardized module spacing
export const ProductUsageGridContainer = styled(Grid)`
  align-content: flex-start;
  background-color: ${props => props.theme.colors.canvas.brand};
  overflow: hidden;
  padding-top: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.five)};
  padding-bottom: ${({ theme }) =>
    combineRems(theme.spacing.two, theme.spacing.five)};

  ${createMinWidthMediaQuery("small")} {
    padding-top: 7.5rem;
    padding-bottom: 6.5rem;
  }

  ${Headline2}, ${P} {
    color: ${({ theme }) => theme.colors.text.onPrimary};
  }
`;

export const ProductUsageHeaderWrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.two)};
`;

export const ProductUsageDescriptionWrapper = styled.div`
  padding-bottom: 3.5rem;
`;

export const ProductUsageSlider = styled(ImageSlider)`
  height: ${({ theme }) =>
    aspectRatioToHeight(theme.sizing.productUsage.xsRatio)};

  ${createMinWidthMediaQuery("small")} {
    height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.productUsage.smRatio)};
  }
  ${createMinWidthMediaQuery("medium")} {
    height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.productUsage.mdRatio)};
    max-height: ${({ theme }) => theme.sizing.productUsage.maxHeight};
  }
`;
