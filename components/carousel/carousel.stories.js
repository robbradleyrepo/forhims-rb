import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "styled-components";

import { Carousel } from "./carousel.component";
import { colors } from "../../theme/colors";

import DesktopImage from "../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-howtouse01-d-2x.jpg";
import MobileImage from "../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-howtouse01-m-2x.jpg";
import { select } from "@storybook/addon-knobs";

const PreviewContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${colors.brand.sex};
`;

const CustomSlide = styled.div`
  width: 100%;
  height: 20rem;
  background-color: ${colors.canvas.primary};
`;

storiesOf("Components|Carousel", module)
  .add("Carousel with images", () => {
    const slides = [
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage]
    ];
    return (
      <PreviewContainer>
        <Carousel slides={slides} />
      </PreviewContainer>
    );
  })
  .add("Carousel with Custom Slides", () => {
    const slides = [
      <CustomSlide key="1">Custom slide 1</CustomSlide>,
      <CustomSlide key="2">Custom slide 2</CustomSlide>,
      <CustomSlide key="2">Custom slide 3</CustomSlide>,
      <CustomSlide key="2">Custom slide 4</CustomSlide>
    ];
    const bottomControlsStyle = select(
      "bottom controls style",
      ["slider", "dots"],
      "slider"
    );

    return (
      <PreviewContainer>
        <Carousel
          slides={slides}
          customSlides
          carouselControls={bottomControlsStyle}
        />
      </PreviewContainer>
    );
  });
