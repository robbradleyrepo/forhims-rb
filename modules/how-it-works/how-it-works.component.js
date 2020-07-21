import React from "react";
import PropTypes from "prop-types";

import { CenteredGridLayout } from "../../components/layout/centered-grid-layout";
import { Eyebrow } from "../../components/eyebrow";
import { Block } from "../../components/block";
import { CardHeadline, CardBlock } from "./how-it-works.style";
import { Emoji } from "../../components/emoji";
import { P } from "../../components/fonts/p";
import { Headline } from "../headline";

export const HowItWorks = ({ cards, eyebrowText, headlineText }) => (
  <Block>
    <Block py={5}>
      <Headline eyebrowText={eyebrowText} headlineText={headlineText} />
    </Block>
    <CenteredGridLayout
      xs={13}
      sm={6}
      smSpacing={0.5}
      md={6}
      mdSpacing={0.5}
      lg={6}
      lgSpacing={0.5}
      items={cards.map(({ eyebrowText, headlineText, description, emoji }) => (
        <CardBlock key={`how-it-works-${headlineText}-${description}`} mb={4}>
          <Block pb={3}>
            <Eyebrow>{eyebrowText}</Eyebrow>
          </Block>
          <Block
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            flex="1"
          >
            <CardHeadline as="h3">{headlineText}</CardHeadline>
            <Block p={3}>
              <Emoji size="displayLarge">{emoji}</Emoji>
            </Block>
            <P>{description}</P>
          </Block>
        </CardBlock>
      ))}
    />
  </Block>
);
HowItWorks.propTypes = {
  eyebrowText: PropTypes.string,
  headlineText: PropTypes.string,
  cards: PropTypes.array
};
