import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Testimonials from "./leadgen.testimonials.component";

storiesOf("Domains|Lead Gen/Components", module).add("Testimonials", () => {
  const title = text("title", "This is the section name");

  return <Testimonials items={testimonials} title={title} />;
});

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
    source: "Giannis Antetokounmpo"
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
    source: "Derrick Favors"
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eveniet facere provident corporis dignissimos recusandae?",
    source: "Khris Middleton"
  }
];
