import { PRODUCT_ID_BY_NAME } from "../../config/product-ids-by-name";
import { ROUTE_PATHS } from "../../routes/routes.constants";
import { colors } from "../../theme/colors";

export const pdpSkinAging = {
  componentType: "page",
  id: "glow-pdp-page",
  theme: "skin",
  props: {
    title: "hims. handsome. healthy you.",
    description: "",
    links: [
      {
        hrefLang: "en-gb",
        href: ROUTE_PATHS.pdpSkinAging
      }
    ],
    sections: [
      {
        componentType: "floating-add-to-cart",
        id: "Glow-treatment-floating-add-to-cart",
        props: {
          label: "Start my free consultation →",
          productId: PRODUCT_ID_BY_NAME.antiAging,
          variant: "accent",
          showForm: true
        }
      },
      {
        componentType: "product-hero",
        id: "Glow-product-hero",
        props: {
          backgroundColor: "skin",
          contentCard: {
            productId: PRODUCT_ID_BY_NAME.antiAging,
            productSummaryEyebrow: "The Fresh Prince",
            productName: "Anti-Aging Cream",
            description: `Aging can feel terrifying. One day you wake up, you look in the mirror, and the man looking back at you looks like an exhausted stranger. This unfortunate moment in a man’s life is the very reason our dermatologists formulated this powerful Anti-Aging Cream. Not only will it help smooth out your wrinkles, but it’ll help repair the damage from the sun and environment. Which means aging might not be so scary after all.`,
            secondaryDescriptor: "",
            tryNowText: "Start my free consultation →",
            warningCaption:
              "* Prescription products are subject to doctor approval and require an online consultation with a physician who will determine if a prescription is appropriate. * Do not use this medication if you are allergic to tretinoin or niacinamide. Common side effects of the Anti-Aging Formulation which often go away with time and daily use include: itching, redness, scaling, dryness, peeling, burning, stinging, and increased senstivity to the sun. You should avoid other products known to cause skin irritation such as medicated or abrasive soaps, chemical hair removers or waxes, electrolysis, products with alcohol or astringents, and cosmetics with a strong drying effect. Stop using the Anti-Aging Formulation is you become pregnant or are breastfeeding, develop severe cystic acne on other parts of the body besides the face, are diagnosed with skin cancer, start using androgenic steroids or are diagnosed with polycystic ovarian syndrome (PCOS)",
            showISI: true,
            showForm: true,
            offerDescriptor: "Grab £5 off",
            offerCaption:
              "£5 off offer is subject to availability and may be changed at any time.",
            offerCTA: "Give me £5 off!"
          },
          image:
            "product/skin/anti-aging/Hims_PDP_AntiAging_Product01-{imageSize}",
          imageDimensions: [
            { width: 720, height: 720 },
            { width: 720, height: 720 },
            { width: 2880, height: 1660 },
            { width: 2880, height: 1660 }
          ],
          title: "Anti-Aging Cream"
        }
      },
      {
        componentType: "block",
        id: "after-full-screen-image-block",
        props: { mb: 6 }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-one",
        props: {
          id: "skin-fifty-copy-one",
          title: "why does this work?",
          body:
            "As you age, your body produces less and less collagen, and UV exposure can further decrease your collagen levels. This customised formula—which includes a dose of tretinoin—helps your skin produce more collagen to restore your face's buoyant glow. 😇",
          imageId:
            "product/skin/anti-aging/01_Hims_Skin_PDP_AntiAging_renewing",
          hasButtonCta: false,
          cardSide: "left",
          overlap: true,
          stacksOnTop: "left",
          ctaLabel: "LEARN: HOW TRETINOIN WORKS",
          ctaText: "LEARN: HOW TRETINOIN WORKS",
          ctaUrl: ""
        }
      },
      {
        componentType: "image-block",
        id: "hair-full-width-image-1",
        props: {
          image: "product/skin/anti-aging/02_Hims_Skin_PDP_AntiAging",
          title: ""
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-two",
        props: {
          id: "skin-fifty-copy-two",
          title: "how to use?",
          body:
            "Your doctor will tell you how to use this powerful prescription cream. Since it usually takes some time for results to become noticeable— typically about 3 to 6 months—once you start, don't stop (unless you experience a reaction or your doctor tells you to). Your doctor may recommend you start with just 2 to 3 nights a week, then ramp up to nightly use after your skin adjusts. Be sure to connect with a doctor through our platform if you are experiencing any side effects.",
          imageId:
            "product/skin/anti-aging/03_Hims_Skin_PDP_AntiAging_HowtoUse",
          hasButtonCta: false,
          cardSide: "right",
          overlap: true,
          stacksOnTop: "right",
          ctaLabel: "LEARN: HOW TO USE TRETINOIN FOR WRINKLES AND AGING",
          ctaText: "LEARN: HOW TO USE TRETINOIN FOR WRINKLES AND AGING",
          ctaUrl: ""
        }
      },
      {
        componentType: "fifty-fifty-callout",
        id: "skin-fifty-copy-three",
        props: {
          id: "skin-fifty-copy-three",
          title: "what should I expect when I first start using this?",
          body:
            "Because this treatment renews your skin's surface, it's normal to see some dry, red or flaky spots. To help with the dry spots, you can use a moisturiser—but be sure it's free of alcohol, benzoyl peroxide, salicylic acid and other exfoliators to avoid extra irritation. Connect with a doctor through our platform if you are concerned about any reaction you're experiencing.",
          imageId:
            "product/skin/anti-aging/04_Hims_Skin_PDP_AntiAging_WhatShouldExpect_new",
          hasButtonCta: false,
          cardSide: "left",
          overlap: false,
          stacksOnTop: "left",
          ctaLabel: "EARN: WHAT TO EXPECT WHEN USING TRETINOIN FOR WRINKLES",
          ctaText: "EARN: WHAT TO EXPECT WHEN USING TRETINOIN FOR WRINKLES",
          ctaUrl: "https://www.forhims.co.uk/blog/anti-aging-skin-care-for-men"
        }
      },
      {
        componentType: "soft-footer",
        id: "hair-soft-footer",
        props: {
          eyebrowText: "What do I need?",
          text:
            "the solution is real and it’s staring you in the face. Check out our prescription products today and see which ones are right for you!",
          image: "Hims_PLP_Skin_SoftFooter",
          imageAltText: "cocktail",
          bgColor: colors.canvas.skinBlue
        }
      }
    ]
  }
};
