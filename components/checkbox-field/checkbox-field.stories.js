import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CheckboxField } from "./checkbox-field.component";

/**
 * Add space above and to left the inputs so animation is visible
 */
const ExtraSpace = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

storiesOf("Components|Forms/Checkbox Field", module)
  .addDecorator(storyFn => <ExtraSpace>{storyFn()}</ExtraSpace>)
  .addWithJSX("Default Checkbox", () => {
    const label = text(
      "Label",
      "I agree to the Terms and Conditions and Privacy Policy"
    );
    return (
      <CheckboxField
        id="storybook-terms"
        input={{
          name: "consent"
        }}
        meta={{}}
        label={label}
      />
    );
  });
