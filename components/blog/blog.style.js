import styled from "styled-components";
import { rem } from "polished";

import { createMinWidthMediaQuery } from "../../utils/breakpoints";
import { combineRems } from "../../utils/rem";
import { Caption, ParagraphStyles } from "../fonts";
import { ListReset } from "../elements";
import { ContentContainerGridItem } from "../../modules/plp-hero/plp-hero.style";

import { Grid } from "../layout/grid";
import { BaseRouterLink } from "../fonts/link";
import { LinkStyles } from "../text-link";
import { Block } from "../block";

export const BlogIndexHeroContainer = styled(Grid)`
  height: 170vw;
  background-image: url(${({ bgImages }) => bgImages[0]});
  background-color: ${({ theme }) => theme.colors.canvas.blog};
  background-repeat: no-repeat;
  background-position: center 125%;
  background-size: 100% auto;
  padding-top: 3rem;

  ${createMinWidthMediaQuery("small")} {
    height: 120vw;
    background-image: url(${({ bgImages }) => bgImages[1]});
  }
  ${createMinWidthMediaQuery("medium")} {
    height: 39vw;
    background-image: url(${({ bgImages }) => bgImages[2]});
    background-position: right center;
    background-size: auto 100%;
    text-align: left;
  }
  ${createMinWidthMediaQuery("large")} {
    background-image: url(${({ bgImages }) => bgImages[3]});
  }
`;

export const BlogIndexHeroContentContainer = styled(ContentContainerGridItem)`
  height: 100%;
  justify-content: flex-start;

  ${createMinWidthMediaQuery("medium")} {
    justify-content: center;
    margin-top: 0;
  }
`;

export const BlogHeroDescriptionWrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) =>
    combineRems(spacing.three, spacing.two)};
`;

export const BlogPostSummaryImage = styled.div`
  background-image: url(${props => props.bgImg});
  height: ${rem(248)};
  width: 100%;
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;

  ${createMinWidthMediaQuery("small")} {
    height: ${rem(460)};
  }
`;

export const PostDetailsMainWrapper = styled(Block)`
  margin-top: ${({ theme }) => theme.sizing.header};
  width: 100%;
`;

// TODO: Replace .category with styled-component
export const PostBody = styled.div`
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.brandSecondary};

  img {
    width: 100%;
  }

  .category {
    margin-right: 10px;
  }
`;

export const PostBodyContent = styled.div`
  line-height: 1.75;

  & a {
    color: ${({ theme }) => theme.colors.button.accent};
    text-decoration: none;

    :hover,
    :focus,
    :active {
      color: ${({ theme }) => theme.colors.button.accentHover};
      text-decoration: underline;
    }
  }
  p {
    ${ParagraphStyles};
    line-height: 1.75;
    margin-bottom: 1.25em;
  }
`;

export const BlogDivider = styled.div`
  background-color: ${({ dividerColor }) => dividerColor || "#eee2d7"};
  height: ${({ theme }) => theme.spacing.half};
  width: 100%;
`;

export const DisclaimerBody = styled(Caption)`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: ${({ theme }) => theme.spacing.two} 0;
`;

export const CategoryNavigationList = styled(ListReset)`
  list-style-type: none;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-around;

  li {
    min-width: 125px;
  }
`;
export const CategoryNavigationListWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  padding-bottom: ${({ theme }) => theme.spacing.four};
  margin-bottom: -${({ theme }) => theme.spacing.four};

  ${createMinWidthMediaQuery("medium")} {
    overflow-x: initial;
  }
`;

export const BlogRouterLink = styled(BaseRouterLink)`
  ${LinkStyles};
  color: ${({ theme }) => theme.colors.button.accent};

  &:hover,
  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.button.accent};
  }
`;

export const CategoryNavigationLink = styled(BaseRouterLink)`
  color: ${({ active, theme }) =>
    active ? theme.colors.text.primary : theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.headingSmall};
  font-weight: ${({ theme, active }) =>
    active ? theme.fontWeights.bold : theme.fontWeights.regular};
  text-transform: capitalize;

  ${createMinWidthMediaQuery("small")} {
    font-size: ${({ theme }) => theme.fontSizes.headingMedium};
  }

  &:hover {
    opacity: ${({ theme }) => theme.colors.opacity.hover};
  }
`;

export const BlogRouterLinkSeparator = styled(BlogRouterLink)`
  margin-right: ${({ theme }) => theme.spacing.one};
`;
