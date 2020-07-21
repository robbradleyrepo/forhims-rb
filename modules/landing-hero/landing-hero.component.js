import React from "react";
import PropTypes from "prop-types";

import {
  ContentWrapper,
  HeroTitle,
  HeroDescription,
  TextWrapper,
  LandingHeroWrapper,
  HeroButtonLinks,
  HeroCTATitle,
  HeroButtonLinkWrapper
} from "./landing-hero.style";

import { CloudinaryPicture } from "../../components/picture";
import { Markdown } from "../../components/markdown";
import { Block } from "../../components/block";
import { ButtonLink } from "../../components/button";

const ParagraphRenderer = props => <HeroDescription {...props} />;

export const LandingHero = ({
  id,
  title,
  description,
  image,
  buttons = [],
  ctaTitle,
  imageDimensions,
  imageAltText
}) => {
  return (
    <LandingHeroWrapper id={id} image={image}>
      <CloudinaryPicture
        image={image}
        title={imageAltText}
        dimensions={imageDimensions}
      />
      <ContentWrapper>
        <TextWrapper>
          <HeroTitle>{title}</HeroTitle>
          <Block pb={3} pt={3}>
            <Markdown
              content={description}
              renderers={{ paragraph: ParagraphRenderer }}
            />
          </Block>
        </TextWrapper>
        <HeroCTATitle>{ctaTitle}</HeroCTATitle>
        <HeroButtonLinks>
          {buttons.map(({ label, url }) => (
            <HeroButtonLinkWrapper key={`home-link-${label}-${url}`}>
              <ButtonLink label={label} to={url} />
            </HeroButtonLinkWrapper>
          ))}
        </HeroButtonLinks>
      </ContentWrapper>
    </LandingHeroWrapper>
  );
};

LandingHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  ctaTitle: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
  ),
  imageAltText: PropTypes.string,
  imageDimensions: PropTypes.arrayOf(
    PropTypes.shape({ width: PropTypes.number, height: PropTypes.number })
  )
};
