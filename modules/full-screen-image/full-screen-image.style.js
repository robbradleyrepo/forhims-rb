import styled from "styled-components";

import { CloudinaryPicture } from "../../components/picture";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

const aspectRatioToHeight = ratio => `${ratio * 100}vw`;

export const FullScreenImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.brand};
  position: relative;

  min-height: ${({ theme }) =>
    aspectRatioToHeight(theme.sizing.fullScreenImage.xsRatio)};

  ${createMinWidthMediaQuery("small")} {
    min-height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.fullScreenImage.smRatio)};
  }
  ${createMinWidthMediaQuery("medium")} {
    min-height: ${({ theme }) =>
      aspectRatioToHeight(theme.sizing.fullScreenImage.mdRatio)};
  }
`;

export const FillPicture = styled(CloudinaryPicture)`
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
`;
