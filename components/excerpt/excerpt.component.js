import React from "react";
import PropTypes from "prop-types";

import { Block } from "../block";

import { InlineBodySmall, BodySmallButton } from "./excerpt.style";
import { createExcerptFromMarkdown } from "./excerpt.utils";

export const Excerpt = ({ content, handleReadMore, limit = 200 }) => {
  return (
    <Block>
      <Block display="inline" pr={1}>
        <InlineBodySmall>
          {createExcerptFromMarkdown(content, limit)}
        </InlineBodySmall>
      </Block>
      <BodySmallButton onClick={handleReadMore}>READ MORE</BodySmallButton>
    </Block>
  );
};
Excerpt.propTypes = {
  content: PropTypes.string,
  handleReadMore: PropTypes.func,
  limit: PropTypes.number
};
