import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { CenteredGridItem } from "./centered-grid-item.component";
import { Grid } from "../grid";
import { P, Caption } from "../../fonts";

const PreviewContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  min-height: 100vh;
`;

const GridPreviewContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
`;

const GridContent = styled.div`
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.canvas.secondaryLight : theme.colors.canvas.primary};
  display: flex;
  justify-content: center;
  height: 15rem;
  text-align: center;
  width: 100%;
`;

storiesOf("Components|Layout/Layout Components", module).addWithJSX(
  "Centered Grid Item",
  () => {
    return (
      <PreviewContainer>
        <GridPreviewContainer container showColumns>
          <CenteredGridItem xs={8} sm={8} md={16} lg={12}>
            <GridContent>
              <div>
                <P>Centered Grid Item</P>
                <Caption>
                  xs={8} sm={8} md={16} lg={12}
                </Caption>
              </div>
            </GridContent>
          </CenteredGridItem>
        </GridPreviewContainer>
      </PreviewContainer>
    );
  }
);
