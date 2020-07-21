import React from "react";
import PropTypes from "prop-types";
import { length } from "ramda";

import { Markdown } from "../../../../components/markdown";
import {
  DescriptionWrapper,
  HeaderWrapper,
  InspectLineLeft,
  InspectLineRight,
  ContentWrapper
} from "./product-knowledge-content.style";
import { Headline2 } from "../../../../components/fonts";
import { TwoTonedHeading } from "../../../../components/two-toned-heading";
import { ProductKnowledgeDetailList } from "../product-knowledge-detail-list";
import { ProductKnowledgeDetailGrid } from "../product-knowledge-detail-grid";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../../../theme/breakpoints";
import { hasValue } from "../../../../utils";

const MAX_NUMBER_OF_LIST_DETAILS = 3;

const renderProductDetails = productDetails =>
  length(productDetails) > MAX_NUMBER_OF_LIST_DETAILS ? (
    <ProductKnowledgeDetailGrid productDetails={productDetails} />
  ) : (
    <ProductKnowledgeDetailList productDetails={productDetails} />
  );

export const ProductKnowledgeContent = ({
  title,
  titlePartTwo,
  description,
  productDetails,
  imageIsLeft
}) => (
  <ContentWrapper>
    <HeaderWrapper>
      <MediaQuery minWidth={breakpoints.medium}>
        {imageIsLeft ? (
          <InspectLineLeft twoLineTitle={titlePartTwo} />
        ) : (
          <InspectLineRight twoLineTitle={titlePartTwo} />
        )}
      </MediaQuery>
      {titlePartTwo ? (
        <Headline2>
          <TwoTonedHeading>{[title, titlePartTwo]}</TwoTonedHeading>
        </Headline2>
      ) : (
        <Headline2>{title}</Headline2>
      )}
    </HeaderWrapper>
    <DescriptionWrapper>
      <Markdown content={description} />
    </DescriptionWrapper>
    {hasValue(productDetails) && renderProductDetails(productDetails)}
  </ContentWrapper>
);

ProductKnowledgeContent.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  productDetails: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  imageIsLeft: PropTypes.bool,
  titlePartTwo: PropTypes.string
};
