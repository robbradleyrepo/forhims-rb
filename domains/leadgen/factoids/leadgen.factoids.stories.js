import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean, number } from "@storybook/addon-knobs";

import Factoids from "./leadgen.factoids.component";

storiesOf("Domains|Lead Gen/Components", module).add("Factoids", () => {
  const title = text("title", "This is the section name");
  const ordered = boolean("ordered", true);
  const numberOf = number("Number of items", 3, {
    range: true,
    min: 1,
    max: factoids.length,
    step: 1
  });

  return (
    <Factoids
      title={title}
      items={factoids.slice(0, numberOf)}
      ordered={ordered}
      onStartConsultation={() => alert("start consultation")}
    />
  );
});

const factoids = [
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  },
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  },
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  },
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  },
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  },
  {
    images: [
      "https://cdn.goprimer.com/uploads/thinning-f3dd6fa12704c569ffd881c0f709578f.png"
    ],
    title: "This is the title",
    body:
      "This is in the body and needs to be here if we are going to let it be written"
  }
];
