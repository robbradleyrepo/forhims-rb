import styled from "styled-components";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

export const ImageAndTextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: ${({ theme }) => theme.spacing.five};

  ${createMinWidthMediaQuery("medium")} {
    flex-flow: row;
  }

  a {
    margin-top: ${({ theme }) => theme.spacing.four};
    margin-bottom: ${({ theme }) => theme.spacing.four};
  }
`;

export const ImageAndTextP = styled.p`
  font-size: 22px;
  margin-bottom: 0;
`;
