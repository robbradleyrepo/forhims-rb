import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import {
  ProductCardLink,
  ProductImageWrapper
} from "./related-product-card.style";

import { Headline4, P } from "../../../../components/fonts";
import { Block } from "../../../../components/block";
import { Button, BUTTON_VARIANTS } from "../../../../components/button";

import {
  ProductImage,
  PRODUCT_IMAGES
} from "../../../../components/product-image";
import { getTheme } from "../../../../theme";
import { CenteredGridItem } from "../../../../components/layout";
import { translate } from "../../../../i18n";
import { LegalProductText } from "../../../../components/legal-product-text";

export const RelatedProductCardComponent = ({
  title,
  description,
  price,
  link,
  id,
  disabled,
  requiresConsultation
}) => {
  let label = !disabled
    ? `${translate("products.shop", { price })}`
    : translate("products.soldOut");

  return (
    <ProductCardLink
      to={link}
      disabled={disabled}
      data-testid={`RelatedProductCard-${id}`}
    >
      <Block>
        <Block mb={4}>
          <ProductImageWrapper>
            <ProductImage
              id={id}
              title={title}
              imageType={PRODUCT_IMAGES.CROSS_SELL}
              width={720}
              height={600}
              showLoader
            />
          </ProductImageWrapper>
        </Block>
        <CenteredGridItem xs={13} sm={12} md={18}>
          <Block width="100%" textAlign="center">
            <Block mb={3}>
              <Headline4>{title}</Headline4>
            </Block>
            <Block pb={2}>
              <P>{description}</P>
            </Block>
          </Block>
        </CenteredGridItem>
      </Block>
      <Button
        label={label}
        variant={BUTTON_VARIANTS.SECONDARY}
        fullWidth
        disabled={disabled}
      />
      <LegalProductText requiresConsultation={requiresConsultation} />
    </ProductCardLink>
  );
};

RelatedProductCardComponent.propTypes = {
  description: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  requiresConsultation: PropTypes.bool
};

export const RelatedProductCard = ({ category, ...cardProps }) => (
  <ThemeProvider theme={getTheme(category)}>
    <RelatedProductCardComponent {...cardProps} />
  </ThemeProvider>
);
RelatedProductCard.propTypes = {
  category: PropTypes.string
};
