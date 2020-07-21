import styled from "styled-components";

import {
  createMaxWidthMediaQuery,
  createMinWidthMediaQuery
} from "../../utils/breakpoints";
import {
  Section,
  Side
} from "../../components/fifty-fifty-layout/fifty-fifty-layout.style";

export const FiftyFiftyAboutCalloutWrapper = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    ${Section} {
      align-items: flex-end;

      ${Side}:nth-child(1) {
        align-self: flex-start;
      }
    }
  }
`;

export const AboutText = styled.div`
  text-align: center;
`;

export const AboutImage = styled.div`
  ${createMaxWidthMediaQuery("medium")} {
    margin-top: ${({ theme }) => theme.spacing.three};
  }
`;
