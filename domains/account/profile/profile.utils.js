import { withState } from "recompose";

export const withEditingState = withState(
  "isEditing",
  "toggleIsEditing",
  false
);
