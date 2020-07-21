import styled from "styled-components";

import { ButtonReset } from "../../../elements/";
import { Block } from "../../../block";
import { combineRems } from "../../../../utils/rem";

const MEDIUM_GREY = "#ccc";

export const AddressLine = styled.div``;

export const EditAddressButton = styled(ButtonReset)`
  opacity: 0;
  border-radius: 50%;
  border: ${({ theme }) => theme.borders.coloredDivider};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing.four};
  height: ${({ theme }) => theme.spacing.four};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${({ theme }) => theme.spacing.two};
  bottom: ${({ theme }) => theme.spacing.two};
  path {
    fill: ${MEDIUM_GREY};
    transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
    transition-property: fill;
    transition-timing-function: ${({ theme }) =>
      theme.transitions.easing.default};
  }
  &:hover,
  &:active,
  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }
  &:hover path,
  &:active path,
  &:focus path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export const AddressLabel = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  padding-bottom: ${({ theme }) => theme.spacing.one};
`;

export const AddressBlock = styled(Block)`
  padding-left: ${({ theme }) =>
    combineRems(theme.spacing.four, theme.spacing.two)};
`;
