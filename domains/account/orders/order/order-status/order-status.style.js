import styled, { css } from "styled-components";

import { ORDER_STEPS } from "../../../../../constants/Enums";

const stepStyles = {
  [ORDER_STEPS.ORIGIN]: css`
    color: ${({ theme }) => theme.colors.form.error};
  `,
  [ORDER_STEPS.PAYMENT]: css`
    color: ${({ theme }) => theme.colors.form.error};
  `,
  [ORDER_STEPS.EMR]: css`
    color: ${({ theme }) => theme.colors.text.callout};
  `,
  [ORDER_STEPS.PHARMACY]: css`
    color: ${({ theme }) => theme.colors.black};
  `,
  [ORDER_STEPS.SHIPPING]: css`
    color: ${({ theme }) => theme.colors.black};
  `,
  [ORDER_STEPS.CUSTOMER]: css`
    color: ${({ theme }) => theme.colors.form.success};
  `
};

export const OrderStatusWrapper = styled.div`
  ${({ isCancelled, step }) => (isCancelled ? null : stepStyles[step])};
`;
