"use strict";

import http from "../utils/http";

exports.get = params => {
  return http
    .get(params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

exports.patch = params => {
  return http
    .patch(params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

exports.put = params => {
  return http
    .put(params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

exports.post = params => {
  return http
    .post(params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

exports.delete = params => {
  return http
    .del(params)
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
