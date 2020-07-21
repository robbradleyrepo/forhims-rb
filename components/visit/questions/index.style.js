import styled from "styled-components";
import { Grid } from "../../layout/grid";

export const QuestionsIndexContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export const NextQuestionButtonWrapper = styled(Grid).attrs({
  container: true
})`
  z-index: 2;
  position: sticky;
  bottom: 0;

  > div {
    width: 100%;

    > * {
      display: flex;
      flex-wrap: wrap;

      transform: translateX(-1px);
    }

    > * > * {
      transform: translateX(1px);
      width: calc(100% + 0.5px);
    }

    > * > *:nth-child(1) {
      flex-shrink: 0;
      flex-grow: 0;

      :hover {
        background-color: ${props => props.theme.colors.canvas.white};
      }
    }

    > * > *:nth-child(2) {
      height: ${({ theme }) => theme.spacing.four};
      background-color: ${props => props.theme.colors.canvas.primaryLight};
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
`;
