import styled from "styled-components";

import { ListReset } from "../../elements";

export const CartProductListWrapper = styled(ListReset)``;

export const CartProductListItem = styled.li`
  margin: 0 0 ${({ theme }) => theme.spacing.three};
`;
