import React from "react";
import { storiesOf } from "@storybook/react";

import { BrandsList } from "./brands-list.component";
import { withProductCategorySelectorKnob } from "../../../../utils/storybook";

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

storiesOf("Modules|Products/Product Usage", module)
  .addDecorator(withProductCategorySelectorKnob)
  .add("Brands List", () => (
    <BrandsList
      title="what is offered?"
      description="We offer a handful of generic forms of the pill including:"
      items={mockBrands}
    />
  ));
