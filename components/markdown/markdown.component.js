import PropTypes from "prop-types";
import React from "react";
import ReactMarkdown from "react-markdown";

import defaultRenderers from "./renderers";

export const Markdown = ({ content, renderers = {}, escapeHtml = true }) => (
  <ReactMarkdown
    source={content}
    renderers={{ ...defaultRenderers, ...renderers }}
    escapeHtml={escapeHtml}
  />
);

Markdown.propTypes = {
  content: PropTypes.string,
  renderers: PropTypes.any,
  escapeHtml: PropTypes.bool
};
