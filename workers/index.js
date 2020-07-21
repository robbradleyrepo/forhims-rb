"use strict";

import "babel-polyfill";
import parser from "../schema/questionnaire";

const handlers = {
  parse_questionnaire: payload => {
    let data = JSON.parse(payload);
    let result = parser(data);
    self.postMessage(result);
  }
};

self.addEventListener(
  "message",
  e => {
    let data = e.data;
    switch (data.cmd) {
      case "parse_questionnaire":
        handlers["parse_questionnaire"](data.payload);
        break;
      default:
        self.postMessage("Unknown command: " + data.cmd);
    }
  },
  false
);
