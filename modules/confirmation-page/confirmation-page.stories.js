import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import React from "react";
import { ConfirmationPageComponent } from "./confirmation-page.component";

storiesOf("Components|EMR/Confirmation Page", module).add(
  "Default Confirmation Page",
  () => {
    const confirmationNumber = text("Confirmation Number", "oiORG1YF");
    const email = text("User Email", "user@emrvisit.com");
    return (
      <ConfirmationPageComponent
        email={email}
        confirmationNumber={confirmationNumber}
      />
    );
  }
);
