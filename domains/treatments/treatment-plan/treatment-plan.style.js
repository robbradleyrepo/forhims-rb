import styled from "styled-components";

import {
  P,
  Headline1,
  Headline2,
  Headline3,
  Headline4
} from "../../../components/fonts";

// Using em units for rem so margins scale along with responsive type
export const TreatmentPlanContent = styled.div`
  ${P}, ol, ul {
    line-height: 1.75;
    margin: 0 0 2em;
  }
  ${Headline1}, ${Headline2}, ${Headline3}, ${Headline4} {
    margin-bottom: ${({ theme }) => theme.spacing.three};
  }
`;

export const DefaultBold = styled.strong`
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

export const TreatmentPlanTitle = styled(Headline3)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
