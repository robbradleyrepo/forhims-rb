import React from "react";
import PropTypes from "prop-types";

import { FiftyFiftyTextContent } from "../../components/fifty-fifty-text-content";
import { FiftyFiftyWithOverlap } from "../fifty-fifty-with-overlap";
import { ImageBlock } from "../image-block";
import { Block } from "../../components/block";
import { FiftyFiftyCalloutWrapper } from "./fifty-fifty-callout.style";

export const FiftyFiftyCallout = ({
  body,
  cardSide,
  ctaText,
  ctaUrl,
  ctaLabel,
  hasButtonCta,
  productId,
  id,
  imageAltText,
  imageId,
  hoverImageAltText,
  hoverImageId,
  overlap,
  stacksOnTop,
  title,
  titleSmall,
  subTitle,
  items
}) => {
  const FiftyFiftyCalloutText = () => (
    <Block width="100%">
      <FiftyFiftyTextContent
        title={title}
        titleSmall={titleSmall}
        subtitle={subTitle}
        body={body}
        ctaUrl={ctaUrl}
        ctaText={ctaText}
        ctaLabel={ctaLabel}
        hasButtonCta={hasButtonCta}
        productId={productId}
        subTitle={subTitle}
        items={items}
      />
    </Block>
  );
  const FiftyFiftyCalloutImage = () => (
    <ImageBlock
      image={imageId}
      hoverImage={hoverImageId}
      title={imageAltText || title}
      hoverImageTitle={hoverImageAltText || title}
      id={`${id}-image`}
    />
  );
  return (
    <FiftyFiftyCalloutWrapper id={id}>
      {cardSide === "left" ? (
        <FiftyFiftyWithOverlap
          overlap={overlap}
          cardSide={cardSide}
          stacksOnTop={stacksOnTop}
        >
          <FiftyFiftyCalloutText />
          <FiftyFiftyCalloutImage />
        </FiftyFiftyWithOverlap>
      ) : (
        <FiftyFiftyWithOverlap
          overlap={overlap}
          cardSide={cardSide}
          stacksOnTop={stacksOnTop}
        >
          <FiftyFiftyCalloutImage />
          <FiftyFiftyCalloutText />
        </FiftyFiftyWithOverlap>
      )}
    </FiftyFiftyCalloutWrapper>
  );
};

FiftyFiftyCallout.defaultProps = {
  cardSide: "left",
  stacksOnTop: "right"
};

const leftOrRightPropType = PropTypes.oneOf(["left", "right"]);

FiftyFiftyCallout.propTypes = {
  body: PropTypes.string,
  cardSide: leftOrRightPropType,
  ctaLabel: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.node,
  hasButtonCta: PropTypes.bool,
  productId: PropTypes.string,
  id: PropTypes.string,
  imageAltText: PropTypes.string,
  imageId: PropTypes.string.isRequired,
  hoverImageId: PropTypes.string,
  hoverImageAltText: PropTypes.string,
  overlap: PropTypes.bool,
  stacksOnTop: leftOrRightPropType,
  title: PropTypes.string,
  titleSmall: PropTypes.string,
  subTitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};
