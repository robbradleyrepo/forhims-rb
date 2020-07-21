import React from "react";
import { storiesOf } from "@storybook/react";

import { FullScreenImage } from "./full-screen-image.component";

import MobileImage from "../../resources/images/sex/hers-plp-sex-fullWidthImage-m-2x.jpg";
import DesktopImage from "../../resources/images/sex/hers-plp-sex-fullWidthImage-d-2x.jpg";

storiesOf("Modules|Images/Full Screen Image", module).addWithJSX(
  "Default Full Screen Image",
  () => {
    const images = [MobileImage, MobileImage, DesktopImage, DesktopImage];
    return <FullScreenImage images={images} title="Storybook test" />;
  }
);
