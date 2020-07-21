import styled, { css } from "styled-components";
import { divide } from "ramda";

import { combineRems } from "../../../../utils/rem";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
`;

const LINE_WIDTH_COLS = 3;
const LINE_OFFSET_COLS = 3.5;
const BLOCK_WIDTH_COLS = 7;

const InspectLineBase = css`
  background-color: ${({ theme }) => theme.colors.black};
  height: 1px;
  width: ${divide(LINE_WIDTH_COLS, BLOCK_WIDTH_COLS) * 100}%;
  top: ${({ twoLineTitle }) => (twoLineTitle ? "28%" : "50%")};
  transform: translateY(-50%);
  position: absolute;
  z-index: ${({ theme }) => theme.zIndexes.foreground};
`;

const InspectLineCircleBase = css`
  display: block;
  position: absolute;
  content: "";
  border-radius: 50%;
  border: 1px solid black;
  height: ${({ theme }) => theme.spacing.two};
  width: ${({ theme }) => theme.spacing.two};
  top: 50%;
  transform: translateY(-50%);
`;

export const InspectLineLeft = styled.div`
${InspectLineBase}
left: -${divide(LINE_OFFSET_COLS, BLOCK_WIDTH_COLS) * 100}%;
&:before {
  ${InspectLineCircleBase}
  left: -${({ theme }) => theme.spacing.two};
}
`;

export const InspectLineRight = styled.div`
${InspectLineBase}
right: -${divide(LINE_OFFSET_COLS, BLOCK_WIDTH_COLS) * 100}%;
&:after {
  position: absolute;
  ${InspectLineCircleBase}
  right: -${({ theme }) => theme.spacing.two};
}
`;

export const DescriptionWrapper = styled.div`
  padding-bottom: ${({ theme }) =>
    combineRems(theme.spacing.two, theme.spacing.three)};
`;

export const HeaderWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) =>
    combineRems(theme.spacing.two, theme.spacing.three)};
`;
