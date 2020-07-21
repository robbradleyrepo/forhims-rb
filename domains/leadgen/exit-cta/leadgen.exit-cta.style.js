import styled from "styled-components";

import { LeadgenHeading } from "../leadgen.style";
import { Subheadline, Caption } from "../../../components/fonts";
import { Button } from "../../../components/button";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";
import { CloudinaryCover } from "../../../components/picture";

export const Information = styled.div`
  padding: ${({ theme }) => theme.spacing.five}
    ${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("small")} {
    padding-right: ${({ theme }) => theme.spacing.six};
  }
`;

export const Picture = CloudinaryCover;

export const Frame = styled.div`
  display: grid;
  align-items: center;
  min-height: 100vh;
  grid-template-columns: 1fr;

  background-color: ${({ color = "transparent" }) => color};

  ${Information} {
    grid-row: 2;
  }

  ${Picture} {
    grid-row: 1;
  }

  ${createMinWidthMediaQuery("small")} {
    grid-template-columns: 50% 50%;

    ${Information}, ${Picture} {
      grid-row: auto;
    }
  }
`;

export const Heading = styled(LeadgenHeading)`
  text-align: left;

  margin-bottom: ${({ theme }) => theme.spacing.three};
`;

export const Body = styled(Subheadline)`
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.two};
  }

  b {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const CTA = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.four};
  margin-bottom: ${({ theme }) => theme.spacing.three};
`;

export const SmallPrint = styled(Caption)`
  max-width: 480px;
`;
