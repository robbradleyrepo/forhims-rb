import styled from "styled-components";
import { createMaxWidthMediaQuery } from "../../../../../utils/breakpoints";

export const LabelValueStyle = styled.div`
  ${createMaxWidthMediaQuery("small")} {
    margin-bottom: ${({ theme }) => theme.spacing.three};
  }
`;

export const LabelStyle = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  margin-bottom: ${({ theme }) => theme.spacing.half};
`;
