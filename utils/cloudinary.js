import { pipe } from "ramda";

import { cloudinary } from "../config";

const { base, directory, user, imageAttributes, subdirectory } = cloudinary;

const parseId = size => id => {
  if (id && typeof id === "string") {
    return id.replace(/{imageSize}/gi, size);
  }
  return id;
};

export const createCloudinaryUrl = image => {
  return `${base}/${user}/${directory}/${imageAttributes}/${subdirectory}/${image}`;
};

export const createCloudinaryMobileUrl = id =>
  pipe(
    parseId("m"),
    createCloudinaryUrl
  )(id);

export const createCloudinaryDesktopUrl = id =>
  pipe(
    parseId("d"),
    createCloudinaryUrl
  )(id);
