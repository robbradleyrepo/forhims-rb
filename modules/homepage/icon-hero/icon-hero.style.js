import styled from "styled-components";
import { Link } from "react-router";

import { Grid } from "../../../components/layout/grid";
import { createMaxWidthMediaQuery } from "../../../utils/breakpoints";
import { Headline2 } from "../../../components/fonts/h2";

export const TopLeftIconWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 122px;

  ${createMaxWidthMediaQuery("medium")} {
    display: none;
  }
`;

export const BottomLeftIconWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 122px;
  ${createMaxWidthMediaQuery("medium")} {
    display: none;
  }
`;

export const HeroWrapper = styled(Grid)`
  position: relative;
`;

export const IconHeroLink = styled(Link)`
  color: ${({ theme }) => theme.colors.brand.sex};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  transition-duration: ${({ theme }) => theme.transitions.speed.xfast};
  transition-property: color;
  transition-timing-function: ${({ theme }) =>
    theme.transitions.easing.default};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.brand.hair};
  }
`;

export const IconHeroText = styled(Headline2)`
  text-align: center;
  margin-top: 6.25rem;
  margin-bottom: 3.125rem;
`;
