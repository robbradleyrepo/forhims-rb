import styled from "styled-components";
import { ButtonReset } from "../../elements";
import { BodyTextLinkStyles } from "../../fonts/link";

export const SignInLink = styled(ButtonReset)`
  ${BodyTextLinkStyles};
  display: inline;
`;
export const FieldsWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.three};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
`;
