import React, { Component } from "react";
import PropTypes from "prop-types";
import { Markdown } from "../../components/markdown/markdown.component";
import { CenterAlignedMarkdownContainer } from "./center-aligned-markdown.style";

export class CenterAlignedMarkdown extends Component {
  render() {
    return (
      <CenterAlignedMarkdownContainer>
        <Markdown content={this.props.content} />
      </CenterAlignedMarkdownContainer>
    );
  }
}

CenterAlignedMarkdown.propTypes = {
  content: PropTypes.string
};
