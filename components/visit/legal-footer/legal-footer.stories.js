import * as React from "react";
import { storiesOf } from "@storybook/react";
import LegalFooter from "./legal-footer";
import { action } from "@storybook/addon-actions";

storiesOf("Components|EMR/Footer", module).add("Legal Footer", () => (
  <LegalFooter openModelHandler={action("clicked")} />
));
