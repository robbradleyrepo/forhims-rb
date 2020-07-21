import { OPEN_MODAL } from "../../../constants/ActionTypes";

export const MODAL = {
  openModal: ({
    content,
    disableCloseOnClickOverlay,
    disableCloseOnEscapeKeypress,
    backgroundColor
  }) => {
    return {
      type: OPEN_MODAL,
      payload: {
        content,
        disableCloseOnClickOverlay: Boolean(disableCloseOnClickOverlay),
        disableCloseOnEscapeKeypress: Boolean(disableCloseOnEscapeKeypress),
        backgroundColor
      }
    };
  }
};
