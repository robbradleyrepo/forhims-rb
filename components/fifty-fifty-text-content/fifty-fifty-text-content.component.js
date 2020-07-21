import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";

import { Block } from "../block";
import { breakpoints } from "../../theme/breakpoints";

import {
  Line,
  Title,
  TitleSmall,
  SubTitle,
  List,
  Body,
  CenterOnMobile,
  ListItem
} from "./fifty-fifty-text-content.style";

import { Markdown } from "../markdown";
import { FiftyFiftyCTA } from "./fifty-fifty-text-cta.component";

const ParagraphRenderer = props => <Body {...props} />;

const renderers = {
  paragraph: ParagraphRenderer
};

const ListItemRenderer = props => <ListItem {...props} />;

const listMarkdownRenderer = {
  paragraph: ListItemRenderer
};

export const FiftyFiftyTextContent = ({
  body,
  ctaLabel,
  ctaText,
  ctaUrl,
  hasButtonCta = false,
  title,
  titleSmall,
  productId = null,
  subTitle,
  items = []
}) => (
  <div>
    <Title>{title}</Title>
    <TitleSmall>{titleSmall}</TitleSmall>
    <SubTitle>{subTitle}</SubTitle>
    <Block display="flex">
      <MediaQuery minWidth={breakpoints.medium}>
        <Line as="hr" />
      </MediaQuery>
      <div>
        <Markdown renderers={renderers} content={body} />
        <List>
          {items.length ? (
            <ol>
              {items.map((item, i) => (
                <Markdown
                  key={"fiftyfiftycontentlistitem" + i}
                  renderers={listMarkdownRenderer}
                  content={item}
                />
              ))}
            </ol>
          ) : null}
        </List>
        <CenterOnMobile>
          <FiftyFiftyCTA
            {...{
              ctaLabel,
              ctaUrl,
              ctaText,
              hasButtonCta,
              productId
            }}
          />
        </CenterOnMobile>
      </div>
    </Block>
  </div>
);

FiftyFiftyTextContent.propTypes = {
  body: PropTypes.string,
  ctaLabel: PropTypes.string,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.node,
  hasButtonCta: PropTypes.bool,
  productId: PropTypes.string,
  title: PropTypes.string,
  titleSmall: PropTypes.string,
  subTitle: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string)
};
