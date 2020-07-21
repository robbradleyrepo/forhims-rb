export const QUESTIONNAIRE_PAGES = {
  REASON_FOR_CANCELLATION: "REASON_FOR_CANCELLATION",
  TOO_MUCH_PRODUCT: "TOO_MUCH_PRODUCT",
  KIT_PRODUCT: "KIT_PRODUCT",
  TOO_EXPENSIVE: "TOO_EXPENSIVE",
  BAD_REACTION: "BAD_REACTION",
  TRIAL_ONLY: "TRIAL_ONLY",
  SERVICE_EXPERIENCE: "SERVICE_EXPERIENCE",
  MOVING: "MOVING",
  COMPETITOR: "COMPETITOR",
  COMPETITOR_REASON: "COMPETITOR_REASON",
  MISTAKE_SUBSCRIPTION: "MISTAKE_SUBSCRIPTION",
  CANCEL_SUCCESSFUL: "CANCEL_SUCCESSFUL"
};

export const PAGE_DETAILS = {
  [QUESTIONNAIRE_PAGES.REASON_FOR_CANCELLATION]: {
    title: "Why do you want to cancel?",
    options: [
      {
        label: "I have too much",
        value: "I have too much",
        nextPage: QUESTIONNAIRE_PAGES.TOO_MUCH_PRODUCT
      },
      {
        label: "I don't like something in my kit",
        value: "I don't like something in my kit",
        nextPage: QUESTIONNAIRE_PAGES.KIT_PRODUCT
      },
      {
        label: "It's too expensive",
        value: "It's too expensive",
        nextPage: QUESTIONNAIRE_PAGES.TOO_EXPENSIVE
      },
      {
        label: "I'm having a bad reaction to something in my kit",
        value: "I'm having a bad reaction to something in my kit",
        nextPage: QUESTIONNAIRE_PAGES.BAD_REACTION
      },
      {
        label: "I only wanted the trial",
        value: "I only wanted the trial",
        nextPage: QUESTIONNAIRE_PAGES.TRIAL_ONLY
      },
      {
        label: "Service experience",
        value: "Service experience",
        nextPage: QUESTIONNAIRE_PAGES.SERVICE_EXPERIENCE
      },
      {
        label: "I'm moving",
        value: "I'm moving",
        nextPage: QUESTIONNAIRE_PAGES.MOVING
      },
      {
        label: "I'm going to try a competitor",
        value: "I'm going to try a competitor",
        nextPage: QUESTIONNAIRE_PAGES.COMPETITOR
      },
      {
        label: "I didn't realize it was a subscription",
        value: "I didn't realize it was a subscription",
        nextPage: QUESTIONNAIRE_PAGES.MISTAKE_SUBSCRIPTION
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.TOO_MUCH_PRODUCT]: {
    title: "Which product do you have too much of?",
    productOptions: true
  },
  [QUESTIONNAIRE_PAGES.KIT_PRODUCT]: {
    title: "Tell us more",
    textInputFields: [
      { label: "What didn't you like?", name: "whichProduct", required: true },
      { label: "Why?", name: "reason", required: true }
    ]
  },
  [QUESTIONNAIRE_PAGES.TOO_EXPENSIVE]: {
    title: "Tell us more",
    options: [
      {
        label: "I only wanted a trial",
        value: "I only wanted a trial"
      },
      {
        label: "My finances have changed",
        value: "My finances have changed"
      },
      {
        label: "Found cheaper elsewhere",
        value: "Found cheaper elsewhere"
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.BAD_REACTION]: {
    title: "Tell us more",
    textInputFields: [
      { label: "Which product?", name: "whichProduct", required: true }
    ]
  },
  [QUESTIONNAIRE_PAGES.TRIAL_ONLY]: {
    title: "What would entice you to continue with the subscription?",
    options: [
      {
        label: "Lower price",
        value: "Lower price"
      },
      {
        label: "More discreet packaging",
        value: "More discreet packaging"
      },
      {
        label: "Ability to pickup package",
        value: "Ability to pickup package"
      },
      {
        label: "Less or more items per package",
        value: "Less or more items per package"
      },
      {
        label: "Shipping less often",
        value: "Shipping less often"
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.MOVING]: {
    title: "We're happy to update your address!",
    options: [
      {
        label: "Yes, please [update my address](/profile)",
        value: "update",
        alwaysDisabled: true
      },
      {
        label:
          "No, I'm moving to a state where hims isn't operating or out of the country.",
        value:
          "No, I'm moving to a state where hims isn't operating or out of the country."
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.SERVICE_EXPERIENCE]: {
    title: "Tell us more",
    options: [
      {
        label: "Doctors",
        value: "Doctors"
      },
      {
        label: "Customer service",
        value: "Customer service"
      },
      {
        label: "How hims works in general",
        value: "How hims works in general"
      }
    ],
    textInputFields: [{ label: "Comments", name: "comments", required: false }]
  },
  [QUESTIONNAIRE_PAGES.COMPETITOR]: {
    title: "Which competitor?",
    nextPage: QUESTIONNAIRE_PAGES.COMPETITOR_REASON,
    options: [
      {
        label: "Roman",
        value: "Roman"
      },
      {
        label: "Keeps",
        value: "Keeps"
      },
      {
        label: "Lemonaid",
        value: "Lemonaid"
      },
      {
        label: "Other",
        value: "userInput"
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.COMPETITOR_REASON]: {
    title: "Why the move?",
    options: [
      { label: "Cheaper", value: "Cheaper" },
      { label: "Service issue", value: "Service issue" },
      { label: "Packaging", value: "Packaging" },
      {
        label: "Changing medication entirely",
        value: "Changing medication entirely"
      }
    ]
  },
  [QUESTIONNAIRE_PAGES.MISTAKE_SUBSCRIPTION]: {
    title: "Tell us more",
    options: [
      {
        label: "Thought promotion was for 1 month only",
        value: "Thought promotion was for 1 month only"
      },
      {
        label: "Missed it in checkout",
        value: "Missed it in checkout"
      }
    ]
  }
};
