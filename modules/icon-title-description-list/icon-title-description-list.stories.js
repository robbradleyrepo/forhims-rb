import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { IconTitleDescriptionList } from "./icon-title-description-list.component";
import { IconTitleDescription } from "../icon-title-description-list/icon-title-description/";
import { PlusIcon } from "../../components/icons/plus-icon";
import { withProductCategorySelectorKnob } from "../../utils/storybook";
import {
  HairCleansesScalpIcon,
  SkinEnlargedPoresIcon
} from "../../components/icons";

storiesOf("Modules|Icon Title Description", module)
  .addDecorator(withProductCategorySelectorKnob)
  .add("List", () => {
    const title = text("Title", "Is this the real life?");
    const children = [
      <IconTitleDescription
        key="12312"
        title="yes"
        description="it is for sure"
        icon={<PlusIcon />}
      />,
      <IconTitleDescription
        key="2;kl34j5"
        title="no"
        description="now go put on your socks"
        icon={<HairCleansesScalpIcon />}
      />,
      <IconTitleDescription
        key=";1l23j4"
        title="maybe"
        description="who cares?"
        icon={<SkinEnlargedPoresIcon />}
      />
    ];

    return (
      <IconTitleDescriptionList title={title}>
        {children}
      </IconTitleDescriptionList>
    );
  });
