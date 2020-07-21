import styled from "styled-components";
import { TreatmentsLink } from "../treatments-list/treatments-list.style";

export const TreatmentsHeaderWrapper = styled.div`
  border-bottom: ${({ theme }) => theme.borders.coloredDivider};
  padding: 0 0 ${({ theme }) => theme.spacing.four};
  text-align: center;
`;

export const TreatmentsHeaderLink = styled(TreatmentsLink)`
  margin: 0 ${({ theme }) => theme.spacing.four};
`;
