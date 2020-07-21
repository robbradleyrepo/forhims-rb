import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Picture } from "./picture.component";
import { LazyLoadPicture } from "./lazy-load-picture.component";
import { P } from "../fonts";

const ScrollContainer = styled.div`
  min-height: 400vh;
  padding-top: 150vh;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Components|Picture", module)
  .addWithJSX("Responsive Picture", () => {
    const images = [
      "https://via.placeholder.com/768x768.jpg",
      "https://via.placeholder.com/1024x768.jpg",
      "https://via.placeholder.com/1440x900.jpg",
      "https://via.placeholder.com/2560x1440.jpg"
    ];
    return <Picture images={images} title="Storybook test" />;
  })
  .add("Lazy Load Picture", () => {
    const productImg =
      "https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/hers-crossSell-addyi-2x";
    const images = [productImg, productImg, productImg, productImg];
    return <LazyLoadPicture images={images} title="Pill bottle" />;
  })
  .add("Lazy Load Picture with Loader", () => {
    const productImg =
      "https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/hers-crossSell-addyi-2x";
    const images = [productImg, productImg, productImg, productImg];
    return (
      <div>
        <LazyLoadPicture
          images={images}
          title="Pill bottle"
          width={720}
          height={600}
          loadImmediately
          showLoader
        />
        <P>Please enable network throttling in your dev tools to test loader</P>
      </div>
    );
  })
  .addWithJSX("Lazy Load Picture on Scroll", () => {
    const productImgM =
      "https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/hers-home-atf-hero-m-2x";
    const productImgD =
      "https://res.cloudinary.com/forhims/image/upload/q_auto,f_auto,fl_lossy/hers-home-atf-hero-d-2x";
    const images = [productImgM, productImgM, productImgD, productImgD];
    return (
      <ScrollContainer>
        <LazyLoadPicture images={images} />
      </ScrollContainer>
    );
  });
