import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Gender from "./gender-alt.component";
import { action } from "@storybook/addon-actions";
import React from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
`;

storiesOf("Components|EMR/Gender Selection", module).add("Isolated", () => {
  return (
    <Container>
      <Gender
        clearSubmitErrors={action("gender-alt-clearSubmitErrors")}
        closeEmrForm={action("gender-alt-closeEmrForm")}
        confirmGender={action("gender-alt-confirmGender")}
        consented={true}
        error={false}
        gender={null}
        setGender={action("gender-alt-setGender")}
      />
    </Container>
  );
});
