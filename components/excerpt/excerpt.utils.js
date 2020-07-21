import { pipe } from "ramda";

import { shortenString, stripMarkdown } from "../../utils/text";

const shorten = limit => string => shortenString({ string, limit });

export const createExcerptFromMarkdown = (string, limit) =>
  pipe(
    stripMarkdown,
    shorten(limit)
  )(string);
