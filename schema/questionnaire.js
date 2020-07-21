"use strict";

import R from "ramda";
import { normalize, schema } from "normalizr";

// Define a users schema

let trigger = new schema.Entity("triggers", {});

let choice = new schema.Entity("choices", {});

let question = new schema.Entity("questions", {
  choices: [choice],
  trigger: trigger
});

const questionnaire = new schema.Entity("questionnaires", {
  questions: [question]
});

/**
 * We need 2 additional schemas, which will handle multiple triggers for a single question.
 * For example, a question like "Do you want us to contact your GP" Yes / No.
 * A Yes will trigger multiple further questions (e.g. name / address 1 / address 2, etc.)
 *
 * When Normalizr aggregates the trigger in each question it will use the ID key,
 * but that's the parent ID, meaning that triggers for the same parent get erased.
 * Here we use a custom schema key by combining the parent + child ID with ///.
 *
 * We could use a single schema and probably be fine. But in order to protect downstream legacy APIs,
 * we're doing it as 2 different schemas. The original schema structure (that merges triggers) will be used throughout,
 * but when we are calculating the "triggers" state prop (which later is used for working out "what to show next"),
 * then we will use this unique-d schema. It doesn't matter for this purpost because the unique keys get popped off immediately.
 *
 * @see getTriggers The moment the key is popped off (in the values)
 *
 * @author Max Barry <mbarry@forhims.com>
 */
let triggerUnique = new schema.Entity(
  "triggers",
  {},
  {
    idAttribute: ({ id, childQuestionId }) => id + "///" + childQuestionId
  }
);

let questionnaireUniqueTriggers = new schema.Entity("questionnaires", {
  questions: [
    new schema.Entity("questions", {
      choices: [choice],
      trigger: triggerUnique
    })
  ]
});

const getTriggers = R.compose(
  R.reduce((r, x) => {
    if (!R.has(x.qnrChoiceId, r)) {
      r[x.qnrChoiceId] = [];
    }
    r[x.qnrChoiceId].push(x.childQuestionId);
    return r;
  }, {}),
  R.values,
  R.prop("triggers")
);

function recursivelyGetFollowUpQuestions(children, result) {
  result = result || [];

  if (children.length === 0) {
    return result;
  } else {
    R.forEach(fq => {
      result.push(fq);
      recursivelyGetFollowUpQuestions(fq.children, result);
    }, children);
    return result;
  }
}

module.exports = payload => {
  const questions = payload.data.data.questions;
  const qs = recursivelyGetFollowUpQuestions(questions);
  const qsWithIndex = qs.map((q, index) => R.assoc("index", index + 1, q));

  // Normalization of incoming API data against standard schema (which erases multi-triggers)
  const { entities } = normalize({ questions: qsWithIndex }, questionnaire);

  // Schema that accounts for questionnaires containing multiple answers from a single triggered answer
  const { entities: entitiesWithUniqueTriggers } = normalize(
    { questions: qsWithIndex },
    questionnaireUniqueTriggers
  );

  return {
    choices: entities.choices,
    questions: entities.questions,
    root: R.map(R.prop("id"), questions),
    triggers: getTriggers(entitiesWithUniqueTriggers)
  };
};
