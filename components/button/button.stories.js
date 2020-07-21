import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
import styled from "styled-components";

import { Button } from "./button.component";
import { BUTTON_VARIANTS } from "../../theme/buttons";
import { convertConstantsToStorySelect } from "../../utils/storybook";

import { CloseIcon } from "../../components/icons/close-icon";
import { ArrowIcon } from "../../components/icons/arrow-icon";

const PreviewContainer = styled.div`
  min-height: 100vh;
`;

storiesOf("Components|Buttons/Brand Button", module)
  .add("Primary", () => {
    const isFullWidth = boolean("is full width");
    const variant = select(
      "Button Variant",
      convertConstantsToStorySelect(BUTTON_VARIANTS),
      BUTTON_VARIANTS.PRIMARY
    );
    return (
      <Button
        onClick={action("button-onClick")}
        label={"shop skin"}
        variant={variant}
        fullWidth={isFullWidth}
      />
    );
  })
  .add("Secondary", () => {
    const isFullWidth = boolean("is full width");
    return (
      <PreviewContainer>
        <Button
          onClick={action("button-onClick")}
          label={"shop skin"}
          variant={BUTTON_VARIANTS.SECONDARY}
          fullWidth={isFullWidth}
        />
      </PreviewContainer>
    );
  })
  .add("Flat", () => {
    const isFullWidth = boolean("is full width");
    return (
      <Button
        onClick={action("button-onClick")}
        label={"shop skin"}
        variant={BUTTON_VARIANTS.FLAT}
        fullWidth={isFullWidth}
      />
    );
  })
  .add("Disabled", () => {
    const isFullWidth = boolean("is full width");
    return (
      <PreviewContainer>
        <Button
          onClick={action("button-onClick")}
          label={"sold out"}
          variant={BUTTON_VARIANTS.SECONDARY}
          fullWidth={isFullWidth}
          disabled
        />
      </PreviewContainer>
    );
  })
  .add("Variations", () => {
    const isFullWidth = boolean("is full width");
    const isDisabled = boolean("is disabled");
    const variant = select(
      "Button Variant",
      convertConstantsToStorySelect(BUTTON_VARIANTS),
      BUTTON_VARIANTS.PRIMARY
    );
    return (
      <PreviewContainer>
        <Button
          onClick={action("button-onClick")}
          label={"shop skin"}
          variant={variant}
          fullWidth={isFullWidth}
          disabled={isDisabled}
        />
      </PreviewContainer>
    );
  })
  .add("With a SVG icon", () => {
    const isFullWidth = boolean("is full width");
    const isDisabled = boolean("is disabled");
    const variant = select(
      "Button Variant",
      convertConstantsToStorySelect(BUTTON_VARIANTS),
      BUTTON_VARIANTS.PRIMARY
    );

    const icon = select("Icon Variant", ["close", "arrow"], "close");

    const iconComponent = {
      close: CloseIcon,
      arrow: ArrowIcon
    }[icon];

    return (
      <PreviewContainer>
        <Button
          icon={iconComponent}
          onClick={action("button-onClick")}
          label={"shop skin"}
          variant={variant}
          fullWidth={isFullWidth}
          disabled={isDisabled}
        />
      </PreviewContainer>
    );
  });
