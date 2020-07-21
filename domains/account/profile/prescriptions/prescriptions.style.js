import styled from "styled-components";

import { ListReset } from "../../../../components/elements";
import { P } from "../../../../components/fonts";

export const PrescriptionsList = styled(ListReset)``;

export const PrescriptionsTitle = styled(P)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  margin: 0;
`;

export const PrescriptionsListItemWrapper = styled.li`
  border-top: ${({ theme }) => theme.borders.coloredDivider};
  padding: ${({ theme }) => theme.spacing.three} 0;
`;
