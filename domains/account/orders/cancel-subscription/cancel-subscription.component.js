import PropTypes from "prop-types";
import React from "react";
import { values, pipe } from "ramda";
import {
  QUESTIONNAIRE_PAGES,
  PAGE_DETAILS
} from "./cancel-subscription.constants";
import {
  pageToPageOptions,
  hasProductOptions,
  pageToTextInputFields
} from "./cancel-subscription.utils";
import { hasValue, shuffleArray } from "../../../../utils";
import {
  CancelSubscriptionModalWrapper,
  CloseModalButton
} from "./cancel-subscription.style";
import { CancelSubscriptionFormPage } from "./cancel-subscription-form-page";
import { CloseIcon } from "../../../../components/icons/close-icon";

export const CancelSubscription = ({
  currentPage,
  subscriptionProducts,
  handlePageSubmit,
  handleClickPrevious,
  pageTrail,
  handleCloseModal
}) => {
  const options = hasProductOptions(currentPage)
    ? subscriptionProducts
    : pipe(
        pageToPageOptions,
        // shuffle option order for analytics
        shuffleArray
      )(currentPage);
  const hasPreviousPage = hasValue(pageTrail);
  return (
    <CancelSubscriptionModalWrapper py={3} px={4}>
      <CloseModalButton onClick={handleCloseModal} aria-label="Close">
        <CloseIcon />
      </CloseModalButton>
      <CancelSubscriptionFormPage
        title={PAGE_DETAILS[currentPage].title}
        name={currentPage}
        options={options}
        handlePageSubmit={handlePageSubmit}
        handleClickPrevious={handleClickPrevious}
        hasPreviousPage={hasPreviousPage}
        textInputFields={pageToTextInputFields(currentPage)}
      />
    </CancelSubscriptionModalWrapper>
  );
};

CancelSubscription.propTypes = {
  handlePageSubmit: PropTypes.func,
  currentPage: PropTypes.oneOf(values(QUESTIONNAIRE_PAGES)),
  setCurrentPage: PropTypes.func,
  subscriptionProducts: PropTypes.array.isRequired,
  handleClickPrevious: PropTypes.func,
  pageTrail: PropTypes.array,
  handleCloseModal: PropTypes.func
};
