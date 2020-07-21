import React from "react";
import styled from "styled-components";
import { Block } from "../../../block";
import { Instructions } from "./instructions.styles";

const InstructionsList = styled(Block)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;

// const InstructionEmphasis = styled.span`
//   font-weight: ${({ theme }) => theme.fontWeights.bold};
// `;

const Photo = () => (
  <Instructions>
    <InstructionsList>
      <Block>This photo must have be taken in the last 30 days.</Block>
      <Block>
        This photo must be clear with a good resolution for medical purposes.
      </Block>
    </InstructionsList>
  </Instructions>
);

Photo.displayName = "Photo";

export default Photo;
