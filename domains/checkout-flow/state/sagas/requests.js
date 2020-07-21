"use strict";

import api from "../../../../sagas/api";
import config from "../../../../config";
import promiseApi from "../../../../utils/api";
import R from "ramda";
import { call } from "redux-saga/effects";
import { delay } from "redux-saga";

// Constants
// ---

const { url, env, paths } = config.api;

// Functions
// ---

function normalizeRequest(fn) {
  return fn()
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

const rekeyOrder = order =>
  R.compose(
    R.assoc("items", order.orderItems),
    R.omit(["orderItems"])
  )(order);

const rekeyOrders = R.map(rekeyOrder);

const normalizeOrder = order =>
  R.merge(order, { items: R.defaultTo([], order.items) });

function* getAllOrders() {
  const queryParams = ""; // "select=*,order_items(*)"
  const { response: orders, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.myOrders}?${queryParams}`
  });
  // Handle error
  if (error) {
    throw error;
  }

  return R.compose(
    R.map(normalizeOrder),
    rekeyOrders
  )(orders);
}

function* getOrderById(orderId) {
  const { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${
      paths.myOrders
    }?id=eq.${orderId}&select=*,order_items(*)`
  });
  if (error) {
    throw error;
  }
  // Update order
  return R.compose(
    R.head,
    rekeyOrders
  )(response);
}

function* updateOrderById(orderId, payload, headers) {
  let { response, error } = yield api.patch({
    authorize: true,
    payload: payload,
    headers: headers || { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.orders}?id=eq.${orderId}`
  });
  if (error) {
    throw error;
  }

  return R.head(response);
}

function* makeOrder() {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: {},
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.orders}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return R.compose(
    R.assoc("items", []),
    R.head
  )(response);
}

function* updateItemById(item) {
  const { response, error } = yield call(api.patch, {
    authorize: true,
    payload: item,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.orderItem}?id=eq.${item.id}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return R.head(response);
}

function* createItemInOrder(payload) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.orderItem}`
  });
  // Handle error
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* getCouponsById(couponId) {
  const { response, error } = yield call(api.get, {
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.coupons}?id=eq.${couponId}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* deleteOrderItem(itemId) {
  const { error } = yield call(api.delete, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.orderItem}?id=eq.${itemId}`
  });
  if (error) {
    throw error;
  }
}

function* getOrderStatusById(orderId) {
  let { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.paymentStatus}?order_id=eq.${orderId}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* apiTotalsCalc(order) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: { orderId: order.id },
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.calcTotals}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* attemptChargeForOrder(order) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: { orderId: order.id },
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.chargeOrder}`
  });
  // Errors? bail!
  if (error) {
    throw error;
  }
  // Poll for payment result
  let poll = yield call(pollPaymentResult, order.id);
  if (poll.paymentStatus !== "succeeded") {
    throw Error(poll.paymentProcessInfo);
  }

  return response;
}

function* pollPaymentResult(orderId) {
  let result = null; // Poll for stripe result

  while (!result) {
    yield delay(500);
    let response = yield call(getOrderStatusById, orderId);
    result =
      response && (response.paymentStatus || response.paymentProcessInfo)
        ? response
        : null;
  }

  return result;
}

function maybeRegisterPatient() {
  return normalizeRequest(promiseApi.user.maybeRegisterPatient);
}

// ------------
// Blog Calls
// ------------

const objToQueryParam = params =>
  R.compose(
    R.join("&"),
    R.reduce((r, x) => R.concat(r, params[x] ? [`${x}=${params[x]}`] : []), []),
    R.keys
  )(params);

function* findBlogsByCategory({ categorySlug, page, pageSize }) {
  let params = {
    category_slug: categorySlug,
    page_size: pageSize,
    page: page || 1,
    exclude_body: true,
    auth_token: config.butter
  };
  let qp = objToQueryParam(params);
  let url = "https://api.buttercms.com/v2/posts";
  let { response, error } = yield call(api.get, { url: `${url}/?${qp}` });
  if (error) {
    throw error;
  }
  return response;
}

function* findBlogBySlug(slug) {
  let url = `https://api.buttercms.com/v2/posts/${slug}/`;
  let queryParams = `auth_token=${config.butter}`;
  let { response, error } = yield call(api.get, {
    url: `${url}?${queryParams}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* findBlogCategories() {
  let url = `https://api.buttercms.com/v2/categories`;
  let queryParams = `auth_token=${config.butter}`;
  let { response, error } = yield call(api.get, {
    url: `${url}?${queryParams}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* getVisitByOrderId(orderId) {
  const { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.visits}?order_id=eq.${orderId}`
  });
  if (error) {
    throw error;
  }
  // Update order
  return R.head(response);
}

function* maybeCreateVisit(payload) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.maybeCreateVisit}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return response;
}

function* updateUser(payload) {
  const { response, error } = yield call(api.patch, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.me}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* createAddress(payload) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.address}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return R.head(response);
}

function* validateAddress(payload) {
  const { response, error } = yield call(api.post, {
    authorize: false,
    payload: payload,
    url: "https://api.forhims.co.uk/tools/address/validate-shippo"
  });
  if (error) {
    throw error;
  }
  // Parse response
  return response;
}

function* validateCart(orderId) {
  const { response, error } = yield call(api.post, {
    authorize: true,
    payload: { orderId },
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.validateCart}`
  });

  if (error) {
    throw error;
  }

  let validation = R.head(response);

  if (!validation.validates) {
    return { error: validation.message };
  }

  return response;
}

function* updateAddressById(payload) {
  const { address, addressId } = payload;
  const { response, error } = yield call(api.patch, {
    authorize: true,
    payload: address,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.address}?id=eq.${addressId}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return response;
}

function* calculateCartTotals(payload) {
  const { response, error } = yield call(api.post, {
    payload: payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.calcCartTotals}`
  });
  if (error) {
    throw error;
  }
  // Parse response
  return R.head(response);
}

module.exports = {
  apiTotalsCalc,
  attemptChargeForOrder,
  calculateCartTotals,
  createAddress,
  createItemInOrder,
  deleteOrderItem,
  findBlogBySlug,
  findBlogCategories,
  findBlogsByCategory,
  getAllOrders,
  getCouponsById,
  getOrderById,
  getOrderStatusById,
  getVisitByOrderId,
  makeOrder,
  maybeCreateVisit,
  maybeRegisterPatient,
  updateAddressById,
  updateItemById,
  updateOrderById,
  updateUser,
  validateAddress,
  validateCart
};
