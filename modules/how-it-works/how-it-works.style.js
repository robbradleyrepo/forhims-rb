import styled from "styled-components";
import { Headline2 } from "../../components/fonts/h2";
import { Block } from "../../components/block";

export const CardHeadline = styled(Headline2)`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1.2;
`;

export const CardBlock = styled(Block)`
  background-color: ${({ theme }) => theme.colors.canvas.white};
  padding: ${({ theme }) => theme.spacing.four};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
