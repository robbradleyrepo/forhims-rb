import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";
import { reduxForm } from "redux-form";
import { compose } from "recompose";

import { withRedux } from "../../../../utils/storybook";
import { CancelSubscription } from "./cancel-subscription.component";
import {
  addCurrentPageState,
  addPageTrail,
  addHandlers,
  addProps
} from "./cancel-subscription.container";

const Preview = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;
const PreviewContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ constrained }) => (constrained ? "30rem" : "none")};
`;

storiesOf("Domains|Account/Orders/Cancel Subscription", module)
  .addDecorator(withRedux)
  .add("Form", () => {
    const isInContainer = boolean("Show in container");
    const ComponentWithStateAndHandlers = compose(
      addCurrentPageState,
      addPageTrail,
      addHandlers,
      addProps
    )(CancelSubscription);
    const cancelSubscription = action("cancel subscription");
    const StoryContent = () => (
      <Preview>
        <PreviewContainer constrained={isInContainer}>
          <ComponentWithStateAndHandlers
            subscription={{ productIds: ["a", "b"] }}
            productsById={{ a: { title: "Addyi" }, b: { title: "T-Shirt" } }}
            cancelSubscription={cancelSubscription}
          />
        </PreviewContainer>
      </Preview>
    );
    const Form = reduxForm({
      form: "cancel-subscription"
    })(StoryContent);

    return <Form />;
  });
