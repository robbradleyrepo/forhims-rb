import PropTypes from "prop-types";
import { ListWithTitleTypes } from "./list-with-title.types";

export const ColumnOfListsWithTitlesTypes = {
  listsWithTitles: PropTypes.arrayOf(PropTypes.shape(ListWithTitleTypes))
    .isRequired
};
