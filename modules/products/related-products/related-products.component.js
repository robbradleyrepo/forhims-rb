import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";

import { RelatedProductsWrapper } from "./related-products.style";
import { RelatedProductCard } from "./related-product-card";
import { productDetailAssociations } from "../../../content/content.constants";
import { ProductProps } from "../product.types";
import { Headline3 } from "../../../components/fonts";
import { Block } from "../../../components/block";
import { currency, hasValue } from "../../../utils";
import { breakpoints } from "../../../theme/breakpoints";
import { Grid, ThreeUpGrid } from "../../../components/layout";
import { Carousel } from "../../../components/carousel";

const createPictureSetFromImage = imageSrc =>
  hasValue(imageSrc) ? [imageSrc, imageSrc, imageSrc, imageSrc] : [];

export const RelatedProducts = ({
  id,
  title,
  products,
  hasMobileCarousel = true
}) => {
  const productCards = products.map(
    ({
      title,
      description,
      price,
      category,
      imageSrc,
      id,
      tags,
      requiresConsultation
    }) => {
      let association = productDetailAssociations[id] || {
        link: "",
        disabled: true
      };
      const ProductCard = (
        <Block
          width="100%"
          key={`related-product-wrapper-${id}`}
          data-testid="RelatedProductCard"
        >
          <RelatedProductCard
            key={`related-product-${id}`}
            title={title}
            description={description}
            images={createPictureSetFromImage(imageSrc)}
            price={currency(price)}
            id={id}
            disabled={association.disabled}
            category={hasValue(tags) ? tags[0] : category}
            link={association.link}
            requiresConsultation={requiresConsultation}
          />
        </Block>
      );
      return ProductCard;
    }
  );
  // TODO: Create layout components for Mobile, Tablet etc. media queries
  return (
    <RelatedProductsWrapper id={id}>
      {title && (
        <Block mb={5}>
          <Grid container>
            <Grid smOffset={2} sm={10} mdOffset={2} md={6} item>
              <Headline3>{title}</Headline3>
            </Grid>
          </Grid>
        </Block>
      )}
      <Block>
        {hasMobileCarousel ? (
          <React.Fragment>
            <MediaQuery minWidth={breakpoints.medium + 1}>
              <ThreeUpGrid items={productCards} />
            </MediaQuery>
            <MediaQuery maxWidth={breakpoints.medium}>
              <Grid container>
                <Grid item xs={13} sm={14} smOffset={2}>
                  <Carousel
                    slides={productCards}
                    customSlides
                    fullWidthSlides
                    carouselTheme="light"
                  />
                </Grid>
              </Grid>
            </MediaQuery>
          </React.Fragment>
        ) : (
          <ThreeUpGrid items={productCards} />
        )}
      </Block>
    </RelatedProductsWrapper>
  );
};

RelatedProducts.propTypes = {
  category: PropTypes.oneOf(["hair", "skin", "sex", "all"]),
  hasMobileCarousel: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape(ProductProps)).isRequired
};
