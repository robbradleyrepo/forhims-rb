import styled, { css } from "styled-components";
import { ActionList } from "../../../../components/action-list";
import { Button } from "../../../../components/button";

export const actionButtonStyles = css`
  min-width: 9rem;
`;

export const ReactivateButton = styled(Button)`
  ${actionButtonStyles};
`;

export const RenewButton = styled(Button)`
  ${actionButtonStyles};
`;

export const SubscriptionActionList = styled(ActionList)`
  & button {
    ${actionButtonStyles};
  }
`;
