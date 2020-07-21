import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { HomepageHero } from "./homepage-hero.component";

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primary};
  min-height: 150vh;
`;

storiesOf("Modules|Hero", module).addWithJSX("Homepage Hero", () => {
  const description = text(
    "Description",
    `accessible healthcare, now in your hands. medical grade products delivered to your door to help solve your biggest skin, hair, and sex concerns.`
  );
  const title = text("Title", "your health, in your hands.");
  return (
    <PreviewContainer>
      <HomepageHero
        description={description}
        imageLeft="hers-home-atf-background-{imageSize}-2x"
        imageRight="hers-home-atf-hero-{imageSize}-2x"
        title={title}
        buttons={[
          { label: "Shop Skin", url: "/skin-care" },
          { label: "Shop Hair", url: "/hair-loss" },
          { label: "Shop Sex", url: "/sexual-health" }
        ]}
      />
    </PreviewContainer>
  );
});
