import React, { Component } from "react";

import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import {
  ProductCardLink,
  BGImageWrapper,
  HoverImage,
  ProductImageWrapper,
  BGImageContainer,
  FluidHeightProductImage,
  ProductTitle,
  ProductDescription,
  ProductLegal,
  ProductInformation,
  ProductListCardBadge
} from "./product-list-card.style";
import { Block } from "../../../../components/block";
import { Button, BUTTON_VARIANTS } from "../../../../components/button";
import {
  ProductImage,
  PRODUCT_IMAGES
} from "../../../../components/product-image";
import { getTheme } from "../../../../theme";
import { translate } from "../../../../i18n";

// todo: Put this in the core product ID
export const PRODUCT_STATUS_ACTIVE = "active";
export const PRODUCT_STATUS_WAITING_LIST = "waiting_list";

export class ProductListCardComponent extends Component {
  getLabel() {
    const { disabled, requiresConsultation } = this.props;

    if (disabled) return translate("products.soldOut");
    if (requiresConsultation) return translate("products.treatNow");
    if (status === PRODUCT_STATUS_WAITING_LIST)
      return translate("products.joinWaitList");
    return translate("products.shop", { price: this.props.price });
  }
  getUrl() {
    if (this.props.disabled) {
      return "";
    }
    return this.props.url;
  }
  render() {
    let {
      id,
      title,
      price,
      handleShopButtonClick,
      description,
      disabled,
      requiresConsultation = false,
      status
    } = this.props;

    return (
      <ProductCardLink to={this.getUrl()} disabled={disabled}>
        {status === PRODUCT_STATUS_WAITING_LIST && (
          <ProductListCardBadge>
            Coming<br />Soon
          </ProductListCardBadge>
        )}

        <BGImageContainer>
          <BGImageWrapper>
            <ProductImage
              id={id}
              imageType={PRODUCT_IMAGES.PLP_BG}
              title={title}
              width={1080}
              height={720}
              showLoader
            />
            <HoverImage>
              <ProductImage
                imageType={PRODUCT_IMAGES.PLP_HOVER}
                id={id}
                title={title}
                // width={1080}
                // height={720}
              />
            </HoverImage>
          </BGImageWrapper>
        </BGImageContainer>
        <ProductImageWrapper>
          <FluidHeightProductImage
            id={id}
            imageType={PRODUCT_IMAGES.PLP_PRODUCT}
            title={title}
            delay={600}
            height={900}
            width={1080}
          />
        </ProductImageWrapper>

        <ProductInformation>
          <Block mb={3}>
            <ProductTitle>{title}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>

            <Button
              label={this.getLabel()}
              price={price}
              variant={BUTTON_VARIANTS.SECONDARY}
              disabled={disabled}
              onClick={handleShopButtonClick}
            />
            <ProductLegal requiresConsultation={requiresConsultation} />
          </Block>
        </ProductInformation>

        {/* <Block pb={3}> */}
        {/* </Block> */}
      </ProductCardLink>
    );
  }
}

ProductListCardComponent.propTypes = {
  description: PropTypes.string,
  handleShopButtonClick: PropTypes.func,
  images: PropTypes.string,
  price: PropTypes.string,
  productImages: PropTypes.string,
  secondaryImages: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  requiresConsultation: PropTypes.bool,
  status: PropTypes.string
};

export const ProductListCard = ({ category, ...cardProps }) => (
  <ThemeProvider theme={getTheme(category)}>
    <ProductListCardComponent {...cardProps} />
  </ThemeProvider>
);
ProductListCard.propTypes = {
  category: PropTypes.string
};
