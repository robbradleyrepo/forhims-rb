import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import styled from "styled-components";

import { Grid, CenteredGridItem } from "../layout";
import {
  BGContainer,
  Row,
  DocumentationTitle
} from "../../theme/storybook/theme-stories.component";
import { Block } from "../block";

import { Headline0 } from "./h0";
import { Headline1 } from "./h1";
import { Headline2 } from "./h2";
import { Headline3 } from "./h3";
import { Headline4 } from "./h4";
import { P } from "./p";
import { BodySmall } from "./body-small";
import { Caption } from "./caption";
import { TextLink } from "./link";
import { Subheadline } from "./subheadline";

const knobTitle = "Example Text";
const example = "the quick brown fox jumps over the lazy dog";

const TypeContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.ui.divider};
  padding: ${({ theme }) => theme.spacing.four} 0;
`;

storiesOf("Theme|Typography", module).add("Hierarchy", () => {
  const exampleText = text(
    knobTitle,
    "Sexual health in your control, finally."
  );
  return (
    <BGContainer>
      <Grid container>
        <Row>
          <DocumentationTitle title="Typography Scale" />
        </Row>
        <Row>
          <Grid container>
            <CenteredGridItem xs={13} sm={14} md={22}>
              <Block>
                <P>
                  All type styles use responsive sizing as the viewport scales,
                  rather than hard-coded px values.
                </P>
              </Block>
            </CenteredGridItem>
          </Grid>
        </Row>
        <CenteredGridItem xs={13} sm={14} md={22}>
          <div>
            <TypeContainer>
              <Headline0>Headline 0:</Headline0>
              <Headline0>{exampleText}</Headline0>
            </TypeContainer>
            <TypeContainer>
              <Headline1>Headline 1:</Headline1>
              <Headline1>{exampleText}</Headline1>
            </TypeContainer>
            <TypeContainer>
              <Headline2>Headline 2:</Headline2>
              <Headline2>{exampleText}</Headline2>
            </TypeContainer>
            <TypeContainer>
              <Headline3>Headline 3:</Headline3>
              <Headline3>{exampleText}</Headline3>
            </TypeContainer>
            <TypeContainer>
              <Headline4>Headline 4:</Headline4>
              <Headline4>{exampleText}</Headline4>
            </TypeContainer>
            <TypeContainer>
              <Subheadline>Body XL:</Subheadline>
              <Subheadline>{exampleText}</Subheadline>
            </TypeContainer>
            <TypeContainer>
              <P>
                Body Large:<br />
                {exampleText}
              </P>
            </TypeContainer>
            <TypeContainer>
              <BodySmall>
                Body Small:<br />
                {exampleText}
              </BodySmall>
            </TypeContainer>
            <TypeContainer>
              <Caption>
                Caption:<br />
                {exampleText}
              </Caption>
            </TypeContainer>
          </div>
        </CenteredGridItem>
      </Grid>
    </BGContainer>
  );
});
storiesOf("Components|Fonts", module)
  .add("Headline 0", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Headline0>Headline 0:</Headline0>
        <Headline0>{exampleText}</Headline0>
      </React.Fragment>
    );
  })
  .add("Headline 1", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Headline1>Headline 1:</Headline1>
        <Headline1>{exampleText}</Headline1>
      </React.Fragment>
    );
  })
  .add("Headline 2", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Headline2>Headline 2:</Headline2>
        <Headline2>{exampleText}</Headline2>
      </React.Fragment>
    );
  })
  .add("Headline 3", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Headline3>Headline 3:</Headline3>
        <Headline3>{exampleText}</Headline3>
      </React.Fragment>
    );
  })
  .add("Headline 4", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Headline4>Headline 4:</Headline4>
        <Headline4>{exampleText}</Headline4>
      </React.Fragment>
    );
  })
  .add("SubHeadline", () => {
    const exampleText = text(knobTitle, example);
    return (
      <React.Fragment>
        <Subheadline>Body XL:</Subheadline>
        <Subheadline>{exampleText}</Subheadline>
      </React.Fragment>
    );
  })
  .add("Body Large", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <P>
          Body Large:<br />
          {exampleText}
        </P>
      </React.Fragment>
    );
  })
  .add("Body Small", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <BodySmall>
          Body Small:<br />
          {exampleText}
        </BodySmall>
      </React.Fragment>
    );
  })
  .add("Text Link", () => {
    return <TextLink>TEXT LINK</TextLink>;
  })
  .add("Caption", () => {
    const exampleText = text(knobTitle, example);

    return (
      <React.Fragment>
        <Caption>
          Caption:<br />
          {exampleText}
        </Caption>
      </React.Fragment>
    );
  });
