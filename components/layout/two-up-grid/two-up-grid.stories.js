import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

import { TwoUpGrid } from "./two-up-grid.component";

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
    <PhotoPlaceholder src="https://via.placeholder.com/600x400jpg" />
  </PhotoContainer>
);

const items = [
  <Photo key="one" />,
  <Photo key="two" />,
  <Photo key="three" />,
  <Photo key="four" />,
  <Photo key="five" />,
  <Photo key="six" />
];

storiesOf("Components|Layout/Layout Components", module).addWithJSX(
  "Two Up Grid",
  () => {
    return (
      <PhotoWrapper>
        <TwoUpGrid items={items} />
      </PhotoWrapper>
    );
  }
);
