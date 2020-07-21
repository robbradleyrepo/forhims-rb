import styled from "styled-components";
import { Headline2 } from "../../../../components/fonts/h2";
import { Block } from "../../../../components/block";
import { ButtonReset } from "../../../../components/elements";

export const Divider = styled.hr`
  background-color: ${({ theme }) => theme.colors.ui.divider};
  border: 0;
  height: ${({ theme }) => theme.sizing.divider.height};
  margin: 0;
  width: 100%;
`;

export const FormPageTitle = styled(Headline2)`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;
`;

export const CancelSubscriptionModalWrapper = styled(Block)`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  width: 50vw;
  min-width: 25rem;
  max-width: 40rem;
  position: relative;
`;

export const CloseModalButton = styled(ButtonReset)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.three};
  right: ${({ theme }) => theme.spacing.three};
`;
