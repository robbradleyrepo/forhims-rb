import React from "react";
import PropTypes from "prop-types";

import {
  HeroGridContainer,
  FillPicture,
  LeftPhotoGridItem,
  RightPhotoGridItem,
  DescriptionWrapper,
  DescriptionGridItem,
  TitleWrapper,
  DescriptionText,
  DescriptionLink,
  ContentWrapper,
  ButtonsWrapper
} from "./homepage-hero.style";
import { ButtonLink } from "../../../components/button";
import { Markdown } from "../../../components/markdown";
import { BUTTON_VARIANTS } from "../../../theme/buttons";

const LinkRenderer = ({ href, children }) => (
  <DescriptionLink to={href}>{children}</DescriptionLink>
);
LinkRenderer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};
const HeadingRenderer = props => <DescriptionText {...props} />;

export class HomepageHero extends React.Component {
  state = {
    isLeftImageLoaded: false,
    isRightImageLoaded: false
  };
  handleLeftImageLoaded = () => {
    this.setState({ isLeftImageLoaded: true });
  };
  handleRightImageLoaded = () => {
    this.setState({ isRightImageLoaded: true });
  };
  render() {
    const { isLeftImageLoaded, isRightImageLoaded } = this.state;
    const isLoaded = isLeftImageLoaded && isRightImageLoaded;
    const { imageLeft, imageRight, title, description, buttons } = this.props;
    return (
      <HeroGridContainer container>
        <LeftPhotoGridItem item xs={8} sm={9} md={13} lg={13} fullWidth>
          <FillPicture
            image={imageLeft}
            title=""
            handleLoad={this.handleLeftImageLoaded}
            handleError={this.handleLeftImageLoaded}
            loadImmediately
          />
        </LeftPhotoGridItem>
        <RightPhotoGridItem
          item
          xs={8}
          xsOffset={5}
          sm={9}
          smOffset={7}
          md={15}
          mdOffset={9}
          lg={15}
          lgOffset={9}
          isLoaded={isLoaded}
          fullWidth
        >
          <FillPicture
            image={imageRight}
            title=""
            handleLoad={this.handleRightImageLoaded}
            handleError={this.handleRightImageLoaded}
            delay={500}
            loadImmediately
          />
        </RightPhotoGridItem>
        <DescriptionGridItem
          item
          xs={13}
          sm={14}
          smOffset={1}
          md={11}
          mdOffset={1}
          lg={11}
          lgOffset={1}
          fullWidth
        >
          <ContentWrapper isLoaded={isLoaded}>
            <TitleWrapper>{title}</TitleWrapper>
            <DescriptionWrapper>
              <Markdown
                content={description}
                renderers={{
                  heading: HeadingRenderer,
                  link: LinkRenderer
                }}
              />
            </DescriptionWrapper>
            <ButtonsWrapper>
              {buttons.map(({ label, url }, i) => (
                <ButtonLink
                  key={`homepage-button-${url}-${label}-${i}`}
                  label={label}
                  to={url}
                  variant={BUTTON_VARIANTS.SECONDARY}
                />
              ))}
            </ButtonsWrapper>
          </ContentWrapper>
        </DescriptionGridItem>
      </HeroGridContainer>
    );
  }
}
HomepageHero.propTypes = {
  description: PropTypes.string,
  handleImageLoad: PropTypes.func,
  imageLeft: PropTypes.string,
  imageRight: PropTypes.string,
  isLoaded: PropTypes.bool,
  readMoreLabel: PropTypes.string,
  scrollTarget: PropTypes.string,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })
  )
};
