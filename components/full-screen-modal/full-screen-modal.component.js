import React from "react";
import PropTypes from "prop-types";
import ReactFocusLock from "react-focus-lock";

import {
  Background,
  CloseButton,
  ContentBlock,
  ScrollingArea,
  ScrollBlocker
} from "./full-screen-modal.style";
import { CloseIcon } from "../icons";

export const FullScreenModal = ({ handleClose, children }) => (
  <Background>
    <ScrollBlocker />
    <ReactFocusLock>
      <CloseButton onClick={handleClose}>
        <CloseIcon height={24} />
      </CloseButton>
      <ScrollingArea>
        <ContentBlock>{children}</ContentBlock>
      </ScrollingArea>
    </ReactFocusLock>
  </Background>
);

FullScreenModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  handleClose: PropTypes.func.isRequired
};
