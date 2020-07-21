"use strict";

import R from "ramda";
import b64toBlob from "b64-to-blob";

const SUPPORTED_EXT = ["image/jpeg", "image/png"];

const blobToBase64 = blob => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const base64ToBlob = (b64, mimeType) => {
  return b64toBlob(b64, mimeType);
};

function isSupportedMimeType(blob) {
  return R.contains(blob.mimeType, SUPPORTED_EXT);
}

const supportTypesList = R.compose(
  R.join(", "),
  R.map(type => R.last(R.split("/", type)))
);

module.exports = {
  blobToBase64,
  base64ToBlob,
  isSupportedMimeType,
  supportedFormats: supportTypesList(SUPPORTED_EXT)
};
