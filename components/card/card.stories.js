import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Card } from "./card.component";
import { CardCollapsible } from "./card-collapsible.component";
import { Headline4, P, BodySmall } from "../fonts";
import { Block } from "../block";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  min-height: 100vh;
`;
export const PreviewContainer = styled(Preview)`
  padding: ${({ theme }) => theme.spacing.four};
`;
const CardTitle = styled(Headline4)`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const CardContent = () => (
  <Block>
    <P>This is some example content</P>
    <BodySmall>Name: Nima Test!</BodySmall>
    <BodySmall>Email: nima+1000@forhers.com</BodySmall>
  </Block>
);

storiesOf("Components|Card", module)
  .add("Default Card", () => {
    return (
      <PreviewContainer>
        <Card>
          <CardContent />
        </Card>
      </PreviewContainer>
    );
  })
  .add("Collapsible Card", () => {
    return (
      <PreviewContainer>
        <CardCollapsible title={<CardTitle>Contact Info</CardTitle>}>
          <CardContent />
        </CardCollapsible>
      </PreviewContainer>
    );
  })
  .add("Highlighted Card", () => {
    return (
      <PreviewContainer>
        <Block mb={4}>
          <Card highlighted>
            <Block mb={3}>
              <CardTitle>Required Action: Please Read</CardTitle>
            </Block>
            <CardContent />
          </Card>
        </Block>
        <Card>
          <P>Non-Urgent Content</P>
          <CardContent />
        </Card>
      </PreviewContainer>
    );
  });
