"use strict";

import * as types from "../constants/ActionTypes";
import actions from "../actions";
import api from "./api";
import config from "../config";
import getData from "../schema/questionnaire";
import R from "ramda";
import urlUtility from "../utils/url";
import { takeEvery, call, fork, put, select } from "redux-saga/effects";
import { destroy } from "redux-form";
import { getters } from "./helpers";
import { UI, CHECKOUT, ACTIVITY } from "../domains/checkout-flow/state/actions";
import { CHECKOUT_STEP_NAMES } from "../domains/checkout-flow/checkout-flow.constants";

// import Q from "../fixtures/addyi";
// import Q from "../fixtures/aging";
// import Q from "../fixtures/acne";
import Q from "../fixtures/ed";
import VS from "../fixtures/visits";
import { toastrHandler } from "../modules/toastr/toastr.actions";

const { url, env, paths } = config.api;

// Fn's

const indexByCode = R.indexBy(R.prop("code"));

const indexById = R.indexBy(R.prop("id"));

function* findTreatmentByCode(code) {
  const url = `https://api.forhims.co.uk/${paths.treatmentPlans}/${code}`;
  const { response, error } = yield call(api.get, { url });
  if (error) {
    throw error;
  }
  return [R.prop("data", response)];
}

function* findAllVisits() {
  const { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.visits}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* updateVisitById(visitId, payload) {
  let { response, error } = yield call(api.patch, {
    authorize: true,
    payload,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.visits}?id=eq.${visitId}`
  });
  if (error) {
    throw error;
  }
  return response;
}

function* getVisitById(visitId) {
  let { response, error } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.visits}?id=eq.${visitId}`
  });
  if (error) {
    throw error;
  }
  return R.head(response);
}

function* fetchQuestionnaireByIdAndVersion(
  questionnaireId,
  questionnaireVersion
) {
  let queryParams = `id=eq.${questionnaireId}&version=eq.${questionnaireVersion}`;
  let { error, response } = yield call(api.get, {
    authorize: true,
    headers: { Prefer: "return=representation" },
    url: `${url}/${env}/${paths.questionnaires}?${queryParams}`
  });
  if (error) {
    throw error;
  }
  return R.find(x => x.version === questionnaireVersion, response);
}

// Update visit
// ====

function* watchUpdateVisit() {
  yield takeEvery(types.UPDATE_VISIT, updateVisit);
}

function* updateVisit() {
  try {
    let [visit, visit2, visits] = yield [
      select(getters.visit),
      select(getters.visit2),
      select(getters.visits)
    ];
    let answers = makeAnswer(visit2.answers);
    let payload = { answers };
    yield call(updateVisitById, visit.id, payload);
    visit = R.merge(visit, payload);
    const byId = R.merge(visits.byId, { [visit.id]: visit });
    yield [put(actions.emr.fetchVisitsResp({ byId }))];
  } catch (error) {
    console.log(error);
  }
}

// ------------------------
// Fetch visits
// ------------------------

function* watchFetchVisits() {
  yield takeEvery(types.FETCH_VISITS, fetchVisits);
}

export function* fetchVisits() {
  try {
    let visits = yield call(findAllVisits);
    yield call(fetchQuestionnairesForPendingVisits, visits);
    yield put(actions.emr.fetchVisitsResp({ byId: indexById(visits) }));
    yield call(autoLaunchPendingVisit, visits);
  } catch (error) {
    console.log(error);
  }
}

function* autoLaunchPendingVisit(visits) {
  const pendingVisit = R.find(visit => visit.status === "pending", visits);
  const route = yield select(getters.route);
  if (route.query.show_visit && pendingVisit) {
    yield put(actions.emr.launchEmrVisit(pendingVisit.id));
    urlUtility.removeQueryParams("show_visit");
  }
}

function* fetchQuestionnairesForPendingVisits(visits) {
  try {
    let pendingVisits = R.filter(R.propEq("status", "pending"), visits);
    // Fetch all questionnaires for pending visits
    for (let i = 0; i < pendingVisits.length; i++) {
      let { questionnaireId, questionnaireVersion } = pendingVisits[i];
      let questionnaire = yield fetchQuestionnaireByIdAndVersion(
        questionnaireId,
        questionnaireVersion
      );
      yield put(actions.emr.setQuestionnaire(questionnaire));
    }
  } catch (error) {
    console.log(error);
  }
}

// ------------------------
// Submit EMR form
// ------------------------

function* watchSubmitEmrForm() {
  yield takeEvery(types.SUBMIT_EMR_FORM, submitEmrForm);
}

function* submitEmrForm({ payload }) {
  try {
    yield put(ACTIVITY.show());
    $GTM.submitVisit.trigger();
    // yield call(updateVisitById, visit.id, { status: 'answered' });
    yield put(actions.checkout.activeOrderHasPendingVisit.fulfill());
    $GTM.submitVisit.success();
    yield put(UI.showCart());

    yield put(
      actions.checkout.activeOrderFinalReviewConfirmationStep.trigger()
    );
    yield call(fetchVisits); // refetch all records from db
    yield put(actions.emr.resetEmrForms());
    yield put(CHECKOUT.goToStep(CHECKOUT_STEP_NAMES.CART));
  } catch (error) {
    yield put(toastrHandler.error({ error: error.message }));
    $GTM.submitVisit.failure({ error: error.message });
  }
}

// Expected response format
const makeAnswer = answers => {
  return R.reduce(
    (r, questionId) => {
      let item = {
        questionId: questionId,
        value: answers[questionId]
      };
      return R.append(item, r);
    },
    [],
    R.keys(answers)
  );
};

// EMR forms reset
// ====

function* watchResetEmrForms() {
  yield takeEvery(types.RESET_EMR_FORMS, clearEmrFormsOnSubmission);
}

function* clearEmrFormsOnSubmission() {
  let state = yield select(getters.state);
  // Get form names
  let formNames = R.compose(
    R.map(R.toString),
    R.filter(x => !isNaN(x)),
    R.map(parseInt),
    R.keys,
    R.prop("form")
  )(state);
  // Nuke all the emr question form in redux state
  for (let i = 0; i < formNames.length; i++) {
    yield put(destroy(formNames[i]));
  }
}

// Fetch Treatment Plans
// ---

function* watchFindTreatmentByCode() {
  yield takeEvery(
    actions.treatment.findTreatmentByCode.TRIGGER,
    findTreatmentByCodeHandler
  );
}

function* findTreatmentByCodeHandler({ payload }) {
  try {
    yield put(actions.treatment.findTreatmentByCode.request());
    const treatments = yield call(findTreatmentByCode, payload.code);
    yield put(
      actions.treatment.findTreatmentByCode.success(indexByCode(treatments))
    );
  } catch (error) {
    yield put(actions.treatment.findTreatmentByCode.failure(error.message));
  } finally {
    yield put(actions.treatment.findTreatmentByCode.fulfill());
  }
}

// Resume EMR visit
// ---

function* watchLaunchEmrVisit() {
  yield takeEvery(actions.emr.launchEmrVisit.TRIGGER, launchEmrVisit);
}

function* launchEmrVisit({ payload: visitId }) {
  const visit = R.head(VS);
  // yield put(actions.emr.findVisitById.success(visit));
  yield put(actions.emr.setActiveVisit(visit));

  let parsedQuestionnaire = yield call(parseQuestionnaire, Q);

  let q = R.merge(
    parsedQuestionnaire,
    R.pick(["consented", "id", "orderId", "questionnaireId"], visit)
  );

  yield put(actions.emr.setQuestionnaire(q));

  $GTM.resumeVisit.trigger();
}

function* watchFindVisitById() {
  yield takeEvery(actions.emr.findVisitById.TRIGGER, findVisitById);
}

function* findVisitById({ payload }) {
  try {
    yield put(actions.emr.findVisitById.request());
    const visit = yield call(getVisitById, payload);
    const questionnaire = yield call(
      fetchQuestionnaireByIdAndVersion,
      visit.questionnaireId,
      visit.questionnaireVersion
    );

    // Parse via web worker
    let parsedQuestionnaire = yield call(parseQuestionnaire, questionnaire);
    let mergedQuestionnaire = R.merge(
      parsedQuestionnaire,
      R.pick(["consented", "id", "orderId", "questionnaireId"], visit)
    );

    yield put(actions.emr.setQuestionnaire(mergedQuestionnaire));
    yield put(actions.emr.setActiveVisit(visit));
    yield put(actions.emr.findVisitById.success(visit));
  } catch (error) {
    const { message } = error;
    yield put(toastrHandler.error({ message }));
    yield put(actions.emr.findVisitById.failure(error.message));
  } finally {
    yield put(actions.emr.findVisitById.fulfill());
  }
}

function parseQuestionnaire(questionnaire) {
  return new Promise((resolve, reject) => {
    let result = getData(questionnaire);
    resolve(result);
  });
}

export default function*() {
  yield fork(watchFetchVisits);
  yield fork(watchFindTreatmentByCode);
  yield fork(watchLaunchEmrVisit);
  yield fork(watchResetEmrForms);
  yield fork(watchSubmitEmrForm);
  yield fork(watchUpdateVisit);
  yield fork(watchFindVisitById);
}
