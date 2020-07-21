import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import styled from "styled-components";
import { SelectField } from ".";

/**
 * Add space above the inputs so the label does not go off the screen when it floats up
 */
const ExtraSpace = styled.div`
  margin-top: 50px;
`;

const sampleOptions = [
  { label: "California", value: "california" },
  { label: "Vermont", value: "vermont" }
];

storiesOf("Components|Forms/Select Field", module)
  .addDecorator(storyFn => <ExtraSpace>{storyFn()}</ExtraSpace>)
  .addWithJSX("Empty", () => {
    const label = text("Label", "State");
    return (
      <SelectField
        input={{
          id: "state",
          name: "state",
          value: ""
        }}
        meta={{}}
        label={label}
        options={sampleOptions}
      />
    );
  })
  .addWithJSX("Selected", () => {
    const label = text("Label", "State");
    return (
      <SelectField
        input={{
          id: "state",
          name: "state",
          value: "vermont"
        }}
        meta={{}}
        label={label}
        options={sampleOptions}
      />
    );
  })
  .addWithJSX("Error", () => {
    const error = text("Error", "Not valid");

    return (
      <SelectField
        meta={{ error, touched: true }}
        input={{
          id: "state",
          name: "state",
          value: "vermont"
        }}
        label="State"
        options={sampleOptions}
        // onChange={action("select-field-onChange")}
      />
    );
  })
  .addWithJSX("Disabled", () => {
    return (
      <SelectField
        input={{
          id: "state",
          name: "state",
          value: "vermont"
        }}
        meta={{}}
        disabled
        label="State"
        options={sampleOptions}
      />
    );
  });
