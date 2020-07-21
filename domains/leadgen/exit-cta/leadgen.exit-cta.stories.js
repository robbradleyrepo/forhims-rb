import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import ExitCTA from "./leadgen.exit-cta.component";

storiesOf("Domains|Lead Gen/Components", module).add("Exit CTA", () => {
  const title = text("title", "you're in luck! hair loss can be optional.");
  const body = text(
    "body",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo laboriosam cupiditate.  \n\nAt repudiandae exercitationem laudantium doloribus fugit incidunt eveniet quibusdam, consequuntur, et quam ex fuga! Illum sequi incidunt in molestiae nobis. Voluptates debitis, ipsam quasi laborum doloremque enim voluptate modi veniam magni adipisci, alias nostrum quis esse accusamus, autem aperiam?"
  );

  return (
    <ExitCTA
      title={title}
      body={body}
      image="HimsUK-pdp-ED-atf-d-2x-reverse"
      onClick={() => alert("Clicked")}
    />
  );
});
