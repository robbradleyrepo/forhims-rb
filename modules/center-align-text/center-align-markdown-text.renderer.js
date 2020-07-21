import PropTypes from "prop-types";

import React from "react";
import ReactMarkdown from "react-markdown";
import { TextStyle, LinkStyle } from "./center-align-text.style";

const TextStyleRenderer = props => <TextStyle {...props} />;
const LinkStyleRenderer = props => <LinkStyle {...props} />;

const renderers = {
  paragraph: TextStyleRenderer,
  link: LinkStyleRenderer
};

export const CenterAlignMarkdownTextRenderer = ({ content }) => (
  <ReactMarkdown source={content} renderers={renderers} />
);

CenterAlignMarkdownTextRenderer.propTypes = {
  content: PropTypes.string.isRequired
};
