import { path } from "ramda";
import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

import { Headline1, Headline4 } from "../../../components/fonts";
import { BrandButtonWithVariantStyles } from "../../../components/button/button.style";
import { createMinWidthMediaQuery } from "../../../utils/breakpoints";

export const Wrap = styled.div`
  background-color: ${({ color }) => color};
`;

export const Frame = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  // todo: make this a ref from the theme
  padding: 180px ${({ theme }) => theme.spacing.three};

  max-width: 960px;
`;

const countDimensionsSelector = path(["theme", "spacing", "four"]);
const partsSpacingSelector = path(["theme", "spacing", "four"]);

export const CountUl = styled.ul`
  padding: 0;
  margin: 0;
  display: inline-grid;

  margin-bottom: ${partsSpacingSelector};
  grid-gap: ${({ theme }) => theme.spacing.two};

  grid-template-columns: repeat(5, min-content);
`;

export const Count = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${countDimensionsSelector};
  width: ${countDimensionsSelector};

  color: ${({ active }) => (active ? "white" : "black")};
  background-color: ${({ active }) => (active ? "black" : "transparent")};
`;

export const Question = Headline1;

export const SubTitle = Headline4;

export const Answers = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-block;
  max-width: 620px;

  margin-top: ${partsSpacingSelector};
  // todo: this needs to use the actual button height value
  height: ${({ total, hasActive }) => (hasActive ? "auto" : total * 56)}px;

  ${createMinWidthMediaQuery("small")} {
    height: ${({ total, hasActive }) =>
      hasActive ? "auto" : Math.ceil(total / 2) * 56}px;
  }
`;

export const AnswerFrame = styled(animated.button)`
  ${BrandButtonWithVariantStyles};

  cursor: pointer;

  padding: ${({ theme }) => `0 ${theme.spacing.two}`};

  &:not(:first-of-type) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const resultPadding = 1.5;

export const Results = styled.div`
  z-index: -1;
  position: relative;

  transform: translate3d(0, -${resultPadding}rem, 0);
`;

const resultDownwardNudge = keyframes`
  0% {
    transform: translate3d(-50%, 0%, 0);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, 200%, 0);
    opacity: 0;
  }
`;

export const Result = styled(animated.div)`
  padding: ${resultPadding}rem;
  padding-top: ${resultPadding * 1.5}rem;

  background-color: ${({ theme }) => theme.colors.canvas.primary};

  &::after {
    width: 0;
    height: 0;
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-color: transparent;
    border-left-width: 50px;
    border-right-width: 50px;
    border-top-width: 20px;

    animation: ${resultDownwardNudge} 2200ms ease-out infinite;

    border-top-color: ${({ theme }) => theme.colors.ui.shadow};
  }

  &:not([hidden])::after {
    content: "";
  }
`;

export const QuestionArea = styled.div`
  z-index: 0;
  position: relative;
`;
