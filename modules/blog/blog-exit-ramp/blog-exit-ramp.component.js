import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { take, equals } from "ramda";

import { BlogExitRampWrapper } from "./blog-exit-ramp.style";

import { BlogPostPreview } from "../blog-post-preview";
import { BlogPostProps } from "../blog.types";
import { ButtonLink, BUTTON_VARIANTS } from "../../../components/button";
import { Headline2 } from "../../../components/fonts";
import { Block } from "../../../components/block";
import { Grid } from "../../../components/layout";
import { breakpoints } from "../../../theme/breakpoints";
import { shortenString } from "../../../utils/text";
import { Markdown } from "../../../components/markdown";

const MAX_SUMMARY_LENGTH = 90;

const selectFirstTwoPosts = take(2);
const createPictureSetFromImage = imageUrl => [
  imageUrl,
  imageUrl,
  imageUrl,
  imageUrl
];

export const BlogExitRamp = ({ id, title, description, onGoToBlog, posts }) => {
  const BlogPostCTA = () => (
    <ButtonLink
      label="see all blog posts"
      variant={BUTTON_VARIANTS.SECONDARY}
      to={"/blog"}
    />
  );
  const postsToDisplay = selectFirstTwoPosts(posts);
  return (
    <BlogExitRampWrapper id={id}>
      <Grid container>
        <Grid
          xs={13}
          smOffset={2}
          sm={12}
          mdOffset={2}
          md={6}
          lgOffset={2}
          lg={6}
          item
        >
          <div>
            <Block pb={2} mb={3}>
              <Headline2>{title}</Headline2>
            </Block>
            <Block pb={2} mb={4}>
              <Markdown content={description} />
            </Block>
            <MediaQuery
              minWidth={breakpoints.medium + 1}
              values={{ width: breakpoints.medium }}
            >
              <BlogPostCTA />
            </MediaQuery>
          </div>
        </Grid>

        {postsToDisplay.map((post, index) => (
          <Grid
            key={`post-${post.url}`}
            xsOffset={equals(0, index) ? 0 : 1}
            xs={6}
            smOffset={2}
            sm={5}
            mdOffset={1}
            md={6}
            lgOffset={1}
            lg={6}
            item
          >
            <BlogPostPreview
              description={shortenString({
                string: post.summary,
                limit: MAX_SUMMARY_LENGTH
              })}
              images={createPictureSetFromImage(post.featuredImage)}
              title={post.title}
              url={post.url}
            />
          </Grid>
        ))}
      </Grid>

      <MediaQuery
        maxWidth={breakpoints.medium}
        values={{ width: breakpoints.medium }}
      >
        <Block display="flex" justifyContent="center" pt={3} mt={5}>
          <BlogPostCTA />
        </Block>
      </MediaQuery>
    </BlogExitRampWrapper>
  );
};
BlogExitRamp.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  onGoToBlog: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.shape(BlogPostProps)),
  title: PropTypes.string
};
