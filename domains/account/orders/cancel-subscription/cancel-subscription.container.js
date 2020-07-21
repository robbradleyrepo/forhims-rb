import { connect } from "react-redux";
import { pathOr, append, last, init } from "ramda";
import { hasValue } from "../../../../utils";
import {
  QUESTIONNAIRE_PAGES,
  PAGE_DETAILS
} from "./cancel-subscription.constants";
import { CancelSubscription } from "./cancel-subscription.component";
import { reset } from "redux-form";

import {
  withHandlers,
  withState,
  compose,
  withProps,
  lifecycle
} from "recompose";
import { cancelSubscriptionConnector } from "./cancel-subscription.selectors";
import { SUBSCRIPTION_ACTION_CREATORS } from "../orders.actions";
import { findNextPage, createAnswerString } from "./cancel-subscription.utils";

const dispatchers = {
  cancelSubscription: SUBSCRIPTION_ACTION_CREATORS.cancel,
  resetForm: reset
};

export const addHandlers = withHandlers({
  handlePageSubmit: ({
    currentPage,
    setCurrentPage,
    pageTrail,
    updatePageTrail,
    cancelSubscription,
    subscription,
    closeModal,
    resetForm
  }) => form => {
    $GTM.subscriptionCancelAnswerQuestion.trigger({
      subscriptionId: subscription.orderId,
      question: PAGE_DETAILS[currentPage].title,
      answer: createAnswerString(form, currentPage)
    });
    const nextPage = findNextPage(form, currentPage);
    if (hasValue(nextPage)) {
      setCurrentPage(nextPage);
      updatePageTrail(append(currentPage, pageTrail));
      $GTM.subscriptionCancelViewQuestion.trigger({
        subscriptionId: subscription.orderId,
        question: PAGE_DETAILS[nextPage].title
      });
    } else {
      cancelSubscription({ orderId: subscription.orderId });
      closeModal();
      resetForm("cancel-subscription");
    }
  },
  handleClickPrevious: ({
    pageTrail,
    updatePageTrail,
    setCurrentPage
  }) => () => {
    const previousPage = last(pageTrail);
    setCurrentPage(previousPage);
    updatePageTrail(init(pageTrail));
  },
  handleCloseModal: ({ closeModal, resetForm }) => () => {
    closeModal();
    resetForm("cancel-subscription");
  }
});

export const addCurrentPageState = withState(
  "currentPage",
  "setCurrentPage",
  QUESTIONNAIRE_PAGES.REASON_FOR_CANCELLATION
);

export const addPageTrail = withState("pageTrail", "updatePageTrail", []);

export const addProps = withProps(({ productsById, subscription }) => ({
  subscriptionProducts: subscription.productIds.map(id => ({
    label: pathOr(id, [id, "title"], productsById),
    value: id
  }))
}));

const withInitialGTMEvent = lifecycle({
  componentDidMount() {
    const { subscription } = this.props;
    $GTM.subscriptionCancelViewQuestion.trigger({
      subscriptionId: subscription.orderId,
      question: PAGE_DETAILS[QUESTIONNAIRE_PAGES.REASON_FOR_CANCELLATION].title
    });
  }
});

export const CancelSubscriptionContainer = compose(
  connect(
    cancelSubscriptionConnector,
    dispatchers
  ),
  addCurrentPageState,
  addPageTrail,
  addHandlers,
  addProps,
  withInitialGTMEvent
)(CancelSubscription);
