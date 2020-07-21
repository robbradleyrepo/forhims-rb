import styled from "styled-components";

import { TextLink } from "../../fonts/link";

export const Heading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.two};
`;

export const Info = styled.div`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: normal;
`;

export const Divider = styled.hr`
  border-width: 0;
  border-top: ${({ theme }) => theme.borders.coloredDivider};
`;

export const EditButton = styled(TextLink)`
  cursor: pointer;
`;
