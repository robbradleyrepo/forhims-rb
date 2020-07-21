import { storiesOf } from "@storybook/react";
import React from "react";
import { text, array, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
  ProductHeroWithScroll,
  ProductHeroWithScrollView
} from "./with-scroll/with-scroll.component";
import styled from "styled-components";
import { withRedux, withThemeSelectorKnob } from "../../../utils/storybook";
import { SafetyInformationContainer } from "../../safety-information/safety-information.container";
import Provider from "react-redux/es/components/Provider";
import { storeSafetyInformation } from "../../safety-information/safety-information.stories";
import { ProductHeroComponent } from "./product-hero.component";

const SomeContent = styled.div`
  height: ${({ height }) => `${height}`};
  background-color: #afafaf;
  text-align: center;
`;

const heroContentCardProps = () => {
  const productSummaryEyebrow = text(
    "Eyebrow Summary Text",
    "Fruity and Squishy"
  );
  const productName = text("Product Name", "Gummies");
  const description = text(
    "Description",
    `Lots of sugar and gelatin. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com.`
  );
  const tryNowText = text("Try Now Button Text", "Buy Now - 54.9 ￡");
  const warningCaption = text(
    "Warning Text",
    "* Eat responsibly. Prescription products require a medical consultation via an online assessment after checkout."
  );

  return {
    productSummaryEyebrow,
    productName,
    description,
    tryNowText,
    warningCaption,
    scrollToSafetyInformation: action("todo or ?"),
    productId: "testing123"
  };
};

const getComponent = (Base, images, thumbnails) => {
  const scrollToSafetyInformation = action(
    "Product Hero, scrollToSafetyInformation"
  );

  const dummyContentHeight = number("Dummy content height (in pixels)", 300);

  return (
    <React.Fragment>
      <SomeContent height={`${dummyContentHeight}px`}>
        Content before product hero
      </SomeContent>
      <Base
        contentCard={heroContentCardProps()}
        imageIdentifiers={images}
        thumbnailIdentifiers={thumbnails}
        {...{ scrollToSafetyInformation }}
      />
      <SomeContent height={`${dummyContentHeight}px`}>
        Content after product hero
      </SomeContent>
    </React.Fragment>
  );
};

const namesImages = [
  "hims-pdp-pills-01-{imageSize}-2x",
  "hims-pdp-pills-02-{imageSize}-2x"
];

const namesThumbnails = ["hims-pills-thumbnail-01", "hims-pdp-pills-02-m-2x"];

storiesOf("Modules|Products/Product Hero/With Scroll", module)
  .addDecorator(withRedux)
  .addDecorator(withThemeSelectorKnob)
  .add("Pills & pillbox cloudinary images", () => {
    const images = array("Images", namesImages);
    const thumbnails = array("Thumbnails", namesThumbnails);

    return (
      <div>
        {getComponent(ProductHeroWithScrollView, images, thumbnails, true)}
      </div>
    );
  })
  .add("With Redux Store + Important Safety Information", () => {
    const images = array("Images", namesImages);
    const thumbnails = array("Thumbnails", namesThumbnails);

    return (
      <Provider store={storeSafetyInformation}>
        <div>
          {getComponent(ProductHeroWithScroll, images, thumbnails, true)}
          <SomeContent height={`${600}px`}>Another set of content</SomeContent>
          <SafetyInformationContainer />
        </div>
      </Provider>
    );
  });

storiesOf("Modules|Products/Product Hero/Basic", module)
  .addDecorator(withRedux)
  .addDecorator(withThemeSelectorKnob)
  .add("Default Product Hero", () => {
    return (
      <ProductHeroComponent
        image="hims-pdp-ed-atf-{imageSize}-2x"
        contentCard={heroContentCardProps()}
      />
    );
  });
