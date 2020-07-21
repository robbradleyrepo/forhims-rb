import React from "react";
import R from "ramda";
import PropTypes from "prop-types";

import { Block } from "../block";
import { hasValue } from "../../utils";

import { BlogRouterLink, BlogRouterLinkSeparator } from "./blog.style";
import { createBlogLink } from "./blog.utils";

const addSeparatorsToLinkList = categoryLinks =>
  R.reduce(
    (categoryLinksSectionChildren, nextLinkElement) => {
      if (categoryLinksSectionChildren.length === 0) {
        return [nextLinkElement];
      } else {
        return [
          ...categoryLinksSectionChildren,
          <BlogRouterLinkSeparator
            as="span"
            key={`sep_${categoryLinksSectionChildren.length}`}
          >
            ,
          </BlogRouterLinkSeparator>,
          nextLinkElement
        ];
      }
    },
    [],
    categoryLinks
  );

export const BlogCategoryList = ({ categories }) => (
  <Block display="flex">
    {hasValue(categories) &&
      R.pipe(
        R.map(({ name, slug }) => (
          <BlogRouterLink
            key={`BlogCategoryListLink-${slug}`}
            to={createBlogLink(slug)}
          >
            {name}
          </BlogRouterLink>
        )),
        addSeparatorsToLinkList
      )(categories)}
  </Block>
);

BlogCategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  ).isRequired
};
