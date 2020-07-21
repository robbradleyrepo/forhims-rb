import styled from "styled-components";
import { ListResetStyles } from "../../../../components/elements";
import { Block } from "../../../../components/block";
import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";

export const SubscriptionWrapper = styled.div`
  ${ListResetStyles};
  background-color: ${({ cancelled, selected, theme }) =>
    selected || cancelled ? "#eee" : "#E4EAE6"};
  color: ${({ cancelled }) => (cancelled ? "#999" : "inherit")};
  padding: ${({ theme }) => theme.spacing.four};
  position: relative;
  cursor: pointer;

  :not(:last-child) {
    border-bottom: ${({ theme }) => theme.borders.coloredDivider};
  }

  &:hover {
    background-color: #eee;
  }
`;

export const ActionButtonBlock = styled(Block)`
  ${createMinWidthMediaQuery("small")} {
    justify-content: flex-end;
  }
`;
