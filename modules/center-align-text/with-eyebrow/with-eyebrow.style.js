import styled from "styled-components";
import { Headline2 } from "../../../components/fonts/h2";

export const WithEyebrowTextStyle = styled(Headline2)`
  color: ${({ theme }) => theme.colors.black};
  & + & {
    margin-top: ${({ theme }) => theme.spacing.five};
  }
`;

export const EyebrowWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  color: ${({ theme }) => theme.colors.text.callout};
  margin-bottom: ${({ theme }) => theme.spacing.four};
`;
