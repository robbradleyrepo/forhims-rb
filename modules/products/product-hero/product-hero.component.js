import React from "react";
import PropTypes from "prop-types";
import R from "ramda";

import { HeroContentCard } from "../../../components/hero-content-card";
import { Block } from "../../../components/block";
import { Grid } from "../../../components/layout/grid";

import {
  ProductHeroContentItem,
  ProductHeroGridContainer,
  FullWidthCloudinaryPicture,
  ProductHeroContentCardWrapper,
  ProductHeroWrapper
} from "./product-hero.style";

export const ProductHeroComponent = ({
  image,
  contentCard,
  title,
  imageDimensions,
  handleViewSafetyInformation,
  backgroundColor
}) => (
  <ProductHeroWrapper backgroundColor={backgroundColor}>
    <ProductHeroGridContainer container>
      <Grid item fullWidth xs={13} sm={16} md={24} lg={24}>
        <FullWidthCloudinaryPicture
          title={title}
          image={image}
          dimensions={imageDimensions}
        />
      </Grid>
      <ProductHeroContentItem
        item
        fullWidth
        xs={13}
        sm={16}
        md={11}
        mdOffset={13}
        lg={11}
        lgOffset={13}
      >
        <Block width="100%">
          <ProductHeroContentCardWrapper>
            <HeroContentCard
              handleViewSafetyInformation={handleViewSafetyInformation}
              {...contentCard}
            />
          </ProductHeroContentCardWrapper>
        </Block>
      </ProductHeroContentItem>
    </ProductHeroGridContainer>
  </ProductHeroWrapper>
);
ProductHeroComponent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  imageDimensions: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  ),
  contentCard: PropTypes.shape(
    R.dissoc("scrollToSafetyInformation")(HeroContentCard.propTypes)
  ),
  backgroundColor: PropTypes.string
};
