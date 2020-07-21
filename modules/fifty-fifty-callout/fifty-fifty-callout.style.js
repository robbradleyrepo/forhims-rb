import styled from "styled-components";

import { Card } from "../fifty-fifty-with-overlap/fifty-fifty-with-overlap.style";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const FiftyFiftyCalloutWrapper = styled.div`
  ${createMinWidthMediaQuery("medium")} {
    margin-bottom: ${({ theme }) => theme.spacing.six};

    ${Card} {
      align-items: center;
      display: flex;
      min-height: 90vh;
    }
  }
`;
