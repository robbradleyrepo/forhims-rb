import styled from "styled-components";

import { RouterLink } from "../../../components/fonts";

export const TreatmentsLink = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.text.callout};

  &:visited {
    color: ${({ theme }) => theme.colors.text.callout};
  }

  &:hover,
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.text.callout};
  }
`;
