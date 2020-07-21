import React from "react";
import MediaQuery from "react-responsive";
import { rem } from "polished";
import { PropTypes } from "prop-types";
import { values } from "ramda";

import {
  DescriptionWrapper,
  FillPicture,
  HeroGridContainer,
  PhotoContainerGridItem,
  ProductDetailWrapper
} from "./pdp-hero.style";
import {
  ADDITIONAL_INFO_TYPES,
  LEGAL_TEXT_MAX_LENGTH
} from "./pdp-hero.constants";

import { AddToCartButton } from "../add-to-cart";
import { Grid } from "../../components/layout";
import { Block } from "../../components/block";
import { Markdown } from "../../components/markdown";
import { TwoTonedHeading } from "../../components/two-toned-heading";
import { Headline2, Caption } from "../../components/fonts";
import { breakpoints } from "../../theme/breakpoints";
import { ButtonLink } from "../../components/fonts/link";
import { ProductKnowledgeDetailList } from "../products/product-knowledge/product-knowledge-detail-list";
import { Excerpt } from "../../components/excerpt";

export const PdpHero = ({
  additionalInfoLabel,
  addToCartButtonLabel,
  description,
  delayedShippingDate,
  handleAdditionalInfoClick,
  handleViewSafetyInformation,
  images,
  isCenteredImage = false,
  isShippingDelayed,
  legalText,
  productDetails,
  productId,
  titlePartOne,
  titlePartTwo
}) => {
  const ProductTitle = () => (
    <Block mb={4}>
      <Headline2>
        <TwoTonedHeading>
          <span>{titlePartOne}</span>
          <span>{titlePartTwo}</span>
        </TwoTonedHeading>
      </Headline2>
    </Block>
  );
  const ProductDetails = () =>
    productDetails ? (
      <ProductDetailWrapper>
        <ProductKnowledgeDetailList productDetails={productDetails} />
      </ProductDetailWrapper>
    ) : null;
  const ProductDescription = () => (
    <React.Fragment>
      <Block mb={3}>
        <Markdown content={description} />
      </Block>

      {legalText && (
        <Block mb={4} pr={4}>
          <Excerpt
            content={legalText}
            limit={LEGAL_TEXT_MAX_LENGTH}
            handleReadMore={handleViewSafetyInformation}
          />
        </Block>
      )}

      {handleAdditionalInfoClick &&
        additionalInfoLabel && (
          <Block mb={4}>
            <ButtonLink onClick={handleAdditionalInfoClick}>
              {additionalInfoLabel}
            </ButtonLink>
          </Block>
        )}
      <MediaQuery minWidth={breakpoints.small}>
        <Block maxWidth={rem(360)}>
          <AddToCartButton label={addToCartButtonLabel} productId={productId} />
        </Block>
      </MediaQuery>
      {isShippingDelayed && (
        <Block pt={3} mt={2} maxWidth={rem(360)}>
          <Caption>
            Eeeks, due to high volume we are experiencing a shipping delay!
            Expected delivery for this product is after {delayedShippingDate}
          </Caption>
        </Block>
      )}
    </React.Fragment>
  );

  return (
    <HeroGridContainer container>
      <PhotoContainerGridItem item xs={13} sm={16} md={14} lg={16} fullWidth>
        <FillPicture
          image={images}
          title=""
          isCentered={isCenteredImage}
          loadImmediately
        />
      </PhotoContainerGridItem>
      <Grid item xs={13} sm={16} mdOffset={1} md={8} lgOffset={1} lg={6}>
        <DescriptionWrapper>
          <MediaQuery maxWidth={breakpoints.medium}>
            <React.Fragment>
              <Grid container>
                <Grid xs={13} sm={5} smOffset={2} md={10} lg={6} item>
                  <Block width="100%">
                    <ProductTitle />
                    <ProductDetails />
                  </Block>
                </Grid>
                <Grid xs={13} smOffset={1} sm={6} md={10} lg={6} item>
                  <Block width="100%">
                    <ProductDescription />
                  </Block>
                </Grid>
              </Grid>
            </React.Fragment>
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.medium + 1}>
            <React.Fragment>
              <ProductTitle />
              <ProductDetails />
              <ProductDescription />
            </React.Fragment>
          </MediaQuery>
        </DescriptionWrapper>
      </Grid>
    </HeroGridContainer>
  );
};
PdpHero.propTypes = {
  additionalInfoLabel: PropTypes.string,
  addToCartButtonLabel: PropTypes.string,
  additionalInfoType: PropTypes.oneOf(values(ADDITIONAL_INFO_TYPES)),
  description: PropTypes.string,
  delayedShippingDate: PropTypes.string,
  handleAdditionalInfoClick: PropTypes.func,
  handleViewSafetyInformation: PropTypes.func,
  images: PropTypes.any,
  isCenteredImage: PropTypes.bool,
  isShippingDelayed: PropTypes.bool,
  legalText: PropTypes.string,
  productDetails: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string
    })
  ),
  productId: PropTypes.string,
  shipsOn: PropTypes.string,
  titlePartOne: PropTypes.string,
  titlePartTwo: PropTypes.string
};
