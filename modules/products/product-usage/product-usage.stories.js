import React from "react";

import { storiesOf } from "@storybook/react";

import { ProductUsageComponent } from "./product-usage.component";
import { withProductCategorySelectorKnob } from "../../../utils/storybook";

import DesktopImage from "../../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-howtouse01-d-2x.jpg";
import MobileImage from "../../../resources/images/sex/birthControl/Hers-pdp-sex-birthControl-howtouse01-m-2x.jpg";

storiesOf("Modules|Products/Product Usage", module)
  .addDecorator(withProductCategorySelectorKnob)
  .addWithJSX("Default Product Usage", () => {
    const images = [
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage]
    ];
    return (
      <ProductUsageComponent
        title="how is it used?"
        description="No more booking time off to go to the doctor, pharmacy lines, or insurance company on-hold music. In every way possible, we would like to take this hassle off of your plate."
        images={images}
      />
    );
  })
  .addWithJSX("Product Usage with Brands List and Safety Information", () => {
    const images = [
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage],
      [MobileImage, MobileImage, DesktopImage, DesktopImage]
    ];
    const mockBrands = [
      {
        title: "Tri-Lo Sprintec",
        description:
          "Ortho-tri Cyclen Lo, Tri-lo Estarylla, Trinessa Lo, Tri-lo Sprintec"
      },
      {
        title: "Ortho-cyclen",
        description:
          "Sprintec, Mono-linyah, Previfem, Estarylla, Femynor, Mononessa, Mili, Ortho-cyclen"
      },
      {
        title: "Norethindrone*",
        description:
          "Lyza, Heather, Sharobel, Deblitane, Camila, Nora-be, Norlyda, Errin, Jolivette, Jencycla, Micronor, Nor-qd",
        legal: "*Progesterone only"
      },
      {
        title: "Yaz",
        description: "Yaz, Gianvi, Vestura, Nikki, Loryna"
      },
      {
        title: "Lutera",
        description:
          "Vienva, Orsythia, Aubra, Aviane, Larissia, Falmina, Alesse, Delyla "
      },
      {
        title: "Loestrin Fe 1/20",
        description:
          "Tarina Fe 1/20, Blisovi Fe 1/20, Larin Fe 1/20, Junel Fe 1/20, Gildess Fe 1/20, Microgestin Fe 1/20"
      },
      {
        title: "Loestrin Fe 1.5/30",
        description:
          "Junel Fe 1.5/30, Blisovi Fe 1.5/30, Gildess Fe 1.5/30,microgestin Fe 1.5/30, Aurovela Fe 1.5/30, Hailey Fe 1.5/30, Larin Fe 1.5/30"
      },
      {
        title: "Yasmin",
        description: "Syeda, Ocella, Zarah"
      },
      {
        title: "Loestrin 1/20",
        description: "Larin 1/20, Microgestin 1/20, Junel 1/20, Gildess 1/20"
      },
      {
        title: "Loestrin 1.5/30",
        description:
          "Junel 1.5/30, Larin 1.5/30, Microgestin 1.5/30, Gildess 1.5/30"
      }
    ];
    return (
      <ProductUsageComponent
        title="how is it used?"
        description="No more booking time off to go to the doctor, pharmacy lines, or insurance company on-hold music. In every way possible, we would like to take this hassle off of your plate."
        images={images}
        brandsOffered={mockBrands}
        brandsOfferedTitle="we offer these brands"
        brandsOfferedDescription="Read below to find out more about these great products"
        hasSafetyInformation
      />
    );
  });
