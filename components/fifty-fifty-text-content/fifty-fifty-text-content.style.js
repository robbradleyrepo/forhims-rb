import styled from "styled-components";
import { rem } from "polished";

import { Headline1, Headline2, Headline4 } from "../fonts";
import {
  createMinWidthMediaQuery,
  createMaxWidthMediaQuery
} from "../../utils/breakpoints";

/** use rem or vw units so that the width is the same no matter what the font size is */
const lineWidth = rem(40);

export const Title = styled(Headline1)`
  line-height: 1.125;
  text-transform: lowercase;
  margin-bottom: ${({ theme }) => theme.spacing.three};
  ${createMaxWidthMediaQuery("small")} {
    font-size: ${({ theme }) => theme.fontSizes.displaySmall};
  }
  ${createMinWidthMediaQuery("medium")} {
    margin-left: ${lineWidth};
  }
`;

export const TitleSmall = styled(Headline2)`
  line-height: 1.125;
  margin-bottom: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${createMaxWidthMediaQuery("small")} {
    font-size: ${({ theme }) => theme.fontSizes.displaySmall};
  }
`;

export const SubTitle = styled(Headline4)`
  margin-bottom: ${({ theme }) => theme.spacing.three};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Line = styled(Headline4)`
  max-width: ${lineWidth};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.ui.separator};
  border-width: 0;

  /** use em units so that these dimensions change along with the font size & window size */
  margin-top: 0.9em;
  margin-right: 0.5em;

  /** use px units so that the height is constant, even when font & window size changes */
  height: 2px;
`;

export const Body = styled(Headline4)`
  margin-bottom: ${({ theme }) => theme.spacing.four};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const List = styled(Headline4)`
  ol {
    margin-top: 0px;
    margin-bottom: ${({ theme }) => theme.spacing.four};
    li {
      padding-top: 0;
      margin-bottom: ${({ theme }) => theme.spacing.two};
      &:empty {
        display: none;
      }
    }
  }
`;

export const ListItem = styled.li`
  b {
    color: red;
  }
`;

export const CenterOnMobile = styled.div`
  ${createMaxWidthMediaQuery("medium")} {
    text-align: center;
  }
`;

export const AddToCartLink = styled.button`
  text-align: left;
  cursor: pointer;
`;
