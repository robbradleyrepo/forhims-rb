"use strict";

import config from "../config";
import http from "./http";
import R from "ramda";

// Constants
// ----

const { url, env, paths } = config.api;
const { yotpo } = config;

const BASE_URL = `${url}/${env}`;

const HEADERS = {
  representation: { Prefer: "return=representation" },
  minimal: { Prefer: "return=minimal" }
};

// Helper functions
// ----

const imagesToLookup = R.compose(
  R.indexBy(R.prop("photoType")),
  R.map(R.pick(["id", "photoType"]))
);

const uploadUrl = () => `https://${$S.getState().config.apiHost}`;

const getConfig = () =>
  http.get({
    headers: HEADERS.representation,
    url: `${BASE_URL}/${paths.config}`
  });

function createRoutine(asyncFn, gtmFn) {
  return function() {
    let args = Array.prototype.slice.call(arguments);
    let gtm = gtmFn && $GTM[gtmFn];
    return new Promise((resolve, reject) => {
      gtm && gtm.trigger({ arguments: args });
      asyncFn
        .apply(null, args)
        .then(resp => {
          gtm && gtm.success();
          resolve(resp);
        })
        .catch(error => {
          gtm && gtm.failure({ error });
          reject(error);
        });
    });
  };
}

// API Calls
// ----

const user = {
  update: createRoutine(payload => {
    return http.patch({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.me}`
    });
  }, "updateUser"),
  register: createRoutine(payload => {
    return http.post({
      authorize: false,
      payload: payload,
      url: `${BASE_URL}/${paths.register}`
    });
  }, "signUp"),
  maybeRegisterPatient: createRoutine(() => {
    return new Promise((resolve, reject) => {
      http
        .post({
          authorize: true,
          url: `${BASE_URL}/${paths.maybeRegisterPatient}`
        })
        .then(processPatientRegistration)
        .then(resolve)
        .catch(reject);
    });
  }, "registerPatient")
};

const order = {
  updateById: (payload, orderId) => {
    return http.patch({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.orders}?id=eq.${orderId}`
    });
  },
  create: () => {
    return http.post({
      authorize: true,
      payload: {},
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.orders}`
    });
  },
  updateItem: payload => {
    return http.post({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.orderItem}`
    });
  },
  calculateTotals: payload => {
    return http.post({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.calcTotals}`
    });
  }
};

const coupon = {
  findByLabel: couponCode => {
    return http.get({
      authorize: false,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.coupons}?id=eq.${couponCode}`
    });
  }
};

const address = {
  create: payload => {
    return new Promise((resolve, reject) => {
      http
        .post({
          authorize: true,
          payload: payload,
          headers: HEADERS.representation,
          url: `${BASE_URL}/${paths.address}`
        })
        .then(
          R.compose(
            resolve,
            R.head
          )
        )
        .catch(reject);
    });
  },
  updateById: (payload, addressId) => {
    return http.patch({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.address}?id=eq.${addressId}`
    });
  },
  validate: payload => {
    return http.post({
      authorize: false,
      payload: payload,
      url: "https://api.forhims.co.uk/tools/address/validate-shippo"
    });
  }
};

const subscription = {
  updateById: (payload, subscriptionId) => {
    return http.patch({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.subscriptions}?order_id=eq.${subscriptionId}`
    });
  },
  calcTotal: payload => {
    return http.post({
      authorize: true,
      payload: payload,
      headers: HEADERS.representation,
      url: `${BASE_URL}/${paths.calcCostOfItems}`
    });
  }
};

// payload :: { data, visitId, photoType}
// data :: base64EncodedImage
// visitId :: string
// photoType :: Enum
function uploadPhoto(payload) {
  return http.post({
    authorize: true,
    payload: payload,
    headers: HEADERS.minimal,
    url: `${uploadUrl()}/${paths.photos}`
  });
}

// payload :: { data, visitId, photoType}
// data :: base64EncodedImage
// visitId :: string
// photoType :: Enum
function updatePhotoById(payload, photoId) {
  return http.patch({
    authorize: true,
    payload: payload,
    headers: HEADERS.minimal,
    url: `${uploadUrl()}/${paths.photos}?id=eq.${photoId}`
  });
}

function udpateVisitById(payload, visitId) {
  return http.patch({
    authorize: true,
    payload: payload,
    headers: HEADERS.representation,
    url: `${BASE_URL}/${paths.visits}?id=eq.${visitId}`
  });
}

function updateMessageById(payload, messageId) {
  return http.patch({
    authorize: true,
    payload: payload,
    headers: HEADERS.representation,
    url: `${BASE_URL}/${paths.messages}?id=eq.${messageId}`
  });
}

function findAllPhotosByVisitId(visitId) {
  return new Promise((resolve, reject) => {
    http
      .get({
        authorize: true,
        url: `${BASE_URL}/${
          paths.photos
        }?visit_id=eq.${visitId}&select=id,photo_type`
      })
      .then(
        R.compose(
          resolve,
          imagesToLookup
        )
      )
      .catch(reject);
  });
}

function pollAsyncResult(requestId) {
  return http.get({
    authorize: true,
    url: `${BASE_URL}/${paths.asyncResults}?id=eq.${requestId}`
  });
}

function processPatientRegistration({ requestId, result }) {
  return new Promise((resolve, reject) => {
    function loop(response) {
      setTimeout(() => {
        if (response) {
          if (
            response.result &&
            response.result.emrError &&
            response.result.emrError.message
          ) {
            reject(Error(response.result.emrError.message));
          } else {
            resolve();
          }
        } else {
          pollAsyncResult(requestId)
            .then(R.head)
            .then(loop)
            .catch(reject);
        }
      }, 500);
    }

    if (result === "already_registered") {
      resolve();
    } else {
      pollAsyncResult(requestId)
        .then(R.head)
        .then(loop)
        .catch(reject);
    }
  });
}

const reviews = {
  get(per_page = 10, page = 1) {
    return http.get({
      authorize: false,
      url: `${yotpo.url}/${
        yotpo.paths.reviews
      }?per_page=${per_page}&page=${page}`
    });
  },
  vote({ review_id, vote_type }) {
    return http.post({
      authorize: false,
      payload: {},
      url: `${yotpo.url}/${yotpo.paths.vote}/${review_id}/vote/${vote_type}`
    });
  }
};

function sendMessage(payload) {
  return new Promise((resolve, reject) => {
    return http
      .post({
        url: `${url}/${env}/${paths.messages}`,
        payload,
        authorize: true
      })
      .then(resolve)
      .catch(reject);
  });
}

export default {
  address,
  coupon,
  findAllPhotosByVisitId,
  getConfig,
  order,
  pollAsyncResult,
  subscription,
  udpateVisitById,
  updateMessageById,
  updatePhotoById,
  uploadPhoto,
  user,
  reviews,
  sendMessage
};
