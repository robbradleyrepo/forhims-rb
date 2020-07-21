import React from "react";
import { storiesOf } from "@storybook/react";

import { FormError } from "./form-error.component";

storiesOf("Components|Forms/Error", module).add("Default Error", () => (
  <FormError>Invalid visit (UdTqa3c1): it was already cancelled.</FormError>
));
