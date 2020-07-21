import { PRODUCT_ID_BY_NAME } from "../config/product-ids-by-name";
import { ROUTE_PATHS } from "../routes/routes.constants";

export const links = {
  componentType: "markdown",
  id: "3FoR97StcImCq0kQEeEsK3",
  props: {
    content: `
### Pages

[Home](/)

[Birth Control](/sexual-health/birth-control)

[Shampoo](/hair-loss/shampoo)

[Blog](/blog)

[Blog Post](/blog/post-title)

[Our Purpose](/purpose)

[Terms and Conditions](/terms-and-conditions)

[Privacy Policy](/privacy-policy)

[User Terms](/user-terms)

[Service Terms](/service-terms)
`
  }
};

/**
 * todo: all of this needs to be abstracted to some sort of product core
 */
export const productDetailAssociations = {
  [PRODUCT_ID_BY_NAME.finasteride]: {
    title: "Finasteride",
    description:
      "Get a free online consultation with a doctor to treat hair loss. Finasteride treats male pattern baldness, at the crown and the middle of the scalp.",
    crossSellImage: "",
    cartImage: "hims-pills-thumbnail-02",
    plpBgImage: "hims-pdp-hair-text5050-06",
    plpHoverImage: "hims-pdp-hair-text5050-01",
    plpProductImage:
      "product/hair/finasteride/Hims_PLP_Hair_Product_Finasteride",
    link: ROUTE_PATHS.pdpHairFinasteride,
    ingredients: ""
  },
  // [PRODUCT_ID_BY_NAME.sildenafil]: {
  //   title: "Sildenafil",
  //   description:
  //     "An affordable pharmacy medicine to treat Erectile Dysfunction.",
  //   crossSellImage: "",
  //   cartImage: "hims-sildenafil-thumbnail-01",
  //   plpBgImage: "product/sex/sildenafil/Hims_PLP_Sex_Sildenafil-BG",
  //   plpHoverImage: "HIMS-10-14-1719628-adapted",
  //   plpProductImage: "product/sex/sildenafil/Hims_PLP_Sex_Sildenafil",
  //   link: ROUTE_PATHS.pdpSexSildenafil
  // },
  [PRODUCT_ID_BY_NAME.sildenafilp]: {
    title: "Sildenafil",
    description:
      "An affordable pharmacy medicine to treat Erectile Dysfunction.",
    crossSellImage: "",
    cartImage: "hims-sildenafil-thumbnail-01",
    plpBgImage: "product/sex/sildenafil/Hims_PLP_Sex_Sildenafil-BG",
    plpHoverImage: "HIMS-10-14-1719628-adapted",
    plpProductImage: "hims-generic-packet",
    link: ROUTE_PATHS.pdpSexSildenafilP
  },
  [PRODUCT_ID_BY_NAME.viagra]: {
    title: "Viagra Connect®",
    description:
      "The OG that made its name as the first Erectile Dysfunction treatment.",
    crossSellImage: "",
    cartImage: "product/sex/viagra/Hims_PDP_Viagra_Product01-m",
    plpBgImage: "product/sex/viagra/Hims-PLP-Sex-Viagra-BG-V2",
    plpHoverImage: "product/sex/viagra/Hims_PLP_Viagra-hover2b",
    plpProductImage: "hims-generic-packet",
    link: ROUTE_PATHS.pdpSexViagra
  },
  [PRODUCT_ID_BY_NAME.tadalafil]: {
    title: "Tadalafil",
    description:
      "Get a free online consultation with a doctor to treat ED. Tadalafil can help men with ED get and keep an erection.",
    crossSellImage: "",
    cartImage: "hims-sildenafil-thumbnail-01",
    plpBgImage: "product/sex/tadalafil/Hims-PLP-Sex-Cialis-BG",
    plpHoverImage: "HIMS_10-14-1719634",
    plpProductImage: "hims-generic-packet",
    link: ROUTE_PATHS.pdpSexTadalafil
  },
  [PRODUCT_ID_BY_NAME.everyday]: {
    title: "Everyday Moisturizer",
    description:
      "The everyday moisturiser made to help your skin look balanced (but never oily).",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "product/skin/everyday/PLP_Everyday_V2.jpg",
    plpHoverImage:
      "product/skin/everyday/Hims_PLP_Skin_Product_EverydayMoisturizer_Hover.jpg",
    plpProductImage:
      "product/skin/everyday/Hims_PLP_Skin_Product_EverydayMoisturizer.png",
    link: ROUTE_PATHS.pdpSkinEveryday
  },
  [PRODUCT_ID_BY_NAME.morningglow]: {
    title: "Morning Glow Vitamin C Serum",
    description:
      "Loaded with Vitamin C, this daily antioxidant serum helps to even out your complexion.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "product/skin/morning-glow/PLP_MorningGlow_V2",
    plpHoverImage:
      "product/skin/morning-glow/08_Hims_Skin_PLP_MorningGlowRollover",
    plpProductImage:
      "product/skin/morning-glow/Hims_PLP_Skin_Product_MorningGlowSerum",
    link: ROUTE_PATHS.pdpSkinMorningGlow
  },
  [PRODUCT_ID_BY_NAME.wrinkle]: {
    title: "Goodnight Wrinkle Cream",
    description:
      "Formulated with caffeine, this night cream makes your skin work hard while you snooze.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "product/skin/wrinkle/PLP_GoodnightWrinkle_V2",
    plpHoverImage:
      "product/skin/wrinkle/Hims_PLP_Skin_Product_GoodnightWrinkleCream_Hover.jpg",
    plpProductImage:
      "product/skin/wrinkle/Hims_PLP_Skin_Product_GoodnightWrinkleCream",
    link: ROUTE_PATHS.pdpSkinWrinkle
  },
  [PRODUCT_ID_BY_NAME.hairPowerPack]: {
    title: "Hair Power Pack",
    description:
      "A power couple like you’ve never seen before. This duo can put a stop to hair loss and may even help regrow new hair.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "hims-empty-cart-comb.png",
    plpHoverImage: "Hims_PLP_Hair_Product_RXKit_BG.jpg",
    plpProductImage: "product/hair/power-pack/Hims_PLP_Hair_Product_HairPack",
    link: ROUTE_PATHS.pdpHairPowerPack
  },
  [PRODUCT_ID_BY_NAME.completeHairKit]: {
    title: "Hair Complete Pack",
    description:
      "This combination of products covers all bases to keep your hair looking good.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "Hims_PLP_Hair_Product_ShampooPlus_Hover.png",
    plpHoverImage:
      "product/hair/power-pack/hims-plp-hair-powerpack-d-m-background.jpg",
    plpProductImage:
      "product/hair/complete-pack/Hims_PLP_Hair_Product_Complete",
    link: ROUTE_PATHS.pdpHairCompleteKit
  },
  [PRODUCT_ID_BY_NAME.acne]: {
    title: "Acne Cream",
    description:
      "This dermatologist-formulated cream helps to stop acne, decrease inflammation and renew your skin’s surface.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "product/skin/acne/PLP_AcneCream_V2.jpg",
    plpHoverImage: "product/skin/anti-aging/Hims_PLP_Skin_Hover.jpg",
    plpProductImage: "product/skin/anti-aging/Hims_PLP_Skin_Product_AntiAging",
    link: ROUTE_PATHS.pdpSkinAcne
  },
  [PRODUCT_ID_BY_NAME.antiAging]: {
    title: "Anti-Aging Cream",
    description:
      "This prescription cream can help reduce the appearance of fine lines - while also making your skin appear firmer.",
    crossSellImage: "",
    cartImage: "",
    plpBgImage: "product/skin/anti-aging/PLP_AntiAgingCream_V2.jpg",
    plpHoverImage: "product/skin/anti-aging/Hims_PLP_Skin_Hover.jpg",
    plpProductImage: "product/skin/anti-aging/Hims_PLP_Skin_Product_AntiAging",
    link: ROUTE_PATHS.pdpSkinAging
  }
};

/**
 * Optional sorting array. If the product's ID is in this array then it will
 * be sorted in that order when displayed on the PLP. If the ID is not in the
 * ordering ID then it will be sorted to the end of the array.
 *
 * todo: all of this needs to be abstracted to some sort of product core
 */
export const plpProductOrder = {
  hair: [PRODUCT_ID_BY_NAME.finasteride, PRODUCT_ID_BY_NAME.hairPowerPack],
  sex: [PRODUCT_ID_BY_NAME.sildenafilp]
};

export const blogDisclaimer =
  "The views expressed in this article intend to highlight alternative studies and induce conversation. They are the views of the author and do not necessarily represent the views of hims, and are for informational purposes only, even if and to the extent that this article features the advice of physicians and medical practitioners. This article is not, nor is it intended to be, a substitute for professional medical advice, diagnosis or treatment, and should never be relied upon for specific medical advice.";

export const purposeContent = `we’re your one-stop shop for advice, consultation and fda approved
products for everything from hair loss and erectile dysfunction, to
acne and other issues we guys face. 

hims was built by real guys, many of whom are exceptional in their
field in all things men’s health. we have advisors from stanford and
harvard, who lead departments and research on topics like hair loss,
sexual wellness and acne. but more than that, we’re a band of dudes
who took that information, and made products based on that science
just for you. products that look, smell, and feel great, but that
actually work. we’ve put the best of what science and doctors have
to offer right at your fingertips. no snake oil here, fellas. 

for whatever reason, us guys are allergic to doctors. so we made it
easy. like stupid easy. within minutes a doctor can prescribe you
the stuff you need and ship it overnight. simple as that. no
doctor&apos;s appointment. no waiting rooms. no awkward
conversations. oh, and while these products usually cost $100 to
$300 per month at the big guys, we changed that. at hims, we cut
that price in half. and then we slashed it in half again. 

the point of it all—and the message that’s most important to us—is
making sure you realize this one specific thing: having an issue
isn’t weird. not dealing with it _is_ weird. 

_that_ is hims.

reach out with any questions. we&apos;re excited for you. 

andrew  
founder
`;
