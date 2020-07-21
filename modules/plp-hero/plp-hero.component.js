import React from "react";
import { PropTypes } from "prop-types";
import { browserHistory } from "react-router";

import { Button } from "../../components/button/button.component";
import { Markdown } from "../../components/markdown";
import { BUTTON_VARIANTS } from "../../theme/buttons";
import {
  createCloudinaryMobileUrl,
  createCloudinaryDesktopUrl
} from "../../utils/cloudinary";
import { scrollToElementById } from "../../utils/scroll";

import {
  ContentContainerGridItem,
  DescriptionWrapper,
  HeadingWrapper,
  Heading,
  PlpHeroGridContainer,
  PlpHeroBg,
  HERO_THEMES
} from "./plp-hero.style";

// TODO: Create intermediary step to transform Cloudinary Image ID to images array
export class PlpHero extends React.Component {
  state = {
    isLoaded: false
  };
  handleImageLoaded = () => {
    this.setState({
      isLoaded: true
    });
  };
  render() {
    const {
      bgTheme,
      buttonLabel,
      description,
      images,
      scrollToElement,
      title,
      url
    } = this.props;
    const { isLoaded } = this.state;
    const cloudinaryImages = [
      createCloudinaryMobileUrl(images),
      createCloudinaryMobileUrl(images),
      createCloudinaryDesktopUrl(images),
      createCloudinaryDesktopUrl(images)
    ];
    return (
      <PlpHeroGridContainer bgTheme={bgTheme} container>
        <PlpHeroBg
          handleLoad={this.handleImageLoaded}
          handleError={this.handleImageLoaded}
          images={cloudinaryImages}
          title=""
          loadImmediately
          showLoader
        />
        <ContentContainerGridItem
          item
          xs={13}
          sm={12}
          smOffset={2}
          md={8}
          mdOffset={2}
          lg={8}
          lgOffset={2}
          isLoaded={isLoaded}
        >
          <HeadingWrapper>
            <Heading>{title}</Heading>
          </HeadingWrapper>
          <DescriptionWrapper>
            <Markdown content={description} />
          </DescriptionWrapper>
          {buttonLabel && (
            <div>
              <Button
                variant={BUTTON_VARIANTS.SECONDARY}
                label={buttonLabel}
                onClick={() =>
                  scrollToElement
                    ? scrollToElementById(scrollToElement)
                    : browserHistory.push(url)
                }
              />
            </div>
          )}
        </ContentContainerGridItem>
      </PlpHeroGridContainer>
    );
  }
}

PlpHero.propTypes = {
  bgTheme: PropTypes.oneOf([HERO_THEMES.DARK, HERO_THEMES.LIGHT]),
  buttonLabel: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.any,
  scrollToElement: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};
