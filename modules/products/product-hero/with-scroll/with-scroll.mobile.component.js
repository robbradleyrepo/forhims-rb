import React from "react";
import R from "ramda";

import { HeroContentCard } from "../../../../components/hero-content-card";
import {
  ProductHeroRootLayer,
  ProductHeroMobileCarousel
} from "../product-hero.style";
import productHeroProptypes from "../product-hero.proptypes";

export const ProductHeroWithScrollMobile = ({
  contentCard,
  imageIdentifiers,
  scrollToSafetyInformation
}) => {
  return (
    <ProductHeroRootLayer>
      <ProductHeroMobileCarousel
        slides={imageIdentifiers}
        fullWidthSlides
        carouselControls="dots"
      />
      <section>
        <HeroContentCard {...contentCard} {...{ scrollToSafetyInformation }} />
      </section>
    </ProductHeroRootLayer>
  );
};

ProductHeroWithScrollMobile.propTypes = R.dissoc("thumbnailIdentifiers")(
  productHeroProptypes
);
