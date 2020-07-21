import styled from "styled-components";

import { ListItemLabel } from "../../../radio-field-list-item";

export const ChangedAddressLine = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.brand.sex};
  opacity: 0.5;
  transition-duration: ${({ theme }) => theme.transitions.speed.fast};
  transition-property: all;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};
`;

export const ShippingAddressListWrapper = styled.div`
  & ${ListItemLabel}:hover > button {
    opacity: 1;
  }
  & input:focus + label button {
    opacity: 1;
  }
  & ${ListItemLabel}:hover > div ${ChangedAddressLine} {
    opacity: 1;
  }
  & input:checked + label ${ChangedAddressLine} {
    opacity: 1;
  }
`;
