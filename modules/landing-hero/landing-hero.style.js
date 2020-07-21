import styled from "styled-components";
import { rem } from "polished";

import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";
import { Headline0 } from "../../components/fonts/h0";
import { Headline4 } from "../../components/fonts/h4";
import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";

export const LandingHeroWrapper = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => createCloudinaryMobileUrl(image)});
  background-position: center top;
  min-height: 140vh;

  ${createMinWidthMediaQuery("medium")} {
    min-height: ${rem(640)};
    background-image: url(${({ image }) => createCloudinaryDesktopUrl(image)});
    justify-content: flex-end;
  }
  img {
    visibility: hidden;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: ${({ theme }) => theme.spacing.five};
  align-items: center;
  text-align: center;
  padding: ${({
    theme: {
      grid: { column },
      spacing
    }
  }) => `5rem ${column} ${spacing.five} ${column}`};
  ${createMinWidthMediaQuery("medium")} {
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 10rem;
    padding-left: 0;
    width: 50%;
  }
`;

export const HeroTitle = styled(Headline0)`
  ${createMaxWidthMediaQuery("small")} {
    font-size: ${({ theme }) => theme.fontSizes.displaySmall};
  }
`;

export const HeroCTATitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.three};
`;

export const HeroDescription = styled(Headline4)`
  padding-bottom: ${({ theme }) => theme.spacing.three};
`;

export const TextWrapper = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    max-width: ${rem(600)};
  }
`;

export const HeroButtonLinkWrapper = styled.div``;

export const HeroButtonLinks = styled.div`
  display: grid;

  grid-gap: ${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("medium")} {
    grid-template-columns: auto auto;
  }
`;
