import styled, { css } from "styled-components";

import { Card } from "../../../../components/card";

export const SavedShippingAddressOption = styled(Card)`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};

  ${({ highlighted }) =>
    highlighted &&
    css`
      background-color: ${({ theme }) => theme.colors.canvas.white};
    `};
`;
