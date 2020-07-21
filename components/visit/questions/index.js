"use strict";

import BloodPressure from "./blood-pressure";
import { Button } from "../../button";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import TupleContainer from "../../../containers/TupleContainer";
import { ManagedCheckboxQuestion } from "./question-card/managed/question-card-managed-checkbox.component";
import { ManagedRadioQuestion } from "./question-card/managed/question-card-managed-radio.component";
import {
  NextQuestionButtonWrapper,
  QuestionsIndexContainer
} from "./index.style";
import { Grid } from "../../layout/grid";
import { questionBubbleEndAnchor, textareaEntry } from "./question-card/base";
import { ManagedTextArea } from "./question-card/managed/question-card-managed-textarea.component";

/*
  todo ? Have an alternative component. Might want to use that once we have
  a bloodpressure mock to test with.
*/
const QUESTION_TYPES = {
  checkbox: ManagedCheckboxQuestion,
  radio: ManagedRadioQuestion,
  text: ManagedTextArea,
  textarea: ManagedTextArea,
  bloodPressure: BloodPressure
};

const AUTOSCROLL_MARGIN = 40;

const findQuestionTitle = (tuples, index) =>
  R.compose(
    R.propOr("", "title"),
    R.find(R.propEq("index", index)),
    R.pluck("question")
  )(tuples);

/**
 * @module Questions
 */

class Questions extends React.Component {
  questionBubbleRef = React.createRef();
  mainContainerRef = React.createRef();
  secondLastQuestionRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      showAutoScrollButton: false
    };

    this.computeNextQuestionButtonVisibility = this.computeNextQuestionButtonVisibility.bind(
      this
    );
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      this.computeNextQuestionButtonVisibility,
      true
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.computeNextQuestionButtonVisibility,
      true
    );
  }

  // was componentWillReceiveProps.
  // todo : componentWillReceiveProps is deprecated, might want to use a selector/some other memoization technique.
  componentDidUpdate(prevProps) {
    const { lastVisibleQuestionIndex } = prevProps;

    if (
      lastVisibleQuestionIndex &&
      lastVisibleQuestionIndex !== this.props.lastVisibleQuestionIndex
    ) {
      this.setState(
        {
          showAutoScrollButton: true
        },
        () => {
          this.computeNextQuestionButtonVisibilityFirstTime();
        }
      );

      try {
        $GTM.navigateVisit.trigger({
          percentage: prevProps.percentageCompleted,
          page: findQuestionTitle(prevProps.tuples, lastVisibleQuestionIndex)
        });
      } catch (e) {}
    }
  }

  getViewportBubblePositionDifference() {
    try {
      const bubbleBottomPos = this.questionBubbleRef.current
        .querySelector(`.${questionBubbleEndAnchor}`)
        .getBoundingClientRect().bottom;

      return bubbleBottomPos - window.innerHeight;
    } catch (e) {
      return 1;
    }
  }

  computeNextQuestionButtonVisibilityFirstTime() {
    const diff = this.getViewportBubblePositionDifference();

    if (diff > 0) {
      this.scrollUpIfSecondToLastTextQuestionIsObstructed();
    }

    this.computeNextQuestionButtonVisibility();
  }

  computeNextQuestionButtonVisibility() {
    if (!this.state.showAutoScrollButton) {
      return;
    }

    const diff = this.getViewportBubblePositionDifference();

    if (diff <= 0) {
      this.setState({
        showAutoScrollButton: false
      });
    }
  }

  scrollUpIfSecondToLastTextQuestionIsObstructed() {
    try {
      const questionRect = this.secondLastQuestionRef.current
        .querySelector(`.${textareaEntry}`)
        .getBoundingClientRect();

      const buttonRect = this.mainContainerRef.current
        .querySelector(`button`)
        .getBoundingClientRect();

      const pixelsToScroll =
        questionRect.y + questionRect.height - buttonRect.y;

      const wrapperRef = this.props.containerRef.current;

      wrapperRef.scrollTop += pixelsToScroll;
    } catch (e) {
      // pass.
    }
  }

  scrollToNewQuestion() {
    const diff = this.getViewportBubblePositionDifference();

    const wrapperRef = this.props.containerRef.current;

    wrapperRef.scrollTop = wrapperRef.scrollTop + diff + AUTOSCROLL_MARGIN;
  }

  goToNextPage() {
    $GTM.navigateVisit.trigger({
      percentage: this.props.percentageCompleted,
      page: "Order Confirmation"
    });
    this.props.next();
  }

  render() {
    let { lastVisibleQuestionIndex, tuples } = this.props;

    const questionTypeAndIds = R.compose(
      R.map(tuple => ({ type: tuple.question.type, id: tuple.question.id })),
      R.takeWhile(tuple => tuple.question.index <= lastVisibleQuestionIndex)
    )(this.props.tuples);

    const mainContent = R.map(tuple => {
      if (tuple.question.index > lastVisibleQuestionIndex) {
        return null;
      }

      let bubbleScrollRefObject = {};
      let secondLastQuestionRefObject = {};

      if (tuple.question.index === lastVisibleQuestionIndex) {
        bubbleScrollRefObject = { ref: this.questionBubbleRef };
      } else if (
        questionTypeAndIds.length >= 2 &&
        tuple.question.id ===
          questionTypeAndIds[questionTypeAndIds.length - 2].id
      ) {
        secondLastQuestionRefObject = { ref: this.secondLastQuestionRef };
      }

      return (
        <div
          key={tuple.question.id}
          {...bubbleScrollRefObject}
          {...secondLastQuestionRefObject}
        >
          <TupleContainer
            type={tuple.question.type}
            Tuple={QUESTION_TYPES[tuple.question.type]}
            tupleProps={R.merge(this.props, {
              ...tuple,
              key: tuple.question.index,
              step: R.findIndex(
                x => x.question.index === tuple.question.index,
                tuples
              )
            })}
          />
        </div>
      );
    }, this.props.tuples);

    return (
      <QuestionsIndexContainer ref={this.mainContainerRef}>
        <div>{mainContent}</div>
        {this.state.showAutoScrollButton && (
          <NextQuestionButtonWrapper>
            <div>
              <Grid
                item
                xs={13}
                xsOffset={0}
                sm={14}
                smOffset={1}
                md={8}
                mdOffset={12}
              >
                <Button
                  fullWidth
                  label="Next Question"
                  onClick={this.scrollToNewQuestion.bind(this)}
                />
                <div />
              </Grid>
            </div>
          </NextQuestionButtonWrapper>
        )}
        {this.props.percentageCompleted === 100 && (
          <NextQuestionButtonWrapper>
            <div>
              <Grid
                item
                xs={13}
                xsOffset={0}
                sm={14}
                smOffset={1}
                md={8}
                mdOffset={12}
              >
                <Button
                  fullWidth={true}
                  type="black"
                  onClick={this.goToNextPage.bind(this)}
                  label="Continue"
                />
                <div />
              </Grid>
            </div>
          </NextQuestionButtonWrapper>
        )}
      </QuestionsIndexContainer>
    );
  }
}

Questions.defaultProps = {};

Questions.propTypes = {
  index: PropTypes.number,
  lastVisibleQuestionIndex: PropTypes.number,
  percentageCompleted: PropTypes.number,
  next: PropTypes.func,
  tuples: PropTypes.array,
  visit: PropTypes.object,
  containerRef: PropTypes.object
};

Questions.displayName = "Questions";

export default Questions;
