import React from "react";

import { storiesOf } from "@storybook/react";

import QuestionMultiChoice from "./leadgen.question-multi-choice.component";

const answers = [
  {
    label: "yes",
    result:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores modi maiores tempora eos sit atque quidem accusantium earum, reiciendis nihil? Porro fugit eos cum unde cumque, maxime beatae. Modi!"
  },
  {
    label: "no"
  },
  {
    label: "something else"
  },
  {
    label: "one more",
    result:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores modi maiores tempora eos sit atque quidem accusantium earum, reiciendis nihil? Porro fugit eos cum unde cumque, maxime beatae. Modi!"
  },
  {
    label: "and the final",
    result:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores modi maiores tempora eos sit atque quidem accusantium earum, reiciendis nihil? Porro fugit eos cum unde cumque, maxime beatae. Modi!"
  }
];

storiesOf("Domains|Lead Gen/Components", module).add(
  "Question Multi-Choice",
  () => (
    <QuestionMultiChoice
      question="have you ever experienced ED?"
      subTitle="(It’s totally normal — 1 in 4 guys under 40 has it.)"
      count={2}
      countTotal={5}
      answers={answers}
    />
  )
);
