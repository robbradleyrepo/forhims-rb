import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { identity, prop, pipe } from "ramda";

import {
  ActionItemsWrapper,
  EmrActionWrapper,
  Header,
  RouterLink
} from "./action-items.style";
import { ACTION_ITEMS } from "./store/action-items.actions";

const goToEmrVisit = pipe(
  prop("id"),
  ACTION_ITEMS.requiredActionResumeVisit
);

const dispatchers = {
  goToEmrVisit
};

const ActionItemsComponent = ({ requiredActions, goToEmrVisit }) => (
  <ActionItemsWrapper data-testid="ActionItems">
    <Header>{"Action Items"}</Header>
    {R.map(requiredAction => {
      return (
        <div
          key={requiredAction.id}
          onClick={() => {
            goToEmrVisit(requiredAction);
          }}
        >
          <EmrActionWrapper
            description={`We cannot process order #${
              requiredAction.orderId
            } until you complete your medical consultation`}
            title="Pending Medical Consultation"
            testId={`RequiredAction-PendingVisit-${requiredAction.orderId}`}
          />
        </div>
      );
    }, requiredActions.visits)}
    {R.map(requiredAction => {
      return (
        <RouterLink key={requiredAction.id}>
          <EmrActionWrapper
            description={requiredAction.body}
            title={"Action Required"}
            testId={`RequiredAction-${requiredAction.id}`}
          />
        </RouterLink>
      );
    }, requiredActions.messages)}
  </ActionItemsWrapper>
);

ActionItemsComponent.propTypes = {
  showDrawer: PropTypes.func,
  requiredActions: PropTypes.object,
  goToEmrVisit: PropTypes.func
};

export const ActionItems = compose(
  connect(
    identity,
    dispatchers
  )
)(ActionItemsComponent);
