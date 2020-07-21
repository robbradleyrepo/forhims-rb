import styled from "styled-components";
import { Headline3 } from "../../fonts/h3";
import { Grid } from "../../layout/grid";
import { createMaxWidthMediaQuery } from "../../../utils/breakpoints";

export const GenderSelectionPromptWrapper = styled(Grid).attrs({
  container: true
})`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  padding-top: ${({ theme }) => theme.spacing.four};
  padding-bottom: ${({ theme }) => theme.spacing.four};

  > ${Headline3} {
    margin-bottom: ${({ theme }) => theme.spacing.four};
    text-align: center;
  }

  && ${Headline3} {
    width: 100%;
    text-align: center;
  }
`;

export const GenderSelectionButtons = styled(Grid).attrs({ container: true })`
  > * {
    display: flex;
    justify-content: space-between;

    ${createMaxWidthMediaQuery("small")} {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  > * > * {
    width: 40%;
    flex-shrink: 1;
    flex-grow: 0;

    ${createMaxWidthMediaQuery("small")} {
      margin-bottom: ${({ theme }) => theme.spacing.two};
    }
  }
`;
