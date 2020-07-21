"use strict";
import { merge } from "ramda";

const DOCTOR_BL = {
  name: "Dr. Brendan Levy",
  license: "R5887, 42.0013925, MD15601"
};
const DOCTOR_BW = { name: "Dr. Brian Williams", license: "N4843" };
const DOCTOR_SZ = { name: "Dr. Sajad Zalzala", license: "56372" };
const DOCTOR_AH = { name: "Dr. Anh Ho", license: "01079897A" };
const DOCTOR_SG = { name: "Dr. Steven Griffith", license: "122788" };
const DOCTOR_AR = { name: "Dr. Adrian Rawlinson", license: "A066237" };
const DOCTOR_PK = { name: "Dr. Patrick Kavanagh", license: "ME96603" };
const DOCTOR_TP = { name: "Dr. Thomas Poulton", license: "MD22069" };

module.exports = {
  AE: [DOCTOR_BL],
  AP: [DOCTOR_BL],
  AA: [DOCTOR_BL],
  AL: [DOCTOR_BL],
  AK: [DOCTOR_SG],
  AZ: [DOCTOR_BL],
  AR: [DOCTOR_BL],
  CA: [DOCTOR_AR],
  CO: [DOCTOR_BW],
  CT: [merge(DOCTOR_PK, { license: "61402" })],
  DE: [DOCTOR_BL],
  DC: [DOCTOR_BL],
  FL: [DOCTOR_PK],
  GA: [merge(DOCTOR_PK, { license: "78512" })],
  HI: [DOCTOR_BL],
  ID: [DOCTOR_BL],
  IL: [merge(DOCTOR_SZ, { license: "36.14178" })],
  IN: [DOCTOR_AH],
  IA: [DOCTOR_BL],
  KS: [DOCTOR_BL],
  KY: [DOCTOR_BL],
  LA: [DOCTOR_BL],
  ME: [DOCTOR_TP],
  MT: [DOCTOR_BL],
  NE: [merge(DOCTOR_TP, { license: "30125" })],
  NV: [DOCTOR_BL],
  NH: [DOCTOR_BL],
  NJ: [DOCTOR_BL],
  NM: [DOCTOR_BL],
  NY: [merge(DOCTOR_SZ, { license: "289619-1" })],
  NC: [merge(DOCTOR_SZ, { license: "222623" })],
  ND: [DOCTOR_BL],
  OH: [merge(DOCTOR_SZ, { license: "35.129936" })],
  OK: [DOCTOR_BL],
  OR: [merge(DOCTOR_SZ, { license: "MD179683" })],
  MD: [DOCTOR_BL],
  MA: [DOCTOR_BL],
  MI: [DOCTOR_BL],
  MN: [DOCTOR_BL],
  MS: [DOCTOR_BL],
  MO: [merge(DOCTOR_SG, { license: "2004001449" })],
  PA: [merge(DOCTOR_PK, { license: "MD462196" })],
  RI: [DOCTOR_BL],
  SC: [merge(DOCTOR_PK, { license: "51762" })],
  SD: [DOCTOR_BL],
  TN: [DOCTOR_SZ],
  TX: [DOCTOR_BW],
  UT: [merge(DOCTOR_PK, { license: "10800188-1205" })],
  VT: [DOCTOR_BL],
  VA: [merge(DOCTOR_PK, { license: "101264898" })],
  WA: [merge(DOCTOR_TP, { license: "60215304" })],
  WV: [DOCTOR_BL],
  WI: [merge(DOCTOR_SZ, { license: "66675-20" })],
  WY: [merge(DOCTOR_TP, { license: "7735A" })]
};
