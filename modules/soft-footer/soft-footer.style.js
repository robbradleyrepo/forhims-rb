import styled from "styled-components";
import { P } from "../../components/fonts";

export const SoftFooterWrapper = styled.div`
  background-color: ${({ bgColor }) => bgColor};

  ${P} {
    margin-left: initial;
  }
`;
