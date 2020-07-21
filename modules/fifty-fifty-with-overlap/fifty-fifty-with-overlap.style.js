import styled, { css } from "styled-components";
import { createMinWidthMediaQuery } from "../../utils/breakpoints";

/**
 * This provides margins/alignment for the image size of a 50/50 on mobile devices
 */
export const NotCard = styled.div`
  ${({
    theme: {
      grid: { gutter, column }
    }
  }) => css`
    margin: ${gutter};

    ${createMinWidthMediaQuery("small")} {
      margin: ${column};
    }

    ${createMinWidthMediaQuery("medium")} {
      margin: 0;
    }
  `};
`;

export const Card = styled.div`
  background-color: #fff;

  /* gutters & columns when content is stacked */
  ${({
    theme: {
      grid: { gutter, column }
    }
  }) => css`
    padding: 8vw ${gutter} 8vw ${gutter};

    /* some of these values will be overwritten by selectors in the Side component on large screens & up */
    ${createMinWidthMediaQuery("small")} {
      padding: 8vw ${column} 8vw ${column};
    }
  `};
`;

export const Side = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 50%;

  /** add small gap between the Card and NotCard if they don't overlap */
  ${props =>
    !props.overlap &&
    !props.isOnTop &&
    css`
      width: 49%;
      ${props.side === "left"
        ? css`
            margin-right: 1%;
          `
        : css`
            margin-left: 1%;
          `};
    `};

  ${props =>
    props.overlap &&
    !props.isOnTop &&
    props.side === "left" &&
    css`
      /* modify Card to make it appear under the other side of the Section (usually an image) */
      > ${Card} {
        width: 115%;
        padding-right: 25%;
      }
    `};

  ${props =>
    props.overlap &&
    !props.isOnTop &&
    props.side === "right" &&
    css`
      /* modify Card to make it appear under the other side of the Section (usually an image) */
      > ${Card} {
        width: 115%;
        padding-left: 25%;
        margin-left: -15%;
      }
    `};

  ${props =>
    props.overlap &&
    props.isOnTop &&
    props.side === "left" &&
    css`
      /* raise the content that isn't in the card above the card if needed */
      > ${NotCard} {
        position: relative;
      }
    `};
`;
