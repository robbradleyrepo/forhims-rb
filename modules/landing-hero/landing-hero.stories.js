import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import styled from "styled-components";

import { LandingHero } from "./landing-hero.component";

const PreviewContainer = styled.div`
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.canvas.primary};
`;

storiesOf("Modules|Hero", module).add("Landing", () => {
  const title = text("Title", "Hey Gents,");
  const description = text(
    "Description",
    "We’re a men’s wellness brand made for every man. Seriously, every man. 🙋‍♂️🙋🏿‍♂️🙋🏻‍♂️‍🙋🏾‍♂️‍"
  );
  const image = "hims-home-hero-{imageSize}-2x";
  return (
    <PreviewContainer>
      <LandingHero
        title={title}
        description={description}
        image={image}
        buttons={[
          { label: "Treat Hair", url: "/" },
          { label: "Treat Sex", url: "/" }
        ]}
      />
    </PreviewContainer>
  );
});
