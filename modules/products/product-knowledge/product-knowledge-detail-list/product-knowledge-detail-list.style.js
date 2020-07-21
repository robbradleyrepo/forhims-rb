import styled from "styled-components";

import { ProductDetailWrapper } from "../product-knowledge-detail/product-knowledge-detail.style";

export const ProductDetailListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & ${ProductDetailWrapper} {
    border: 1px solid;
    border-bottom-color: ${({ theme }) => theme.colors.ui.divider};
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
  }
  & ${ProductDetailWrapper}:last-child {
    border-bottom-color: transparent;
  }
`;
