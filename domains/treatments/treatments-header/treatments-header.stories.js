import React from "react";
import { storiesOf } from "@storybook/react";

import { TreatmentsHeader } from "./treatments-header.component";

storiesOf("Domains|Treatments", module).add("Header", () => (
  <TreatmentsHeader />
));
