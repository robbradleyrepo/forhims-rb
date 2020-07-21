import PropTypes from "prop-types";
import React from "react";
import R from "ramda";

import { ActiveModalBodyScrollDisable, Overlay } from "./modal.root.style";
import { MODAL_COMPONENT_ID_TO_IMPL_MAP } from "../helpers/component-id-mapping";
import ReactFocusLock from "react-focus-lock";
import { ESCAPE } from "../../../../constants/Keys";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.overlayClickCloseModalHelper = this.overlayClickCloseModalHelper.bind(
      this
    );

    this.handleEscapeKeypress = this.handleEscapeKeypress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscapeKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscapeKeypress);
  }

  handleEscapeKeypress(event) {
    if (this.props.shouldCloseOnEscapeKeypress && event.keyCode === ESCAPE) {
      this.props.closeModal();
    }
  }

  overlayClickCloseModalHelper(event) {
    if (!this.props.shouldCloseOnClickOverlay) {
      return;
    }

    if (event.target === event.currentTarget) {
      this.props.closeModal();
      event.stopPropagation();
    }
  }

  render() {
    const {
      isOpen,
      componentId,
      propsToPass,
      backgroundColor,
      closeModal
    } = this.props;

    if (!isOpen) {
      return null;
    }

    const ComponentToRender = this.props.targetComponentKeyToObjectMap[
      componentId
    ];

    if (!ComponentToRender) {
      return null;
    }

    const componentProps = R.merge(
      {
        closeModal
      },
      propsToPass
    );

    return (
      <ReactFocusLock group="drawer" disabled={false} autoFocus={false}>
        <Overlay
          onClick={this.overlayClickCloseModalHelper}
          backgroundColor={backgroundColor}
        >
          <ComponentToRender {...componentProps} />
        </Overlay>
        <ActiveModalBodyScrollDisable />
      </ReactFocusLock>
    );
  }
}

Modal.defaultProps = {
  targetComponentKeyToObjectMap: MODAL_COMPONENT_ID_TO_IMPL_MAP
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  componentId: PropTypes.string,
  propsToPass: PropTypes.object.isRequired,
  targetComponentKeyToObjectMap: PropTypes.object.isRequired,
  shouldCloseOnClickOverlay: PropTypes.bool,
  shouldCloseOnEscapeKeypress: PropTypes.bool,
  backgroundColor: PropTypes.string,
  closeModal: PropTypes.func.isRequired
};

Modal.displayName = "Modal";

export default Modal;
