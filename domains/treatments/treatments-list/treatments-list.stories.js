import React from "react";
import { storiesOf } from "@storybook/react";

import { TreatmentsList } from "./treatments-list.component";

const exampleLinks = [
  {
    name: "Finasteride",
    url: "/treatment/finasteride"
  },
  {
    name: "Minoxidil",
    url: "/treatment/minoxidil"
  },
  {
    name: "Sildenafil",
    url: "/treatment/sildenafil"
  },
  {
    name: "Valacyclovir",
    url: "/treatment/valacyclovir"
  },
  {
    name: "Skincare Acne",
    url: "/treatment/acne"
  },
  {
    name: "Skincare Aging",
    url: "/treatment/aging"
  }
];

storiesOf("Domains|Treatments", module).add("List", () => (
  <TreatmentsList items={exampleLinks} />
));
