import React from "react";
import PropTypes from "prop-types";

import { P } from "../fonts";
import { Block } from "../block";
import { Button, BUTTON_VARIANTS } from "../button";
import { ProductImage, PRODUCT_IMAGES } from "../product-image";
import { Eyebrow } from "../eyebrow";
import { translate } from "../../i18n";
import { hasValue } from "../../utils";

import {
  ProductCardLink,
  HoverImage,
  BaseballCardWithBorder,
  BaseballCardButtonContainer,
  Headline,
  CenteredProductImage,
  BaseballCardContentContainer,
  ProductImageWrapper,
  BaseballCardCopyContainer
} from "./baseball-card.style";

const createButtonLabel = ({ price, buttonLabel }) =>
  hasValue(buttonLabel)
    ? buttonLabel
    : hasValue(price)
      ? translate("products.tryWithPrice", { price })
      : translate("products.try");

export const BaseballCard = ({
  category,
  className,
  description,
  disabled,
  id,
  onButtonClick,
  price,
  buttonLabel,
  title,
  url,
  productDetail,
  purchaseDetail
}) => {
  return (
    <ProductCardLink
      className={className}
      disabled={disabled}
      to={disabled ? null : url}
    >
      <BaseballCardWithBorder>
        <Block
          display="flex"
          flexDirection="column"
          height="100%"
          m={2}
          p={3}
          textAlign="center"
        >
          <HoverImage>
            <ProductImage
              imageType={PRODUCT_IMAGES.PLP_HOVER}
              id={id}
              title={title}
              width={1080}
              height={720}
            />
          </HoverImage>
          <Block mb={2}>
            <Eyebrow>{category}</Eyebrow>
          </Block>
          <ProductImageWrapper>
            <CenteredProductImage
              id={id}
              imageType={PRODUCT_IMAGES.PLP_PRODUCT}
              title={title}
              width={1080}
              height={900}
              showLoader
            />
          </ProductImageWrapper>
          <BaseballCardContentContainer>
            <Block mb={3}>
              <Headline>{title}</Headline>
              {hasValue(productDetail) && (
                <Block pt={3}>
                  <Eyebrow>{productDetail}</Eyebrow>
                </Block>
              )}
            </Block>
            <BaseballCardCopyContainer>
              <P>{description}</P>
            </BaseballCardCopyContainer>
            <BaseballCardButtonContainer>
              <Button
                disabled={disabled}
                label={
                  disabled
                    ? translate("products.soldOut")
                    : createButtonLabel({ price, buttonLabel })
                }
                variant={BUTTON_VARIANTS.SECONDARY}
                fullWidth
                onClick={onButtonClick}
              />
            </BaseballCardButtonContainer>
            {hasValue(purchaseDetail) && <P>{purchaseDetail}</P>}
          </BaseballCardContentContainer>
        </Block>
      </BaseballCardWithBorder>
    </ProductCardLink>
  );
};

BaseballCard.propTypes = {
  category: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  requiresConsultation: PropTypes.bool,
  onButtonClick: PropTypes.func,
  price: PropTypes.string,
  buttonLabel: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  productDetail: PropTypes.string,
  purchaseDetail: PropTypes.string
};
