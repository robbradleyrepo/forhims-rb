import React from "react";
import PropTypes from "prop-types";

import { Block } from "../block";
import { Picture } from "../picture";
import { Headline2 } from "../fonts";
import { hasValue } from "../../utils";

import { BlogRouterLink, BlogDivider } from "./blog.style";
import { BlogCategoryList } from "./blog-category-list.component";

export const BlogHeader = ({ categories, featuredImage, title }) => (
  <Block width="100%">
    <Block pt={4} mb={5}>
      <BlogDivider dividerColor={"black"} />
    </Block>
    <Block mb={4} width="100%" display="flex" justifyContent="flex-start">
      <Block width="50%">
        <BlogCategoryList categories={categories} />
      </Block>
      <Block display="flex" justifyContent="flex-end" width="50%">
        <BlogRouterLink key="back_to_blog" to={`/blog`}>
          Back to Blog
        </BlogRouterLink>
      </Block>
    </Block>
    <Block width="100%">
      <Headline2 as="h1">{title}</Headline2>
    </Block>
    {hasValue(featuredImage) && (
      <Block mt={4}>
        <Picture image={featuredImage} title="" />
      </Block>
    )}
  </Block>
);

BlogHeader.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  ),
  title: PropTypes.string,
  featuredImage: PropTypes.string
};
