import React from "react";
import { storiesOf } from "@storybook/react";
import { object, text } from "@storybook/addon-knobs/react";
import { DescriptionTable } from "./description-table.component";

storiesOf("Modules|Description Table", module).add(
  "Default Description Table",
  () => {
    const items = object("Items (without icon property)", [
      { title: "Tri-Lo-Sprintec" },
      { title: "Sprintec" },
      { title: "Norethindrone 0.35" },
      { title: "Drospirenone(Yaz)" },
      { title: "Vienva" },
      { title: "Norethindrone & Ethinyl Fe 1mg/0.02mg" },
      { title: "Junel Fe 1.5/30" },
      { title: "Drospirenone(Yasmin)" },
      { title: "Norethindrone & Ethinyl 1mg/0.02mg" },
      { title: "Junel 1.5/30" }
    ]);

    const title = text("Title", "what is offered?");
    const description = text(
      "Description",
      "We offer a handful of generic forms of the pill including:"
    );

    return (
      <DescriptionTable title={title} description={description} items={items} />
    );
  }
);
