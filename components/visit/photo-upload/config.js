"use strict";

import React from "react";
import {
  DriversLicenseTitle,
  DriversLicensePhoto,
  Face,
  Head,
  Lips,
  Photo
} from "./instructions";

const IMAGES = {
  ID: {
    title: <DriversLicenseTitle />,
    type: "id",
    instructions: DriversLicensePhoto
  },
  SELFIE_AND_ID: {
    title: <DriversLicenseTitle />,
    type: "selfie_and_id",
    instructions: DriversLicensePhoto
  },
  LIPS: {
    title: <Lips />,
    type: "lips",
    instructions: Photo
  },
  SELFIE: {
    title: <Face />,
    type: "selfie",
    instructions: Photo
  },
  HAIRLINE_FRONT: {
    title: <Head direction="top" />,
    type: "hairline_front",
    instructions: Photo
  },
  HAIRLINE_BACK: {
    title: <Head direction="back" />,
    type: "hairline_back",
    instructions: Photo
  },
  FACE_RIGHT: {
    title: <Face direction="right" />,
    type: "right_face",
    instructions: Photo
  },
  FACE_LEFT: {
    title: <Face direction="left" />,
    type: "left_face",
    instructions: Photo
  }
};

const BIRTH_CONTROL = {
  orderType: 1,
  viewShots: [IMAGES.SELFIE, IMAGES.ID]
};

const HSSD = {
  orderType: 2,
  viewShots: [IMAGES.SELFIE, IMAGES.ID]
};

const SKINCARE_AGING = {
  orderType: 3,
  viewShots: [IMAGES.SELFIE, IMAGES.FACE_RIGHT, IMAGES.FACE_LEFT, IMAGES.ID]
};

const SKINCARE_ACNE = {
  orderType: 3,
  viewShots: [IMAGES.SELFIE, IMAGES.FACE_RIGHT, IMAGES.FACE_LEFT, IMAGES.ID]
};

const SKINCARE_MELASMA = {
  orderType: 3,
  viewShots: [IMAGES.SELFIE, IMAGES.FACE_RIGHT, IMAGES.FACE_LEFT, IMAGES.ID]
};

module.exports = {
  HSSD,
  BIRTH_CONTROL,
  SKINCARE_ACNE,
  SKINCARE_AGING,
  SKINCARE_MELASMA
};
