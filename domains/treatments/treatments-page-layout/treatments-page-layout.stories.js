import React from "react";
import { storiesOf } from "@storybook/react";

import { TreatmentsPageLayout } from "./treatments-page-layout.component";

storiesOf("Domains|Treatments", module).add("Page Layout", () => (
  <TreatmentsPageLayout>
    This is some example content on a treatment page.
  </TreatmentsPageLayout>
));
