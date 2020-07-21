import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import { StealthLink } from "../fonts";
import { Block } from "../block";
import { Headline } from "../../modules/headline/headline.component";
import { hasValue } from "../../utils";

import {
  CategoryNavigationList,
  CategoryNavigationListWrapper,
  CategoryNavigationLink,
  BlogDivider
} from "./blog.style";
import { createBlogLink } from "./blog.utils";

export const BlogCategoryNavigation = ({
  activeCategoryId,
  categories,
  exploreUrl
}) => (
  <Block textAlign="center">
    <Block pb={4}>
      <StealthLink to={exploreUrl}>
        <Block pt={5} pb={4}>
          <Headline
            headlineText="Explore the Hims Journal"
            eyebrowText="Discover more about mens health"
          />
        </Block>
      </StealthLink>
      <CategoryNavigationListWrapper>
        <CategoryNavigationList>
          {hasValue(categories) &&
            categories.map(cat => (
              <li key={`blog-category-${cat.slug}`}>
                <CategoryNavigationLink
                  to={createBlogLink(cat.slug)}
                  active={equals(activeCategoryId, cat.slug)}
                >
                  {cat.name}
                </CategoryNavigationLink>
              </li>
            ))}
        </CategoryNavigationList>
      </CategoryNavigationListWrapper>
    </Block>
    <BlogDivider />
  </Block>
);

BlogCategoryNavigation.propTypes = {
  activeCategoryId: PropTypes.string,
  categories: PropTypes.array.isRequired,
  exploreUrl: PropTypes.string.isRequired
};
