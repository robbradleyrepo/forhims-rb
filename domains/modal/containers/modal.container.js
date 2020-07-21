import { connect } from "react-redux";

import actions from "../../../actions";
import Modal from "../components/root/modal.root.component";
import { createStructuredSelector } from "reselect";
import {
  isModalOpen,
  selectModalBackgroundColor,
  selectModalComponentId,
  selectModalInnerComponentPropsToPass,
  selectModalShouldCloseByClickingOnBackgroundOverlay,
  selectModalShouldCloseByPressingEscape
} from "../../../selectors/modal";

const modalCloseInteractionSelectors = createStructuredSelector({
  isOpen: isModalOpen,
  componentId: selectModalComponentId,
  propsToPass: selectModalInnerComponentPropsToPass,
  shouldCloseOnClickOverlay: selectModalShouldCloseByClickingOnBackgroundOverlay,
  shouldCloseOnEscapeKeypress: selectModalShouldCloseByPressingEscape,
  backgroundColor: selectModalBackgroundColor
});

export const ModalContainer = connect(
  modalCloseInteractionSelectors,
  {
    ...actions.global
  }
)(Modal);

ModalContainer.defaultProps = {};

ModalContainer.propTypes = {};

ModalContainer.displayName = "ModalContainer";
