import styled from "styled-components";
import { CloudinaryPicture } from "../../../components/picture";
import { Block } from "../../../components/block";
import { Headline2 } from "../../../components/fonts/h2";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

export const PictureBadge = styled(CloudinaryPicture)`
  img {
    border-radius: 50%;
    height: 6rem;
    border: ${({ theme: { colors, spacing }}) => `${spacing.one} solid ${colors.white}`};
  }
`;

export const ProductSummaryTitle = styled(Headline2)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const FillPicture = styled(CloudinaryPicture)`
  height: 100%;
  overflow: hidden;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    object-position: center center;
    width: 100%;
  }
`;

export const ContentBlock = styled(Block)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.five};
  ${createMinWidthMediaQuery("large")} {
    padding: ${({ theme }) => theme.spacing.six};
  }
`;
