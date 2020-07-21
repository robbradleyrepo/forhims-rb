"use strict";

import R from "ramda";

const getChoices = R.compose(
  R.flatten,
  R.values
);

const getQuestionAnswerTuples = state => {
  let answers = state.visit.answers;
  let questions = state.visit.questions;

  let tuples = R.reduce(
    (r, questionId) => {
      let tuple = {
        question: questions[questionId],
        answer: answers[questionId]
      };
      return R.append(tuple, r);
    },
    {},
    R.keys(questions)
  );

  let choices = getChoices(answers);

  let followupQuestionIds = R.compose(
    R.flatten,
    R.values,
    R.pick(R.__, state.visit.triggers)
  )(choices);

  // Minimum set of questionIds to show
  let targetSet = R.flatten([state.visit.root, followupQuestionIds]);

  let r = R.compose(
    R.sortBy(R.path(["question", "index"])),
    R.filter(t => R.contains(t.question.id, targetSet))
  )(tuples);

  return r;
};

const getActiveVisit = R.pathOr(null, ["visits", "active"]);

const getTreatmentType = R.pathOr(null, [
  "visits",
  "active",
  "questionnaireId"
]);

module.exports = {
  getActiveVisit,
  getQuestionAnswerTuples,
  getTreatmentType
};
