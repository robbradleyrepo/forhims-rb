import styled, { css } from "styled-components";
import { space } from "styled-system";

import { Block } from "../block";

const CardHighlightStyles = css`
  border: ${({ theme }) => theme.borders.coloredDivider};
  border-color: ${({ theme }) => theme.colors.ui.callout};
`;

// styled-system's space helper allow override of default padding
// ex. cases where child content should extend full width on each side
export const CardBlock = styled(Block)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  padding: ${({ theme }) => theme.spacing.four};
  ${({ highlighted }) => highlighted && CardHighlightStyles};
  ${space};
`;
