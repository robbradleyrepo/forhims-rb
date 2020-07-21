import styled from "styled-components";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";
export const Section = styled.section`
  width: 100%;

  ${createMinWidthMediaQuery("medium")} {
    display: flex;
  }
`;

export const Side = styled.div`
  flex: 1;
`;
