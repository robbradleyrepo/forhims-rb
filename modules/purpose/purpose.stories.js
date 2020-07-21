import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Purpose } from "./purpose.component";
import { text } from "@storybook/addon-knobs";
import { purposeContent } from "../../content/content.constants";

const PreviewContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.blue};
`;

storiesOf("Modules|Purpose", module).addWithJSX("Default", () => {
  const title = text("Title", "hey there, welcome to hims.");

  const content = text("Content", purposeContent);

  const image = text("Image", "andrew");

  return (
    <PreviewContainer>
      <Purpose title={title} content={content} image={image} />
    </PreviewContainer>
  );
});
