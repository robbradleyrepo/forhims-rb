"use strict";

import actions from "../actions";
import debounce from "lodash.debounce";
import Gender from "../components/visit/gender-alt";
import PropTypes from "prop-types";
import R from "ramda";
import React from "react";
import selectors from "../selectors";
import Visit from "../components/visit";
import styled from "styled-components";
import { connect } from "react-redux";
import { Block } from "../components/block";
import { DrawerContentWrapper } from "../components/drawer/drawer.style";
import { browserHistory } from "react-router";

/**
 * @module VisitContainer
 */

export const VisitDrawerWrapper = styled(DrawerContentWrapper)`
  background-color: ${({ theme }) => theme.colors.canvas.primaryLight};
  padding-top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  position: relative;
`;

class VisitContainer extends React.Component {
  mainDrawerWrapperContainerRef = React.createRef();

  constructor(props) {
    super(props);
    // if the user has already consented , they must have already
    // gone past the gender page
    this.state = {
      offset: 0,
      isGenderVerified: props.visit && props.visit.consented
    };
    this.persist = debounce(props.updateVisit, 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visit) {
      return;
    }

    this.maybeRemoveFollowupQuestions(this.props, nextProps);
  }

  maybeRemoveFollowupQuestions(prevProps, nextProps) {
    if (
      !prevProps.tuples ||
      !nextProps.tuples ||
      R.equals(nextProps.tuples, this.props.tuples)
    ) {
      return;
    }

    let qids1 = R.map(R.path(["question", "id"]), prevProps.tuples);
    let qids2 = R.map(R.path(["question", "id"]), nextProps.tuples);

    if (R.difference(qids1, qids2).length) {
      this.removeAnswer(R.difference(qids1, qids2));
    }
  }

  resetGender() {
    this.setState({ gender: null });
  }

  setGender(gender) {
    this.setState({ gender });
  }

  confirmGender(gender) {
    $GTM.updateGender.trigger({ gender });
    this.setState({ isGenderVerified: true });
  }

  next() {
    this.setState({
      offset:
        this.state.offset + 1 === this.props.tuples.length
          ? this.state.offset
          : this.state.offset + 1
    });
  }

  prev() {
    this.setState({
      offset: this.state.offset === 0 ? 0 : this.state.offset - 1
    });
  }

  confirmOrder() {
    this.props.submitEmrForm();
  }

  setAnswer(payload) {
    $S.dispatch(actions.emr.setAnswer.success(payload));
    this.persist();
  }

  removeAnswer(payload) {
    const qids = R.map(R.toString, payload);
    $S.dispatch(actions.emr.removeAnswer.success(qids));
  }

  closeEmrForm() {
    this.props.hideDrawer();
    browserHistory.push({
      pathname: "/orders/confirm",
      query: { id: this.props.visit.orderId }
    });
  }

  getBody() {
    if (this.state.isGenderVerified) {
      return (
        <Visit
          {...this.props}
          closeEmrForm={this.closeEmrForm.bind(this)}
          confirmOrder={this.confirmOrder.bind(this)}
          containerRef={this.mainDrawerWrapperContainerRef}
          index={this.props.start + this.state.offset}
          next={this.next.bind(this)}
          percentage={this.props.percentageCompleted}
          prev={this.prev.bind(this)}
          removeAnswer={this.removeAnswer.bind(this)}
          setAnswer={this.setAnswer.bind(this)}
        />
      );
    }
    return (
      <Gender
        closeEmrForm={this.props.hideDrawer}
        confirmGender={this.confirmGender.bind(this)}
        gender={this.state.gender}
        resetGender={this.resetGender.bind(this)}
        setGender={this.setGender.bind(this)}
      />
    );
  }

  render() {
    const testId = this.props.visit
      ? `EmrVisit-${this.props.visit.orderId}`
      : "EmrVisit";
    return (
      <VisitDrawerWrapper
        data-testid={testId}
        ref={this.mainDrawerWrapperContainerRef}
      >
        <Block display={"flex"} justifyContent={"center"}>
          {this.getBody()}
        </Block>
      </VisitDrawerWrapper>
    );
  }
}

VisitContainer.defaultProps = {};

VisitContainer.propTypes = {
  hideEmrForm: PropTypes.func,
  hideRightDrawer: PropTypes.func,
  percentageCompleted: PropTypes.number,
  setEmrClosingFlag: PropTypes.func,
  start: PropTypes.number,
  tuples: PropTypes.array,
  updateVisit: PropTypes.func,
  visit: PropTypes.object
};

VisitContainer.displayName = "VisitContainer";

export default connect(
  state => {
    // TOOD: uncomment when component is all wired up.
    // let visit = state.visits.active;

    if (!state.visits.active || !state.visit.questions) {
      return {};
    }

    let tuples = selectors.visit.getQuestionAnswerTuples(state);
    let lastVisibleQuestionIndex = getVisibleIndex(tuples);
    let questionsWithAnswers = R.filter(x => x.answer, tuples);
    // let address = selectors.order.getAddressByOrderId(visit.orderId, state);
    let percentageCompleted = getPercentageComplete(
      questionsWithAnswers,
      tuples
    );

    return {
      // address,
      emrVisitType: selectors.visit.getTreatmentType(state),
      lastVisibleQuestionIndex,
      me: state.me,
      percentageCompleted,
      start: getFirstQuetionId(state),
      tuples: tuples,
      visit: state.visit
    };
  },
  {
    ...actions.drawers,
    ...actions.emr,
    ...actions.global,
    ...actions.order,
    ...actions.user,
    ...actions.ui
  }
)(VisitContainer);

const getPercentageComplete = (answeredQuestions, tuples) => {
  return Math.ceil((answeredQuestions.length / tuples.length) * 100);
};

const getVisibleIndex = tuples => {
  let visibleTuple = R.find(x => !x.answer)(tuples);

  return visibleTuple
    ? visibleTuple.question.index
    : tuples[tuples.length - 1].question.index;
};

const getFirstQuetionId = R.compose(
  R.head,
  R.path(["visit", "questions"])
);
