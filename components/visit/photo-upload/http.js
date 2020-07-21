import promiseApi from "../../../utils/api";
import Uploader from "./uploader";

function upload(params) {
  let uploader = Uploader(params);
  return uploader.run();
}

function markVisitAsAnswered(visitId) {
  return promiseApi.udpateVisitById({ status: "answered" }, visitId);
}

function updateMessage(message) {
  return promiseApi.updateMessageById({ actionRequired: false }, message.id);
}

function fetchImages(visit) {
  return promiseApi.findAllPhotosByVisitId(visit.id);
}

module.exports = {
  fetchImages,
  markVisitAsAnswered,
  updateMessage,
  upload
};
