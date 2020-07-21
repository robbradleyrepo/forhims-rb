import React from "react";
import PropTypes from "prop-types";

import { Block } from "../block";
import { Grid } from "../layout/grid/grid.component";
import { blogDisclaimer } from "../../content/content.constants";

import { BlogHeader } from "./blog-header.component";
import {
  DisclaimerBody,
  PostBodyContent,
  PostDetailsMainWrapper,
  PostBody
} from "./blog.style";

const gridProps = {
  item: true,
  xs: 11,
  xsOffset: 1,
  sm: 10,
  smOffset: 3,
  md: 12,
  mdOffset: 6,
  lg: 12,
  lgOffset: 6
};

export const BlogPost = ({ categories, featuredImage, title, body }) => (
  <PostDetailsMainWrapper>
    <Grid container>
      <Grid {...gridProps}>
        <BlogHeader
          categories={categories}
          featuredImage={featuredImage}
          title={title}
        />
      </Grid>
      <Grid {...gridProps}>
        <Block my={4} pb={4} width="100%">
          <PostBody>
            <PostBodyContent>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </PostBodyContent>
            <DisclaimerBody>{blogDisclaimer}</DisclaimerBody>
          </PostBody>
        </Block>
      </Grid>
    </Grid>
  </PostDetailsMainWrapper>
);

BlogPost.propTypes = {
  body: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string
    })
  ),
  featuredImage: PropTypes.string,
  title: PropTypes.string
};
