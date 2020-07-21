import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { createStructuredSelector } from "reselect";

import { selectIsCurtainOpen } from "../selectors/ui";
import actions from "../actions";
import { Curtain } from "../components/curtain";

const { hideDrawer } = actions.ui;

const dispatchers = {
  hideDrawer
};

export const curtainConnector = createStructuredSelector({
  visible: selectIsCurtainOpen
});

export const CurtainContainer = compose(
  connect(
    curtainConnector,
    dispatchers
  ),
  withHandlers({
    onClick: ({ hideDrawer }) => () => hideDrawer()
  })
)(Curtain);
