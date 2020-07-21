import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";

import { IconTitleDescription } from "./icon-title-description.component";
import { SquiggleIcon } from "../../../components/icons";
import { withProductCategorySelectorKnob } from "../../../utils/storybook";

storiesOf("Modules|Icon Title Description", module)
  .addDecorator(withProductCategorySelectorKnob)
  .add("Item", () => {
    const title = text("Title", "hypoactive sexual desire disorder?");
    const description = text("Description", "real, but not the end.");

    return (
      <IconTitleDescription
        icon={<SquiggleIcon />}
        title={title}
        description={description}
      />
    );
  });
