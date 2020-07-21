import React from "react";

import PropTypes from "prop-types";

import {
  Frame,
  Picture,
  Information,
  Heading,
  Body,
  CTA,
  SmallPrint
} from "./leadgen.exit-cta.style";
import { Markdown } from "../../../components/markdown";

const ParagraphRenderer = props => <Body {...props} />;

const renderers = {
  paragraph: ParagraphRenderer
};

const ExitCTA = ({
  title,
  body,
  image,
  onStartConsultation,
  color = "transparent"
}) => (
  <Frame color={color}>
    <Information>
      <Heading as="h4">{title}</Heading>
      {body && <Markdown renderers={renderers} content={body} />}
      {onStartConsultation && (
        <CTA
          label="Start a free online consultation"
          onClick={onStartConsultation}
        />
      )}
      <SmallPrint>
        prescription subject to doctor approval. doctor online consultation
        required. restrictions apply. see website for full details and important
        safety information.
      </SmallPrint>
    </Information>
    <Picture title={title} image={image} />
  </Frame>
);

export default ExitCTA;

ExitCTA.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string,
  color: PropTypes.string,
  onStartConsultation: PropTypes.func
};
