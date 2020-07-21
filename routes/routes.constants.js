export const ROUTE_PATHS = {
  allGlob: "*",
  root: "/",
  login: "login",
  blog: "blog(/:search)",
  register: "register",
  hair: "hair",
  orders: "orders",
  profile: "profile",
  creditCardDisclosure: "credit-card-disclosure",
  noticeOfPrivacyPractices: "notice-of-privacy-practices",
  baileyHealth: "bailey-health",
  visit: "/visit",
  treatment: "/treatment",
  reset: "reset",
  // Newly added routes to progressively start using across site
  about: "/about",
  privacy: "/privacy-policy",
  plpHair: "/hair-loss",
  pdpHairFinasteride: "/hair-loss/finasteride",
  treatmentHairFinasteride: "/treatment/hair-loss",
  hairFin: "/gentsfinasteride",
  plpSex: "/ed",
  plpSkin: "/skin-care",
  treatmentSexSildenafil: "/treatment/ed",
  quizes: {
    root: "/quiz/*",
    sildenafil: "/quiz/ed",
    finasteride: "/quiz/hair-loss"
  },
  leadgen: {
    root: "/try/*",
    sildenafil: "/try/ed",
    sildenafilp: "/try/bluepill",
    finasteride: "/try/hair-loss"
  },

  // Product URLs / ED
  edSil: "/gentssildenafil",
  pdpSexSildenafil: "/ed/sildenafil",
  pdpSexSildenafilP: "/ed/bluepill",
  pdpSexViagra: "/ed/viagra-connect",
  pdpSexTadalafil: "/ed/weekendpill",

  // Product URLs / Oral care
  pdpMouthAciclovir: "/oral-care/aciclovir",

  // Product URLs / Skin care
  pdpSkinEveryday: "/skin-care/moisturiser",
  pdpSkinMorningGlow: "/skin-care/vitamin-c-serum",
  pdpSkinWrinkle: "/skin-care/night-cream",
  // pdpSkinAcne: "/skin-care/acne-treatment",
  // pdpSkinAging: "/skin-care/anti-aging",

  // Product URLs / Hair care
  pdpHairPowerPack: "/hair-loss/hair-power-pack",
  pdpHairCompleteKit: "/hair-loss/complete-hair-kit",
  pdpWellnessPropranolol: "/wellness/propranolol",

  // masks
  // pdpSexSildenafilBluePill: "/ed/bluepill",
  // pdpSexTadalafilWeekendPill: "/ed/weekendpill",
  pdpMouthAciclovirWellness: "wellness/mouth",
  pdpWellnessPropranololWellness: "wellness/anxiety",
  pdpHairFinasterideDaily: "hairloss/daily"
};

export const ROUTE_PATHS_US = {
  root: "/",
  about: "/about",
  privacy: "/privacy-policy",
  plpHair: "/hair-loss",
  pdpHairFinasteride: "/hair-loss/finasteride",
  treatmentHairFinasteride: "/treatment/hair-loss-finasteride",
  plpSkin: "/skin-care",
  plpSex: "/erectile-dysfunction",
  pdpSexSildenafil: "/erectile-dysfunction/sildenafil",
  treatmentSexSildenafil: "/treatment/erectile-dysfunction"
};
