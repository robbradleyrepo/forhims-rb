import styled from "styled-components";
import { ProductDetailWrapper } from "../product-knowledge-detail/product-knowledge-detail.style";
import { createMinWidthMediaQuery } from "../../../../utils/breakpoints";

export const ProductDetailGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  & ${ProductDetailWrapper} {
    border: 1px solid;
    border-bottom-color: ${({ theme }) => theme.colors.canvas.primary};
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
  }

  ${createMinWidthMediaQuery("medium")} {
    & ${ProductDetailWrapper} {
      width: 50%;
    }

    & ${ProductDetailWrapper}:nth-child(odd) {
      border-right-color: ${({ theme }) => theme.colors.canvas.primary};
    }
    & ${ProductDetailWrapper}:nth-last-child(1),
    & ${ProductDetailWrapper}:nth-last-child(2) {
      border-bottom-color: transparent;
    }
  }
`;
