"use strict";

import promiseApi from "../../../utils/api";
import R from "ramda";
import { blobToBase64 } from "../../../utils/image";
import { fileSize } from "../../../utils";

// params :: Object
function Uploader(params) {
  this.params = params;
}

Uploader.prototype.compress = function() {
  let that = this;
  let {
    uploadQuality,
    image: { blob }
  } = this.params;

  $GTM.compressPhoto.trigger({
    size: fileSize(blob.size),
    type: blob.type
  });

  return new Promise((resolve, reject) => {
    let ImageCompressor = require("image-compressor.js/dist/image-compressor.common.js");
    new ImageCompressor(blob, {
      quality: uploadQuality,
      success: compressedBlob => {
        $GTM.compressPhoto.success({
          size: fileSize(compressedBlob.size),
          type: compressedBlob.type
        });
        that
          .upload(compressedBlob)
          .then(resolve)
          .catch(reject);
      },
      error: error => {
        console.error(error);
        $GTM.compressPhoto.failure({ error });
        that
          .upload(blob)
          .then(resolve)
          .catch(reject);
      }
    });
  });
};

Uploader.prototype.getPayload = function(base64) {
  let { visit, photoType } = this.params;

  return R.merge(
    { data: base64, visitId: visit.id },
    photoType ? { photoType: photoType } : {}
  );
};

Uploader.prototype.upload = function(blob) {
  let that = this;
  let { reUpload, photoId } = this.params;

  return new Promise((resolve, reject) => {
    console.log("Uploading...");
    blobToBase64(blob)
      .then(that.getPayload.bind(that))
      .then(
        payload =>
          reUpload
            ? promiseApi.updatePhotoById(payload, photoId)
            : promiseApi.uploadPhoto(payload)
      )
      .then(_ => !console.log("Upload successful.") && resolve())
      .catch(reject);
  });
};

Uploader.prototype.run = function() {
  return this.params.compressionEnabled
    ? this.compress(this.params)
    : this.upload(this.params.image.blob);
};

module.exports = params => new Uploader(params);
