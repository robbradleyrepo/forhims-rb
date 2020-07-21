import styled from "styled-components";

import { Link } from "../../components/link";
import { Block } from "../../components/block";
import { ListResetStyles, ButtonReset } from "../elements";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";
import { combineRems } from "../../utils/rem";

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.five)};
  color: ${({ theme }) => theme.colors.white};
  word-break: break-word;
`;

export const FooterLink = styled(Link)`
  text-transform: none;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.brandPrimary};
  font-size: ${({ theme }) => theme.fontSizes.headingMedium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  letter-spacing: normal;

  &:hover,
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.canvas.brand};
    color: ${({ theme }) => theme.colors.canvas.brand};
  }

  padding-bottom: 0;
  line-height: 1.25;
`;

export const LegalText = styled.span`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Title = styled.h4`
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  margin: 0 auto
    ${({ theme: { spacing } }) => combineRems(spacing.two, spacing.three)};
  color: ${({ theme }) => theme.colors.white};
`;

export const CollapsibleListTitle = styled(Title)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing.three} auto;
`;

export const HorizontalLine = styled.hr`
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 0;
  height: 2px;
  width: 100%;
  margin: 0;
`;

export const CopyrightAndLegalList = styled.div`
  ${ListResetStyles};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  font-family: ${({ theme }) => theme.fonts.brandSecondary};
  display: block;
  flex-wrap: wrap;

  ${createMinWidthMediaQuery("small")} {
    display: flex;
    padding-top: ${({ theme }) => theme.spacing.three};
  }
`;

export const FooterLogoWrapper = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing.four} 0;
  ${createMinWidthMediaQuery("small")} {
    margin: ${({ theme }) => theme.spacing.two} 0 0 0;
  }
`;

export const FooterSmallLink = styled(FooterLink)`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.brandSans};
`;

export const SocialLinkList = styled(Block)`
  display: flex;
  padding: ${({ theme }) => theme.spacing.four} 0;
  width: 100%;

  ${createMinWidthMediaQuery("small")} {
    justify-content: flex-end;
  }
`;

export const SocialLinkWrapper = styled(Block)`
  ${createMaxWidthMediaQuery("small")} {
    margin-right: ${({ theme }) => theme.spacing.four};
  }
  ${createMinWidthMediaQuery("small")} {
    margin-left: ${({ theme }) => theme.spacing.four};
  }
`;

export const CopyrightItemWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.brandSans};
  margin-left: auto;
  margin-top: ${({ theme }) => theme.spacing.four};
  ${createMinWidthMediaQuery("small")} {
    margin-top: 0;
  }
`;

export const LinkList = styled.ul`
  ${ListResetStyles};
  margin-bottom: ${({ theme }) => theme.spacing.four};
  li {
    margin-bottom: ${({ theme }) => theme.spacing.three};
  }
`;

export const ToggleButton = styled(ButtonReset)``;

export const DisclaimerStyle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.brandSans};
  color: ${({ theme }) => theme.colors.white};
`;
