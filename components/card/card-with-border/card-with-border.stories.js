import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { text } from "@storybook/addon-knobs";

import { CardWithBorder } from "./card-with-border.component";
import { Headline4 } from "../../fonts";
import { Block } from "../../block";

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

const CardContent = () => <Block>This is some example content</Block>;

storiesOf("Components|Card", module).addWithJSX("Card with Border", () => {
  const borderColor = text("Border color", "colors.brand.hair");
  const backgroundColor = text("Background color", "colors.white");
  return (
    <PreviewContainer>
      <CardWithBorder
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        p={4}
      >
        <CardTitle />
        <CardContent />
      </CardWithBorder>
    </PreviewContainer>
  );
});
