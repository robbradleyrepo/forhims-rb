import styled from "styled-components";
import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";

export const PhotoProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.five};
`;

export const SeparatorContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spacing.three};
  display: flex;
  align-items: center;

  ${createMinWidthMediaQuery("medium")} {
    margin: 0 ${({ theme }) => theme.spacing.four};
  }
`;
