import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { colors } from "../../theme/colors";

import { StickyHeader } from "./sticky-header.component";
import { GlobalNavigationHeader } from "../navigation/global-navigation";
import { LandingHero } from "../../modules/landing-hero";

const Banner = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${colors.canvas.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 150vh;
  background-color: ${colors.canvas.primary};
`;

const PageContent = () => (
  <LandingHero
    title="Girl."
    description="We deliver hair loss, skincare and, sexual health products directly to you, so you can take care of yourself."
    image="https://via.placeholder.com/400x600jpg"
    buttonLabel="Go to hers"
    bgColor={colors.canvas.primary}
  />
);

const ScrollAwayContent = () => <Banner>Get Free Shipping!</Banner>;

storiesOf("Components|Navigation/Sticky Header", module)
  .add("Sticky", () => {
    return (
      <PageContainer>
        <StickyHeader sticky={GlobalNavigationHeader} />
        <PageContent />
      </PageContainer>
    );
  })
  .add("Scroll away", () => {
    return (
      <PageContainer>
        <StickyHeader scrollAway={ScrollAwayContent} />
        <PageContent />
      </PageContainer>
    );
  })
  .add("Sticky & scroll away", () => {
    return (
      <PageContainer>
        <StickyHeader
          sticky={GlobalNavigationHeader}
          scrollAway={ScrollAwayContent}
        />
        <PageContent />
      </PageContainer>
    );
  });
