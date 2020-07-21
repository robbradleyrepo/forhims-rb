import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { CenteredGridLayout } from "./centered-grid-layout.component";

const PhotoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding: ${({ theme }) => theme.spacing.four} 0;
`;
const PhotoContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvas.white};
  border: 1px solid ${({ theme }) => theme.colors.ui.divider};
  margin-bottom: ${({ theme }) => theme.spacing.five};
  padding: ${({ theme }) => theme.spacing.three};
  width: 100%;
`;
const PhotoPlaceholder = styled.img`
  display: block;
  height: auto;
  margin: 0 auto;
  width: 100%;
`;

const Photo = () => (
  <PhotoContainer>
    <PhotoPlaceholder src="https://via.placeholder.com/400x600jpg" />
  </PhotoContainer>
);

const Thumbnail = () => (
  <PhotoContainer>
    <PhotoPlaceholder src="https://via.placeholder.com/800x450jpg" />
  </PhotoContainer>
);

storiesOf("Components|Layout/Layout Components/Centered Grid Layout", module)
  .addWithJSX("Three Card Layout", () => {
    return (
      <PhotoWrapper>
        <CenteredGridLayout
          xs={12}
          sm={9}
          md={6}
          mdSpacing={1}
          lg={5}
          lgSpacing={1}
          items={[
            <Photo key="one" />,
            <Photo key="two" />,
            <Photo key="three" />
          ]}
        />
      </PhotoWrapper>
    );
  })
  .addWithJSX("Two Card Layout", () => {
    return (
      <PhotoWrapper>
        <CenteredGridLayout
          xs={12}
          sm={9}
          md={6}
          mdSpacing={1}
          lg={5}
          lgSpacing={1}
          items={[<Photo key="one" />, <Photo key="two" />]}
        />
      </PhotoWrapper>
    );
  })
  .addWithJSX("Six Thumbnail Layout", () => {
    return (
      <PhotoWrapper>
        <CenteredGridLayout
          xs={6}
          sm={4}
          smSpacing={1}
          md={3}
          mdSpacing={1}
          lg={3}
          lgSpacing={1}
          items={[
            <Thumbnail key="one" />,
            <Thumbnail key="two" />,
            <Thumbnail key="three" />,
            <Thumbnail key="four" />,
            <Thumbnail key="five" />,
            <Thumbnail key="six" />
          ]}
        />
      </PhotoWrapper>
    );
  });
