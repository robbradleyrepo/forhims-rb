import React, { useMemo, useState, useCallback, useRef } from "react";

import PropTypes from "prop-types";
import { useSpring, config } from "react-spring";
import { browserHistory } from "react-router";

import {
  Wrap,
  Question,
  SubTitle,
  Count,
  CountUl,
  Frame,
  Answers,
  AnswerFrame,
  Result,
  Results,
  QuestionArea
} from "./leadgen.question-multi-choice.style";
import { BUTTON_VARIANTS } from "../../../theme/buttons";
import { slugify } from "../../../utils/text";
import { breakpoints } from "../../../theme/breakpoints";
import { useMeasure } from "../../../utils/dom";

/**
 * This leadgen component shows a series of answers
 * and onClick reveals some sort of factoid related to the answer.
 *
 * n.b. None of the Aria here will be picked up because
 *      the underlying button component doesn't
 *      blind spread the passed in props
 *
 * @author Max Barry <mbarry@forhims.com>
 */
const QuestionMultiChoice = ({
  count,
  countTotal,
  question,
  subTitle,
  answers: _answers,
  color = "transparent"
}) => {
  // Keep track of the currently set question
  const [current, setCurrent] = useState(null);

  // Crete a measure on the most exterior component
  const [bind, bounds] = useMeasure();

  // Are we on mobile
  const isMobile = useMemo(() => bounds.width < breakpoints.small, [
    bounds.width
  ]);

  // Make a ref that will be attached to the exterior wrap
  const ref = useRef(null);

  // Add a "value" key to the answers array
  const answers = useMemo(
    () =>
      _answers.map((answer, i) => {
        const value = slugify(answer.label);
        return {
          ...answer,
          value,
          active: current === value,
          id: value.slice(0, 10) + i
        };
      }),
    [_answers, current]
  );

  // Create our animated styles for revealing resutls
  const spring = useSpring({
    progress: current === null ? 0 : 1,
    config: config.stiff
  });

  // // Create a secondary spring to reset the window scroll
  const [, setY, stopYScroll] = useSpring(() => ({ y: 0 }));

  // Function that will run when a user scrolls during an autoscroll
  const onAutoScrollInterrupt = useCallback(() => stopYScroll(), [stopYScroll]);

  // Callback to scroll to the next question
  const onNext = useCallback(
    () => {
      if (!ref.current || !requestAnimationFrame) return;
      // Get the distance from this component to the bottom of the screen
      const { bottom } = ref.current.getBoundingClientRect();
      // If somehow the bottom has already passed the window then return
      if (bottom <= 0) return;
      // Get the current scroll y
      const currentY = window.scrollY || document.documentElement.scrollTop;

      // Add a function on the wheel that allows the user to interrupt the autoscroll
      window.addEventListener("wheel", onAutoScrollInterrupt);

      // Pause a frame
      requestAnimationFrame(() => {
        // Update the Y value
        setY({
          y: currentY + bottom,
          reset: true,
          from: { y: window.scrollY },
          // When the animation is complete remove the event listener
          onRest: () =>
            window.removeEventListener("wheel", onAutoScrollInterrupt),
          // Each new generated value you want to scroll the window by that value
          onFrame: animation => window.scroll(0, animation.y)
        });
      });
    },
    [onAutoScrollInterrupt, setY]
  );

  return (
    <Wrap color={color} {...bind}>
      <Frame ref={ref}>
        <Counts count={count} countTotal={countTotal} />
        <Question>{question}</Question>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <QuestionArea role="tablist" aria-multiselectable="false">
          <Answers total={answers.length} hasActive={current !== null}>
            {answers.map((answer, i) => (
              <Answer
                key={"answer" + answer.id}
                i={i}
                onResult={setCurrent}
                onNext={onNext}
                answer={answer}
                current={current}
                spring={spring}
                isMobile={isMobile}
                total={answers.length}
              />
            ))}
          </Answers>
          <Results>
            {answers.map(answer => (
              <Result
                id={"result" + answer.id}
                key={"result" + answer.id}
                role="tabpanel"
                hidden={!answer.active}
                aria-labelledby={"button" + answer.id}
                style={{
                  opacity: spring.progress,
                  transform: spring.progress.to(
                    x => `translate3d(0, ${(1 - x) * -1 * 0.25 * 100}%, 0)`
                  )
                }}
              >
                {answer.result}
              </Result>
            ))}
          </Results>
        </QuestionArea>
      </Frame>
    </Wrap>
  );
};

const AnswerPropTypes = {
  label: PropTypes.string.isRequired,
  result: PropTypes.string,
  redirect: PropTypes.string
};

QuestionMultiChoice.propTypes = {
  question: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired,
  subTitle: PropTypes.string,
  color: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.shape(AnswerPropTypes)).isRequired
};

export default QuestionMultiChoice;

const Counts = ({ count, countTotal }) => {
  const countArr = new Array(countTotal).fill(undefined).map((_, i) => i + 1);

  return (
    <CountUl>
      {countArr.map(step => (
        <Count key={"count" + step} active={step === count}>
          {step}
        </Count>
      ))}
    </CountUl>
  );
};

Counts.propTypes = {
  count: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired
};

const Answer = ({
  answer,
  current,
  spring,
  total,
  i,
  isMobile,
  onNext,
  onResult
}) => {
  // We need a function that will interpolate a transform function
  // TODO: Cleanup this mess. Might be cleaner to just do a React Spring Transition
  const onInterpolateTransform = useMemo(
    () => {
      // The fixed margin constant
      const fixedMargin = 25;
      // Static constant equal to our button margins
      const marginPercent =
        current === null ? (isMobile ? 1 : Math.floor(i / 2)) * fixedMargin : 0;
      // Is this an even or odd button?
      const isEven = i % 2 === 0;
      // What is the translateX % for this answer
      let dx =
        total % 2 !== 0 && total - 1 === i
          ? 0
          : (isEven ? -1 : 1) * 50 + (isEven ? -1 : 1) * (fixedMargin * 0.5);
      // If it's mobile then x should be reset to 0
      dx = isMobile ? 0 : dx;
      // A function to calculate the Y value and adds the x to the translate3d string
      return y => {
        // Calculate where the y should be
        let dy = (1 - y) * Math.floor(i / 2) * 100 + marginPercent;
        // If it's mobile then the y calc is different
        dy = isMobile ? (1 - y) * 100 * i + marginPercent * i : dy;

        return `translate3d(${dx}%, ${dy}%, 0)`;
      };
    },
    [current, i, isMobile, total]
  );

  // What variant should the button display (varies based on active/inactive state)
  const variant = answer.active
    ? BUTTON_VARIANTS.ACCENT
    : BUTTON_VARIANTS.SECONDARY;

  // Should the button be disabled or not
  const disabled = !answer.active && current !== null;

  /**
   * When an answer is clicked there are one of two outcomes:
   * - The user is scrolled to the next section / question
   * - A "result" is revealed answering that question
   *
   * We check if there is a result for this answer
   * and then either show that or perform the onNext.
   *
   * Note that if an answer is currently active (and showing a result)
   * and is clicked again we want to reset to null.
   */
  const onClick = useCallback(
    () => {
      // If the answer has a result then show it
      if (answer.result) {
        onResult(answer.active ? null : answer.value);
      }
      // If the answer has a redirec then redirect
      else if (answer.redirect) {
        browserHistory.push({ pathname: answer.redirect });
      } else {
        // Otherwise progress to the next question
        onNext();
      }
    },
    [
      answer.result,
      answer.redirect,
      answer.active,
      answer.value,
      onResult,
      onNext
    ]
  );

  return (
    <AnswerFrame
      id={"button" + answer.id}
      role="tab"
      disabled={disabled}
      aria-controls={"result" + answer.id}
      aria-expanded={answer.active}
      onClick={onClick}
      variant={variant}
      style={{
        pointerEvents: answer.active || current === null ? "all" : "none",
        opacity: current === null || answer.active ? 1 : 0,
        transform: spring.progress.to(onInterpolateTransform)
      }}
    >
      {answer.label}
    </AnswerFrame>
  );
};

Answer.propTypes = {
  i: PropTypes.number.isRequired,
  onResult: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  current: PropTypes.string,
  spring: PropTypes.any.isRequired,
  total: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
  answer: PropTypes.shape({
    ...AnswerPropTypes,
    active: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};
