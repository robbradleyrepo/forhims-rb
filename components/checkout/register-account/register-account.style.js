import styled from "styled-components";

import { Headline3 } from "../../fonts/h3";
import { P } from "../../fonts/p";
import { BodyTextLinkStyles } from "../../fonts/link";
import { ButtonReset } from "../../elements";

export const WelcomeHeader = styled(Headline3)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  text-align: center;
`;
export const RegisterDetails = styled(P)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  text-align: center;
`;
export const RegisterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SignInLink = styled(ButtonReset)`
  ${BodyTextLinkStyles};
  display: inline;
`;
export const RegisterFieldsWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.three};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;
