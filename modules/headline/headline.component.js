import PropTypes from "prop-types";
import React from "react";

import { Grid, CenteredGridItem } from "../../components/layout";
import { Block } from "../../components/block";
import { Eyebrow } from "../../components/eyebrow";
import { hasValue } from "../../utils";

import { HeadlineStyle } from "./headline.style";
import { CenterAlignedMarkdown } from "../center-aligned-markdown";

export const Headline = ({
  headlineText,
  subHeadlineText,
  eyebrowText,
  className
}) => (
  <Grid container className={className}>
    <CenteredGridItem xs={13} sm={12} md={18} lg={18}>
      <Block
        display="flex"
        width="100%"
        flexDirection="column"
        textAlign="center"
      >
        {hasValue(eyebrowText) && (
          <Block mb={4}>
            <Eyebrow>{eyebrowText}</Eyebrow>
          </Block>
        )}
        <HeadlineStyle as="h2">{headlineText}</HeadlineStyle>
        {hasValue(subHeadlineText) && (
          <Block mt={1}>
            <CenterAlignedMarkdown content={subHeadlineText} />
          </Block>
        )}
      </Block>
    </CenteredGridItem>
  </Grid>
);

Headline.propTypes = {
  className: PropTypes.string,
  headlineText: PropTypes.string.isRequired,
  subHeadlineText: PropTypes.string,
  eyebrowText: PropTypes.string
};
