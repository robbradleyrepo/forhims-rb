import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import styled from "styled-components";
import { TextField } from ".";

/**
 * Add space above the inputs so the label does not go off the screen when it floats up
 */
const ExtraSpace = styled.div`
  margin-top: 1rem;
`;

storiesOf("Components|Forms/Text Field", module)
  .addDecorator(storyFn => <ExtraSpace>{storyFn()}</ExtraSpace>)
  .addWithJSX("Empty", () => {
    const label = text("Label", "First Name");
    return (
      <TextField
        input={{
          id: "does-not-matter",
          name: "does-not-matter",
          value: ""
        }}
        meta={{}}
        label={label}
      />
    );
  })
  .addWithJSX("Filled in", () => {
    const value = text("Value", "Lee");
    const label = text("Label", "First Name");
    return (
      <TextField
        input={{
          id: "does-not-matter",
          name: "does-not-matter",
          value
        }}
        meta={{}}
        label={label}
      />
    );
  })
  .addWithJSX("Error", () => {
    const label = text("Label", "First Name");
    const error = text("Error", "Not valid");
    const value = text("Value", "Lee");
    return (
      <TextField
        input={{
          id: "does-not-matter",
          name: "does-not-matter",
          value
        }}
        meta={{
          error,
          touched: true
        }}
        label={label}
      />
    );
  })
  .addWithJSX("Disabled", () => {
    const label = text("Label", "First Name");
    const value = text("Value", "Hers");
    return (
      <TextField
        disabled
        label={label}
        input={{
          id: "does-not-matter",
          name: "does-not-matter",
          value,
          disabled: true
        }}
        meta={{}}
      />
    );
  })
  .addWithJSX("With type attribute", () => {
    const label = text("Label", "Password");
    const value = text("Value", "Hers");
    return (
      <TextField
        label={label}
        input={{
          id: "does-not-matter",
          name: "does-not-matter",
          value,
          type: "password"
        }}
        meta={{}}
      />
    );
  });
