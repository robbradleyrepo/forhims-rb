import { not, path, pathOr } from "ramda";
import { createSelector } from "reselect";

const CONTENT_PATH = ["modal", "content"];

export const isModalOpen = pathOr(false, ["modal", "isOpen"]);

export const selectModalShouldCloseByClickingOnBackgroundOverlay = createSelector(
  state => pathOr(false, ["modal", "disableCloseOnClickOverlay"])(state),
  not
);

export const selectModalShouldCloseByPressingEscape = createSelector(
  state => pathOr(false, ["modal", "disableCloseOnEscapeKeypress"])(state),
  not
);

export const selectModalBackgroundColor = pathOr(null, [
  "modal",
  "backgroundColor"
]);

export const selectModalComponentId = path([...CONTENT_PATH, "id"]);

export const selectModalInnerComponentPropsToPass = pathOr({}, [
  ...CONTENT_PATH,
  "props"
]);
