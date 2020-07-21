import styled from "styled-components";
import { ListReset } from "../../../../../elements";
import { BodySmall } from "../../../../../fonts/body-small";

export const TextAnswer = styled.textarea`
  width: 100%;
  min-height: 3rem;
  max-height: 9rem;
  resize: none;

  padding: ${({ theme }) => theme.spacing.three};

  background-color: ${({ theme }) => theme.colors.canvas.white};
  border: none;
`;

export const Choice = styled(ListReset)`
  ${BodySmall} {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
