import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import TEMPORARY_CONTENT from "./safety-information.constants";
import { SafetyInformation } from "./safety-information.component";
import styled from "styled-components";
import { SafetyInformationContainer } from "./safety-information.container";
import Provider from "react-redux/es/components/Provider";
import { combineReducers, createStore } from "redux";
import { pdpSafetyInformationReducer } from "../../reducer/ui";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.canvas.secondaryLight};
  min-height: 100vh;
`;

export const storeSafetyInformation = createStore(
  combineReducers({
    responsive: () => ({
      desktop: true,
      tablet: false,
      phone: false
    }),
    ui: combineReducers({ pdpSafetyInformation: pdpSafetyInformationReducer }),
    routing: () => ({
      locationBeforeTransitions: {
        pathname: "/finasteride"
      }
    }),
    products: () => ({
      byId: {
        "8VJm2WUc": {
          id: "8VJm2WUc",
          status: "active"
        }
      }
    })
  })
);

storiesOf("Modules|Products/Safety Information", module)
  .add("Regular", () => {
    const isClosed = boolean("Is Closed ?", true);
    const content = text("Content", TEMPORARY_CONTENT["/sexual-health/addyi"]);
    return (
      <Container>
        <SafetyInformation
          content={content}
          isClosed={isClosed}
          textToggleButtonClicked={action("textToggleButtonClicked")}
        />
      </Container>
    );
  })
  .add("with Redux store", () => {
    return (
      <Provider store={storeSafetyInformation}>
        <Container>
          <SafetyInformationContainer />
        </Container>
      </Provider>
    );
  });
