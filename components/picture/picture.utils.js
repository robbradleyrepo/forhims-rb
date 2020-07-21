import { map, values, pipe, findIndex, equals } from "ramda";

import { isClient } from "../../utils";

export const convertMediaQueryToAttribute = query =>
  query ? query.replace("@media ", "") : "";

const isMediaQueryActive = query =>
  isClient() ? window.matchMedia(query).matches : false;

export const findActiveQueryIndex = pipe(
  values,
  map(isMediaQueryActive),
  findIndex(equals(true))
);
