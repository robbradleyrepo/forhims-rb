import styled from "styled-components";
import { P } from "../fonts/p";

export const Eyebrow = styled(P)`
  color: ${({ theme }) => theme.colors.ui.callout};
  margin-bottom: 0;
  /* for the rare occasion Eyebrow is used with a p tag (as="p" prop) and should not be rendered in bold */
  font-weight: normal;
`;
