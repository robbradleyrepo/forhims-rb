import {
  pathOr,
  pipe,
  prop,
  equals,
  find,
  keys,
  filter,
  replace,
  isEmpty,
  join
} from "ramda";
import { PAGE_DETAILS } from "./cancel-subscription.constants";
import { hasValue } from "../../../../utils";

export const hasProductOptions = page =>
  pathOr(false, [page, "productOptions"], PAGE_DETAILS);

export const pageToPageOptions = page =>
  pathOr([], [page, "options"], PAGE_DETAILS);

export const pageToTextInputFields = page =>
  pathOr([], [page, "textInputFields"], PAGE_DETAILS);

export const findNextPage = (form, currentPage) => {
  const options = pageToPageOptions(currentPage);
  return hasValue(options)
    ? find(
        pipe(
          prop("value"),
          equals(form[currentPage])
        ),
        options
      ).nextPage
    : null;
};

export const createAnswerString = (form, currentPage) => {
  const formKeysToInclude = pipe(
    keys,
    filter(formKey => formKey.startsWith(currentPage))
  )(form);
  const answers = formKeysToInclude.map(key => {
    const subFieldName = replace(`${currentPage}`, "", key);
    const isMainKey = isEmpty(subFieldName);
    const withConnectorRemoved = replace("-", "", subFieldName);
    return `${withConnectorRemoved}${isMainKey ? "" : ": "}${form[key]}`;
  });
  return join(", ", answers);
};
