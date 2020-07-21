import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";
import { Field, reduxForm } from "redux-form";

import { withRedux } from "../../../utils/storybook";

import { PlainRadioField } from "./plain-radio-field.component";
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "50%" : "none")};
`;
storiesOf("Components|Forms/Radio Field", module)
  .addDecorator(withRedux)
  .addWithJSX("Plain", () => {
    const isInContainer = boolean("Show in container");
    const SampleForm = () => (
      <form>
        <Field
          component={({ input, meta, value, id }) => (
            <PlainRadioField
              input={{ ...input, value: "Addyi" }}
              value="Addyi"
              meta={meta}
              id={id}
            >
              Addyi
            </PlainRadioField>
          )}
          name="product"
          id="Addyi"
        />
        <Field
          component={({ input, meta, value, id }) => (
            <PlainRadioField
              input={{ ...input, value: "Addyi" }}
              value="Birth Control"
              meta={meta}
              id={id}
            >
              Birth Control
            </PlainRadioField>
          )}
          name="product"
          id="Birth Control"
        />
      </form>
    );
    const Form = reduxForm({ form: "radio-field-list-sample" })(SampleForm);
    return (
      <PreviewContainer constrained={isInContainer}>
        <Form />
      </PreviewContainer>
    );
  });
