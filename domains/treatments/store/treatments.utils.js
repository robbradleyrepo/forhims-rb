import { pathOr, propSatisfies, reject, either, isNil, isEmpty } from "ramda";

export const addProductNameToTreatmentById = products => ([id, url]) => ({
  id,
  url,
  name: pathOr("", [id, "title"], products)
});

export const removeTreatmentsWithoutMatchingProduct = reject(
  propSatisfies(either(isNil, isEmpty), "name")
);
