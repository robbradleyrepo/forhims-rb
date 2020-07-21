import React from "react";
import MediaQuery from "react-responsive";
import PropTypes from "prop-types";

import {
  BlogPostPreviewLink,
  BlogPostPreviewTitle,
  BlogPostPreviewDescription,
  BlogPostPreviewCta,
  BlogPostThumbnailWrapper,
  BlogPostThumbnailContainer,
  HoverImage
} from "./blog-post-preview.style";

import { Block } from "../../../components/block";
import { LazyLoadPicture } from "../../../components/picture";
import { breakpoints } from "../../../theme/breakpoints";
import { hasValue } from "../../../utils";

export const BlogPostPreview = ({
  description,
  images,
  secondaryImages,
  title,
  url
}) => (
  <BlogPostPreviewLink to={`/blog/${url}`}>
    <Block pb={2} mb={3}>
      <BlogPostThumbnailWrapper>
        <BlogPostThumbnailContainer>
          <LazyLoadPicture images={images} title={title} />
          {hasValue(secondaryImages) && (
            <HoverImage>
              <LazyLoadPicture images={secondaryImages} title={title} />
            </HoverImage>
          )}
        </BlogPostThumbnailContainer>
      </BlogPostThumbnailWrapper>
    </Block>
    <Block mb={3}>
      <BlogPostPreviewTitle>{title}</BlogPostPreviewTitle>
    </Block>
    <MediaQuery minWidth={breakpoints.small}>
      <Block pb={2} mb={4}>
        <BlogPostPreviewDescription>{description}</BlogPostPreviewDescription>
      </Block>
    </MediaQuery>
    <BlogPostPreviewCta>READ MORE</BlogPostPreviewCta>
  </BlogPostPreviewLink>
);

BlogPostPreview.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  secondaryImages: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  url: PropTypes.string
};
