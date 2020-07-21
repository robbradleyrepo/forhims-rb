import PropTypes from "prop-types";

import React from "react";
import ReactMarkdown from "react-markdown";
import { LinkStyle } from "../center-align-text.style";
import { WithEyebrowTextStyle } from "./with-eyebrow.style";

const TextStyleRenderer = props => <WithEyebrowTextStyle {...props} />;
const LinkStyleRenderer = props => <LinkStyle {...props} />;

const renderers = {
  paragraph: TextStyleRenderer,
  link: LinkStyleRenderer
};

export const WithEyebrowTextRenderer = ({ content }) => (
  <ReactMarkdown source={content} renderers={renderers} />
);

WithEyebrowTextRenderer.propTypes = {
  content: PropTypes.string.isRequired
};
