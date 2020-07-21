import styled from "styled-components";

import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";

export const ModalContent = styled.section`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  max-width: 80vw;
  max-height: 90vh;
  padding: ${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("medium")} {
    max-width: 60vw;
    max-height: 70vh;
    padding: ${({ theme }) => theme.spacing.five};
  }
`;
