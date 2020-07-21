import { confirmation } from "./confirmation";
import {
  hairPdp,
  treatmentPageFinasteride,
  gentsFinasteride,
  pdpHairPowerPack,
  pdpHairCompleteKit
} from "./hair-loss";
import { homepage } from "./homepage";
import { privacyPolicy } from "./privacy-policy";
import { purpose } from "./purpose";
import { about } from "./about";
import {
  sexPlp,
  sildenafilP,
  viagraconnect,
  tadalafil
} from "./erectile-dysfunction";
import {
  pdpSkinEveryday,
  pdpSkinMorningGlow,
  pdpSkinWrinkle,
  pdpSkinAcne,
  pdpSkinAging
} from "./skin-care";
import { pdpMouthAciclovir } from "./oral-care";
import { pdpWellnessPropranolol } from "./wellness";
import { skinPlp } from "./skin";
import { treatmentFinasteride } from "./treatment/";
import { userTerms } from "./user-terms";
import { serviceTerms } from "./service-terms";
import { pharmacyTerms } from "./pharmacy-terms";
import { PRODUCT_ID_BY_NAME } from "../config/product-ids-by-name";
import { ROUTE_PATHS } from "../routes/routes.constants";
import * as leadgen from "../domains/leadgen/content";

export const routesByProductId = {
  [PRODUCT_ID_BY_NAME.sildenafil]: [
    "/gentsed",
    "/gents9ed",
    "/gentsdr",
    "/ed/sildenafil",
    "/treatment/ed",
    ROUTE_PATHS.edSil
  ],
  [PRODUCT_ID_BY_NAME.finasteride]: [
    "/gentshair",
    "/gents9",
    "/gentsflow",
    "/hair-loss/finasteride",
    "/treatment/hair-loss",
    ROUTE_PATHS.hairFin,
    ROUTE_PATHS.pdpHairMinoxidil
  ],
  [PRODUCT_ID_BY_NAME.sildenafilp]: [ROUTE_PATHS.pdpSexSildenafilP],
  [PRODUCT_ID_BY_NAME.viagra]: [ROUTE_PATHS.pdpSexViagra],
  [PRODUCT_ID_BY_NAME.tadalafil]: [ROUTE_PATHS.pdpSexTadalafil],
  [PRODUCT_ID_BY_NAME.aciclovir]: [ROUTE_PATHS.pdpMouthAciclovir],
  [PRODUCT_ID_BY_NAME.everyday]: [ROUTE_PATHS.pdpSkinEveryday],
  [PRODUCT_ID_BY_NAME.morningglow]: [ROUTE_PATHS.pdpSkinMorningGlow],
  [PRODUCT_ID_BY_NAME.wrinkle]: [ROUTE_PATHS.pdpSkinWrinkle],
  [PRODUCT_ID_BY_NAME.acne]: [ROUTE_PATHS.pdpSkinAcne],
  [PRODUCT_ID_BY_NAME.antiAging]: [ROUTE_PATHS.pdpSkinAging],
  [PRODUCT_ID_BY_NAME.hairPowerPack]: [ROUTE_PATHS.pdpHairPowerPack],
  [PRODUCT_ID_BY_NAME.hairCompleteKit]: [ROUTE_PATHS.pdpHairCompleteKit],
  [PRODUCT_ID_BY_NAME.propranolol]: [ROUTE_PATHS.pdpWellnessPropranolol]
};

const content = {
  products: {
    // Hair
    [PRODUCT_ID_BY_NAME.finasteride]: "/hair-loss/finasteride",
    [PRODUCT_ID_BY_NAME.hairPowerPack]: ROUTE_PATHS.pdpHairPowerPack,
    [PRODUCT_ID_BY_NAME.hairCompleteKit]: ROUTE_PATHS.pdpHairCompleteKit,
    // Skincare
    [PRODUCT_ID_BY_NAME.aciclovir]: ROUTE_PATHS.pdpMouthAciclovir,
    [PRODUCT_ID_BY_NAME.everyday]: ROUTE_PATHS.pdpSkinEveryday,
    [PRODUCT_ID_BY_NAME.morningglow]: ROUTE_PATHS.pdpSkinMorningGlow,
    [PRODUCT_ID_BY_NAME.wrinkle]: ROUTE_PATHS.pdpSkinWrinkle,
    [PRODUCT_ID_BY_NAME.acne]: ROUTE_PATHS.pdpSkinAcne,
    [PRODUCT_ID_BY_NAME.antiAging]: ROUTE_PATHS.pdpSkinAging,
    // Wellness
    [PRODUCT_ID_BY_NAME.propranolol]: ROUTE_PATHS.pdpWellnessPropranolol,
    // Erectile dysfunction
    [PRODUCT_ID_BY_NAME.sildenafil]: "/ed/sildenafil",
    [PRODUCT_ID_BY_NAME.viagra]: ROUTE_PATHS.pdpSexViagra,
    [PRODUCT_ID_BY_NAME.tadalafil]: ROUTE_PATHS.pdpSexTadalafil,
    [PRODUCT_ID_BY_NAME.sildenafilp]: ROUTE_PATHS.pdpSexSildenafilP
  },
  pages: {
    "/": homepage,
    // PLPs
    [ROUTE_PATHS.plpSex]: sexPlp,
    "/hair-loss": hairPdp,
    [ROUTE_PATHS.plpSkin]: skinPlp,
    // Miscellaneous
    "/orders/confirm": confirmation,
    "/privacy-policy": privacyPolicy,
    "/purpose": purpose,
    "/about": about,
    "/user-terms": userTerms,
    "/service-terms": serviceTerms,
    "/pharmacy-terms": pharmacyTerms,
    // [ROUTE_PATHS.pdpSexViagra]: pdpSexViagra,
    // [ROUTE_PATHS.pdpSexTadalafil]: pdpSexTadalafil,
    [ROUTE_PATHS.pdpMouthAciclovir]: pdpMouthAciclovir,
    [ROUTE_PATHS.pdpHairPowerPack]: pdpHairPowerPack,
    [ROUTE_PATHS.pdpHairCompleteKit]: pdpHairCompleteKit,
    [ROUTE_PATHS.pdpSkinEveryday]: pdpSkinEveryday,
    [ROUTE_PATHS.pdpSkinMorningGlow]: pdpSkinMorningGlow,
    [ROUTE_PATHS.pdpSkinWrinkle]: pdpSkinWrinkle,
    [ROUTE_PATHS.pdpSkinAcne]: pdpSkinAcne,
    [ROUTE_PATHS.pdpSkinAging]: pdpSkinAging,
    [ROUTE_PATHS.pdpWellnessPropranolol]: pdpWellnessPropranolol,
    // Erectile dysfunction
    [ROUTE_PATHS.pdpSexSildenafilP]: sildenafilP,
    [ROUTE_PATHS.pdpSexTadalafil]: tadalafil,
    [ROUTE_PATHS.pdpSexViagra]: viagraconnect,
    // Hair
    "/hair-loss/finasteride": treatmentPageFinasteride,
    "/treatment/hair-loss": treatmentFinasteride,
    [ROUTE_PATHS.hairFin]: gentsFinasteride,
    // Try & quiz pages
    [ROUTE_PATHS.leadgen.sildenafilp]: leadgen.sildenafilp,
    [ROUTE_PATHS.leadgen.finasteride]: leadgen.finasteride(
      ROUTE_PATHS.leadgen.finasteride
    ),
    // [ROUTE_PATHS.leadgen.sildenafil]: leadgen.sildenafil(
    //   ROUTE_PATHS.leadgen.sildenafil
    // ),
    [ROUTE_PATHS.quizes.finasteride]: leadgen.finasteride(
      ROUTE_PATHS.quizes.finasteride
    )
    // [ROUTE_PATHS.quizes.sildenafil]: leadgen.sildenafil(
    //   ROUTE_PATHS.quizes.sildenafil
    // )
  }
};

export default content;
