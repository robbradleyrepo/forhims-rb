import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { Slider } from "./slider.component";
import { ImageSlider } from "./image-slider.component";
import { BodySmall } from "../fonts";

const ImageIdWide = "Hers-pdp-hair-gummy-howtouse01-{imageSize}-2x";
const ImageIdTall = "Hers-pdp-hair-gummy-howtouse02-{imageSize}-2x";

const PreviewContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.four};
  background-color: ${({ theme }) => theme.colors.brand.sex};
`;

const CustomSlide = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.canvas.primary};
  border: ${({ theme }) => theme.borders.greyDivider};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.three};
  width: 20rem;
`;

storiesOf("Components|Slider", module)
  .add("Default Slider", () => {
    const ExampleSlide = () => (
      <CustomSlide>
        <BodySmall>This is a slide in the slider</BodySmall>
      </CustomSlide>
    );
    const slides = [
      <ExampleSlide key="example-1" />,
      <ExampleSlide key="example-2" />,
      <ExampleSlide key="example-3" />,
      <ExampleSlide key="example-4" />,
      <ExampleSlide key="example-5" />,
      <ExampleSlide key="example-6" />
    ];
    return (
      <PreviewContainer>
        <Slider slides={slides} />
      </PreviewContainer>
    );
  })
  .add("Cloudinary Image Slider", () => {
    const slides = [
      ImageIdTall,
      ImageIdWide,
      ImageIdTall,
      ImageIdWide,
      ImageIdTall
    ];
    return (
      <PreviewContainer>
        <ImageSlider height="30rem" slides={slides} />{" "}
      </PreviewContainer>
    );
  });
