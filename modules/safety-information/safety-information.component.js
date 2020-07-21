import React from "react";
import PropTypes from "prop-types";
import { Headline2 } from "../../components/fonts";
import { Markdown } from "../../components/markdown";

import {
  SafetyInformationWrapper,
  SafetyInformationTitleWrapper,
  SafetyInformationContentWrapper
} from "./safety-information.style";

export class SafetyInformation extends React.Component {
  render() {
    const { content } = this.props;

    return (
      <SafetyInformationWrapper>
        <SafetyInformationTitleWrapper>
          <Headline2>Important Safety Information</Headline2>
        </SafetyInformationTitleWrapper>
        <SafetyInformationContentWrapper>
          <Markdown content={content} />
        </SafetyInformationContentWrapper>
      </SafetyInformationWrapper>
    );
  }
}

SafetyInformation.defaultProps = {
  isClosed: true
};

SafetyInformation.propTypes = {
  content: PropTypes.string
};
