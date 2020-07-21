import React from "react";
import PropTypes from "prop-types";

import { Block } from "../block";
import { Grid } from "../layout/grid/grid.component";
import { CenteredGridItem } from "../layout";
import { StealthLink, P, Headline3 } from "../fonts";
import { UnderlinedRouterLink } from "../text-link";
import { hasValue } from "../../utils";

import { BlogPostSummaryImage, PostBody, BlogDivider } from "./blog.style";
import { createBlogLink } from "./blog.utils";
import { BlogCategoryList } from "./blog-category-list.component";

const fullWidthContentGridProps = {
  xs: 13,
  sm: 10,
  smOffset: 3,
  md: 20,
  lg: 20
};

const contentWithImageGridProps = {
  xs: 13,
  sm: 10,
  smOffset: 3,
  md: 15,
  mdOffset: 1,
  lg: 15,
  lgOffset: 1
};

export const BlogPostSummary = ({
  categories,
  featuredImage,
  slug,
  summary,
  title
}) => {
  const hasFeaturedImage = hasValue(featuredImage);
  const contentGridLayoutProps = hasFeaturedImage
    ? contentWithImageGridProps
    : fullWidthContentGridProps;
  return (
    <Block>
      <Grid container>
        <CenteredGridItem xs={13} sm={14} md={20} lg={20}>
          <Block flex="none" width="100%">
            <Block pb={4}>
              <Grid container>
                {hasValue(featuredImage) && (
                  <Grid item xs={13} sm={10} smOffset={3} md={8} lg={8}>
                    <Block width="100%" pb={4}>
                      <BlogPostSummaryImage bgImg={featuredImage} />
                    </Block>
                  </Grid>
                )}

                <Grid item {...contentGridLayoutProps}>
                  <PostBody>
                    {hasValue(categories) && (
                      <Block mb={4}>
                        <BlogCategoryList categories={categories} />
                      </Block>
                    )}
                    <Block mb={3}>
                      <StealthLink to={createBlogLink(slug)}>
                        <Headline3 as="h2">{title}</Headline3>
                      </StealthLink>
                    </Block>
                    <Block mb={4}>
                      <P>{summary}</P>
                    </Block>
                    <UnderlinedRouterLink to={createBlogLink(slug)}>
                      Read This Article
                    </UnderlinedRouterLink>
                  </PostBody>
                </Grid>
              </Grid>
            </Block>
            <BlogDivider />
          </Block>
        </CenteredGridItem>
      </Grid>
    </Block>
  );
};

BlogPostSummary.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  ),
  featuredImage: PropTypes.string,
  slug: PropTypes.string,
  summary: PropTypes.string,
  title: PropTypes.string
};
