"use strict";

import actions from "../actions";
import R from "ramda";
import { browserHistory } from "react-router";
import { takeEvery, call, fork, put, select } from "redux-saga/effects";
import { getters } from "./helpers";
import {
  findBlogBySlug,
  findBlogCategories,
  findBlogsByCategory
} from "./requests";

// Fn's

// const hrefToSlug = href => href.replace(/\/?blog\/?/gi, "");

// Fetch Posts

function* watchFindBlogsByCategory() {
  yield takeEvery(
    actions.blog.findBlogsByCategory.TRIGGER,
    findBlogsByCategoryRun
  );
}

function* findBlogsByCategoryRun({ payload }) {
  try {
    yield put(actions.blog.findBlogsByCategory.request());
    let categorySlug =
      payload && payload.categorySlug ? payload.categorySlug : "";
    let page = payload && payload.page ? payload.page : 1;
    let pageSize = payload && payload.pageSize ? payload.pageSize : 10;
    const isFirstPage = R.equals(page, 1);
    let response = yield call(findBlogsByCategory, {
      categorySlug,
      page,
      pageSize
    });

    let blog = yield select(getters.blog);

    if (!R.any(R.propEq("page", page), blog)) {
      response.data = R.map(blog => R.assoc("page", page, blog), response.data);
    }

    // append posts when same category is requested
    if (categorySlug === blog.scope.categorySlug && !isFirstPage) {
      response.data = R.concat(blog.scope.data, response.data);
    }

    // update state!
    yield put(
      actions.blog.findBlogsByCategory.success(
        R.merge(response, { categorySlug })
      )
    );
    payload.onSuccess && payload.onSuccess();
  } catch (error) {
    yield put(actions.blog.findBlogsByCategory.failure(error.message));
  } finally {
    yield put(actions.blog.findBlogsByCategory.fulfill());
  }
}

function* watchFindBlogsByCategorySuccess() {
  yield takeEvery(actions.blog.findBlogsByCategory.TRIGGER, resetActiveBlog);
}

function* resetActiveBlog() {
  yield put(actions.blog.resetActiveBlog());
}

// Fetch Categories

function* watchFindBlogCategories() {
  yield takeEvery(
    actions.blog.findBlogCategories.TRIGGER,
    findBlogCategoriesRun
  );
}

function* findBlogCategoriesRun() {
  const defaultCategories = [{ name: "All", slug: "" }];
  try {
    yield put(actions.blog.findBlogCategories.request());
    let response = yield call(findBlogCategories);
    response.data = R.concat(defaultCategories, response.data);
    yield put(actions.blog.findBlogCategories.success(response));
  } catch (error) {
    yield put(actions.blog.findBlogCategories.failure(error.message));
  } finally {
    yield put(actions.blog.findBlogCategories.fulfill());
  }
}

// Fetch post by slug

function* watchFindBlogBySlug() {
  yield takeEvery(actions.blog.findBlogBySlug.TRIGGER, findBlogBySlugRun);
}

function* findBlogBySlugRun({ payload: slug }) {
  try {
    yield put(actions.blog.findBlogBySlug.request());
    let blog = yield call(findBlogBySlug, slug);
    if (blog) {
      yield put(actions.blog.findBlogBySlug.success(blog.data));
    } else {
      yield call(browserHistory.push, { pathname: "blog" });
    }
  } catch (error) {
    yield put(actions.blog.findBlogBySlug.failure(error.message));
  } finally {
    yield put(actions.blog.findBlogBySlug.fulfill());
  }
}

export default function*() {
  yield fork(watchFindBlogBySlug);
  yield fork(watchFindBlogCategories);
  yield fork(watchFindBlogsByCategory);
  yield fork(watchFindBlogsByCategorySuccess);
}
