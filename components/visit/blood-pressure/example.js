import React from "react";
import styled from "styled-components";
import Icon from "./icon";

const systolicReading = 120;
const diastolicReading = 80;
const unit = "mmHg";

const ExampleGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 30px;
`;

const Title = styled.p`
  text-align: center;
`;

const MeasurementContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 10px;
  font-size: 18px;
  justify-content: center;

  @media (min-width: 768px) {
    grid-column-gap: 50px;
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 170px));
  }
`;

const HorizontalExample = styled.div`
  display: inline-grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 12px auto auto;
  justify-items: center;
  width: 100%;
  height: 100%;

  p {
    margin: 0;
    padding: 0 4px;
  }

  .h-triangle {
    grid-row: 1;
    grid-column: 1;
    font-size: inherit;
    align-self: center;
  }

  .h-circle {
    grid-row: 1;
    grid-column: 3;
    font-size: calc(100% + 4px);
    align-self: center;
  }

  .slash {
    grid-row: 2;
    grid-column: 2;
    padding: 0 4px;
  }

  .h-systolic {
    grid-row: 2;
    grid-column: 1;
  }

  .h-diastolic {
    grid-row: 2;
    grid-column: 3;
  }

  .h-unit {
    grid-row: 2;
    grid-column: 4;
    justify-self: start;
  }
`;

const VerticalExample = styled.div`
  display: inline-grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: auto 50px auto;
  justify-items: center;
  width: 100%;
  height: 100%;

  p,
  hr {
    margin: 0;
  }

  .v-triangle {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
    font-size: inherit;
    align-self: end;
  }

  .v-circle {
    grid-row: 3 / 3;
    grid-column: 1 / 1;
    font-size: calc(100% + 4px);
    align-self: start;
    line-height: 32px;
  }

  hr {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    box-sizing: border-box;
    display: block;
    height: 2px;
    width: 100%;
    background: #000;
    padding: 0;
    border: none;
    align-self: center;
  }

  .v-systolic {
    grid-row: 1 / 1;
    grid-column: 2 / 2;
    align-self: end;
  }

  .v-diastolic {
    grid-row: 3 / 3;
    grid-column: 2 / 2;
    align-self: start;
  }

  .v-unit {
    align-self: end;
    justify-self: start;
    line-height: 0px;
    padding-left: 12px;
  }
`;

const Example = () => {
  return (
    <ExampleGrid>
      <Title>Here are some examples of blood pressure readings</Title>
      <MeasurementContainer>
        <HorizontalExample>
          <Icon className="h-triangle" code={9653} color="#47d9b3" />
          <Icon className="h-circle" code={9900} color="#fd89d1" />
          <p className="h-systolic">{systolicReading}</p>
          <p className="slash">/</p>
          <p className="h-diastolic">{diastolicReading}</p>
          <p className="h-unit">{unit}</p>
        </HorizontalExample>
        <VerticalExample>
          <Icon className="v-triangle" code={9653} color="#47d9b3" />
          <Icon className="v-circle" code={9900} color="#fd89d1" />
          <p className="v-systolic">{systolicReading}</p>
          <hr />
          <p className="v-diastolic">{diastolicReading}</p>
          <p className="v-unit">{unit}</p>
        </VerticalExample>
      </MeasurementContainer>
    </ExampleGrid>
  );
};

Example.displayName = "Example";

export default Example;
