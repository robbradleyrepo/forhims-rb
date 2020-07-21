import styled from "styled-components";

export const CheckoutNavigationWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 26rem;
  padding: 0 ${({ theme }) => theme.spacing.three};
`;
