import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import { ActivityOverlay } from "./activity-overlay.component";
import { P } from "../../components/fonts";
import { Block } from "../../components/block";

const PreviewContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

storiesOf("Modules|Activity Overlay", module).add(
  "Default Activity Overlay",
  () => {
    const isVisible = boolean("Visible", true);
    return (
      <React.Fragment>
        <PreviewContainer>
          <Block px={4}>
            <P>
              Spend a few minutes reading the leaflet that comes with birth
              control pills like Yaz, Estrostep or Ortho Tri-Cyclen and there’s
              a chance you’ll come away with the impression that hormonal birth
              control is, to put it lightly, a little dangerous.
            </P>
            <P>
              First, there are the common side effects, which can range from
              nausea to weight gain, spotting and breast tenderness. Then there
              are the less common side effects, which can range from high blood
              pressure and sleep issues to serious, life-threatening medical
              events like blood clots.
            </P>
            <P>
              The reality of birth control is that while side effects can and
              sometimes do happen, birth control pills are very safe for most
              women. Serious side effects from the pill are rare, and the
              majority of women will only experience minor side effects, if any
              at all.
            </P>
            <P>
              Below, we’ve looked at how common side effects are from hormonal
              birth control pills. Our list covers everything from minor side
              effects such as spotting and weight gain to far less common, more
              serious side effects such as blood clots, hypertension and stroke.
            </P>
          </Block>
          <ActivityOverlay visible={isVisible} />
        </PreviewContainer>
      </React.Fragment>
    );
  }
);
