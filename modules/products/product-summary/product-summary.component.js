import React from "react";
import PropTypes from "prop-types";

import { FiftyFiftyLayout } from "../../../components/fifty-fifty-layout";
import { Block } from "../../../components/block";
import {
  FillPicture,
  PictureBadge,
  ProductSummaryTitle,
  ContentBlock
} from "./product-summary.style";
import { Headline4 } from "../../../components/fonts/h4";
import { hasValue } from "../../../utils";

export const ProductSummary = ({
  title,
  description,
  badgeImage,
  badgeImageAltText,
  mainImage,
  mainImageAltText
}) => (
  <FiftyFiftyLayout stacksOnTop="left">
    <ContentBlock>
      {hasValue(badgeImage) && (
        <PictureBadge image={badgeImage} title={badgeImageAltText} />
      )}
      <Block py={4}>
        <ProductSummaryTitle>{title}</ProductSummaryTitle>
      </Block>
      <Headline4>{description}</Headline4>
    </ContentBlock>
    <FillPicture image={mainImage} title={mainImageAltText} />
  </FiftyFiftyLayout>
);

ProductSummary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  badgeImage: PropTypes.string,
  badgeImageAltText: PropTypes.string,
  mainImage: PropTypes.string,
  mainImageAltText: PropTypes.string
};
