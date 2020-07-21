import React from "react";

import { storiesOf } from "@storybook/react";

import { SoftFooterMarquee } from "./soft-footer-marquee.component";
import DesktopImage from "../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-atf-d-2x.png";

import { text } from "@storybook/addon-knobs";

storiesOf("Modules|Soft Footer Marquee", module).addWithJSX(
  "Soft Footer Marquee",
  () => {
    const images = [DesktopImage, DesktopImage, DesktopImage, DesktopImage];
    const scrollingText = text("Text", `it’s`);

    return <SoftFooterMarquee images={images} text={scrollingText} />;
  }
);
