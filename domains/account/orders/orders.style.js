import styled from "styled-components";
import { createMaxWidthMediaQuery } from "../../../utils/breakpoints";
import { ListReset } from "../../../components/elements";

export const OrdersHeader = styled.div`
  text-align: center;
  margin: 2rem 0 2rem;

  ${createMaxWidthMediaQuery("small")} {
    margin: 4rem 0 2rem;
  }
`;

export const OrdersListWrapper = styled(ListReset)`
  margin-left: 20px;
`;

export const OrdersBody = styled.div``;
